"""Mister Lu · modelo NFL (walk-forward, sem ver o futuro).
Pontos esperados: casa = μ + casa/2 + Ataque_casa − Defesa_fora (+ descanso) ; fora = μ − casa/2 + Ataque_fora − Defesa_casa
Atualização depois de cada jogo: ataque/defesa mexem k × (erro), erro com teto (blowouts não contam tudo).
Margem final: normal(m, σ) × pesos dos «números-chave» (3, 7, 10, 6, 14…) aprendidos nos dados; total: normal(t, σt).
"""
import csv, math, json
from collections import defaultdict
import numpy as np

R = [r for r in csv.DictReader(open('/home/claude/lu-build/games.csv')) if r['game_type'] in ('REG', 'WC', 'DIV', 'CON', 'SB')]
G = []
for r in R:
    g = dict(season=int(r['season']), week=int(r['week']), date=r['gameday'], h=r['home_team'], a=r['away_team'], neutral=r['location'] == 'Neutral',
             hs=int(r['home_score']) if r['home_score'] != '' else None, as_=int(r['away_score']) if r['away_score'] != '' else None,
             spread=float(r['spread_line']) if r['spread_line'] else None, tl=float(r['total_line']) if r['total_line'] else None,
             hml=float(r['home_moneyline']) if r['home_moneyline'] else None, aml=float(r['away_moneyline']) if r['away_moneyline'] else None,
             hrest=int(r['home_rest']) if r['home_rest'] else 7, arest=int(r['away_rest']) if r['away_rest'] else 7, post=r['game_type'] != 'REG', espn=r['espn'], ot=r['overtime'] == '1')
    G.append(g)
ALIAS = {'OAK': 'LV', 'SD': 'LAC', 'STL': 'LA', 'LAR': 'LA'}
for g in G: g['h'] = ALIAS.get(g['h'], g['h']); g['a'] = ALIAS.get(g['a'], g['a'])
G.sort(key=lambda g: (g['date'], g['h']))

DEF = dict(khfa=0.0, k=0.07, carry=0.6, hfa=2.0, cap=21, mu=22.0, bye=1.0, short=0.6, sdm=13.4, sdt=13.2, kmu=0.01)

def am2p(x):
    return 100 / (x + 100) if x > 0 else -x / (-x + 100)

def run(P, W=None, state=None):
    O = defaultdict(float); D = defaultdict(float); mu = P['mu']; season = None; HF = P['hfa']
    out = []
    for g in G:
        if g['season'] != season:
            season = g['season']
            for t in list(O): O[t] *= P['carry']; D[t] *= P['carry']
        h, a = g['h'], g['a']
        hfa = 0 if g['neutral'] else HF
        rest = 0.0
        if g['hrest'] >= 13 and not g['post']: rest += P['bye']
        if g['arest'] >= 13 and not g['post']: rest -= P['bye']
        if g['hrest'] <= 5: rest -= P['short']
        if g['arest'] <= 5: rest += P['short']
        Eh = mu + hfa / 2 + rest / 2 + O[h] - D[a]
        Ea = mu - hfa / 2 - rest / 2 + O[a] - D[h]
        out.append((g, Eh - Ea, Eh + Ea))
        if g['hs'] is None: continue
        eh = max(-P['cap'], min(P['cap'], g['hs'] - Eh)); ea = max(-P['cap'], min(P['cap'], g['as_'] - Ea))
        O[h] += P['k'] * eh; D[a] -= P['k'] * eh
        O[a] += P['k'] * ea; D[h] -= P['k'] * ea
        mu += P['kmu'] * ((g['hs'] + g['as_']) / 2 - mu)
        if not g['neutral']: HF += P.get('khfa', 0) * ((g['hs'] - g['as_']) - (Eh - Ea))
    if state is not None: state.update(O=dict(O), D=dict(D), mu=mu, season=season, hfa=HF)
    return out

def norm_cdf(x): return 0.5 * (1 + math.erf(x / math.sqrt(2)))

def margin_pmf(m, sd, W):
    ks = np.arange(-70, 71)
    base = np.exp(-0.5 * ((ks - m) / sd) ** 2)
    w = np.array([W.get(abs(int(k)), 1.0) for k in ks])
    p = base * w; p /= p.sum()
    return ks, p

def learn_weights(rows, sd):
    """pesos dos números-chave: frequência real de |margem| ÷ frequência que a normal prevê (só treino)."""
    obs = defaultdict(float); exp = defaultdict(float)
    for g, m, t in rows:
        k = abs(g['hs'] - g['as_']); obs[k] += 1
        ks = np.arange(-70, 71); base = np.exp(-0.5 * ((ks - m) / sd) ** 2); base /= base.sum()
        for kk, p in zip(ks, base): exp[abs(int(kk))] += p
    W = {}
    for k in range(0, 71):
        o, e = obs[k], exp[k]
        W[k] = (o + 5) / (e + 5) if e > 0 else 1.0
    return W

def probs(m, t, P, W):
    ks, p = margin_pmf(m, P['sdm'], W)
    ph = p[ks > 0].sum(); tie = p[ks == 0].sum()
    return ks, p, ph + tie / 2

def evaluate(out, lo, hi, P, W):
    L = {'ml': [], 'ml_mkt': [], 'ats': [], 'ats_n': 0, 'ou': [], 'acc': [], 'acc_mkt': []}
    cal = defaultdict(lambda: [0, 0, 0.0])
    for g, m, t in out:
        if not (lo <= g['season'] <= hi) or g['hs'] is None: continue
        ks, p, ph = probs(m, t, P, W)
        y = 1 if g['hs'] > g['as_'] else 0 if g['hs'] < g['as_'] else None
        if y is not None:
            L['ml'].append(-math.log(max(1e-9, ph if y else 1 - ph))); L['acc'].append((ph > .5) == bool(y))
            if g['hml'] and g['aml']:
                ph_m = am2p(g['hml']); pa_m = am2p(g['aml']); nv = ph_m / (ph_m + pa_m)
                L['ml_mkt'].append(-math.log(max(1e-9, nv if y else 1 - nv))); L['acc_mkt'].append((nv > .5) == bool(y))
        if g['spread'] is not None:
            # spread_line > 0 = casa favorita por esse número. O Gi aposta no lado que o modelo prefere.
            line = g['spread']; d = g['hs'] - g['as_'] - line
            pc = p[ks > line].sum(); pp = p[ks == line].sum(); pcov = pc / (1 - pp) if pp < 1 else .5
            if d != 0:
                side_home = pcov > 0.5; L['ats'].append((d > 0) == side_home)
                b = min(4, int(abs(pcov - .5) * 20)); cal[b][0] += 1; cal[b][1] += ((d > 0) == side_home); cal[b][2] += max(pcov, 1 - pcov)
        if g['tl'] is not None:
            tot = g['hs'] + g['as_']
            if tot != g['tl']: L['ou'].append((t > g['tl']) == (tot > g['tl']))
    r = {k: round(float(np.mean(v)), 4) for k, v in L.items() if isinstance(v, list) and v}
    r['n'] = len(L['ml']); r['n_ats'] = len(L['ats'])
    r['ats_cal'] = {f'{50 + 5 * b}-{55 + 5 * b}%': [c[0], round(c[2] / c[0], 3), round(c[1] / c[0], 3)] for b, c in sorted(cal.items()) if c[0]}
    return r

if __name__ == '__main__':
    out = run(DEF)
    W = learn_weights([x for x in out if 2009 <= x[0]['season'] <= 2018 and x[0]['hs'] is not None], DEF['sdm'])
    print({k: round(W[k], 2) for k in (0, 1, 2, 3, 4, 6, 7, 8, 10, 14, 17)})
    print('treino', evaluate(out, 2009, 2018, DEF, W))
    print('teste', evaluate(out, 2022, 2026, DEF, W))

"""Pesos dos números-chave, versão 2: ajuste iterativo (IPF) com a linha de fecho como média,
e a média da distribuição corrigida para bater certo com a linha. Treino 2009-2021, teste 2022-26."""
import json, math, numpy as np
from model import G
KS = np.arange(-70, 71)
def pmf(m, sd, W):
    # corrigir a média: procurar m' tal que a média da distribuição pesada = m
    mm = m
    for _ in range(4):
        b = np.exp(-0.5 * ((KS - mm) / sd) ** 2) * W[np.abs(KS)]; b /= b.sum()
        mm += m - (KS * b).sum()
    return b
def fit(lo, hi, sd, it=12):
    rows = [g for g in G if lo <= g['season'] <= hi and g['hs'] is not None and g['spread'] is not None]
    obs = np.zeros(71); 
    for g in rows: obs[abs(g['hs'] - g['as_'])] += 1
    W = np.ones(71)
    for _ in range(it):
        exp = np.zeros(71)
        for g in rows:
            p = pmf(g['spread'], sd, W)
            np.add.at(exp, np.abs(KS), p)
        W *= (obs + 2) / (exp + 2); W /= W[20:40].mean()
    return W
def evaluate(W, sd, lo, hi):
    rows = [g for g in G if lo <= g['season'] <= hi and g['hs'] is not None and g['spread'] is not None]
    res = {}
    for nm, cond in (('fav<=3.5', lambda s: 0 < abs(s) <= 3.5), ('fav4-9.5', lambda s: 3.5 < abs(s) < 10), ('fav>=10', lambda s: abs(s) >= 10)):
        pr = []; ac = []
        for g in rows:
            s = g['spread']
            if not cond(s) or s != int(s) + 0.5 and s != int(s) - 0.5: continue
            p = pmf(s, sd, W); d = g['hs'] - g['as_']
            # favorito a cobrir a própria linha
            if s > 0: pc = p[KS > s].sum(); y = d > s
            else: pc = p[KS < s].sum(); y = d < s
            pr.append(pc); ac.append(y)
        res[nm] = (len(pr), round(float(np.mean(pr)), 3), round(float(np.mean(ac)), 3))
    alt = {}
    for off in (-7, -3, 3, 7, 10):
        pr = []; ac = []
        for g in rows:
            L = g['spread'] + off; p = pmf(g['spread'], sd, W); d = g['hs'] - g['as_']
            if d == L: continue
            pw = p[KS > L].sum(); pp = p[KS == L].sum(); pr.append(pw / (1 - pp)); ac.append(d > L)
        alt[off] = (round(float(np.mean(pr)), 3), round(float(np.mean(ac)), 3))
    ll = np.mean([-math.log(max(1e-9, pmf(g['spread'], sd, W)[KS == g['hs'] - g['as_']].sum())) for g in rows])
    return res, alt, round(float(ll), 4)
for sd in (12.0, 13.0):
    W = fit(2009, 2021, sd)
    print('sd', sd, 'W', {k: round(W[k], 2) for k in (0, 1, 2, 3, 4, 6, 7, 10, 14, 17, 21, 24, 28)})
    print('  treino', evaluate(W, sd, 2009, 2021))
    print('  teste ', evaluate(W, sd, 2022, 2026))
    json.dump({'sd': sd, 'W': [round(float(x), 4) for x in W]}, open(f'keyw2_{int(sd)}.json', 'w'))

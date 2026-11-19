import json, math, numpy as np
from model import run, evaluate, learn_weights, DEF, G
def loss(P, lo=2009, hi=2018):
    out = run(P); W = learn_weights([x for x in out if 2009 <= x[0]['season'] <= 2018 and x[0]['hs'] is not None], P['sdm'])
    r = evaluate(out, lo, hi, P, W)
    # total: erro quadrático médio do total previsto
    se = [(x[2] - (x[0]['hs'] + x[0]['as_'])) ** 2 for x in out if lo <= x[0]['season'] <= hi and x[0]['hs'] is not None]
    return r['ml'] + 0.002 * math.sqrt(np.mean(se)), r, W
P = dict(DEF); best, r, W = loss(P); print('início', best)
P.update(json.load(open('params.json'))) if __import__('os').path.exists('params.json') else None
best, r, W = loss(P)
grid = {'khfa': [.001, .002, .004, .008], 'k': [.04, .05, .06, .08, .09, .1], 'carry': [.4, .5, .7, .8], 'hfa': [1.0, 1.5, 2.5, 3.0], 'cap': [14, 17, 24, 28], 'bye': [0, .5, 1.5, 2], 'short': [0, .3, 1, 1.5], 'sdm': [12.8, 13.1, 13.7, 14.0], 'kmu': [0, .005, .02], 'mu': [21, 23]}
for rnd in range(3):
    ch = False
    for k, vs in grid.items():
        for v in vs:
            Q = dict(P); Q[k] = v
            if Q[k] == P[k]: continue
            l, rr, WW = loss(Q)
            if l < best - 1e-5: best, P, r, W, ch = l, Q, rr, WW, True; print(rnd, k, v, round(best, 5), flush=True)
    if not ch: break
json.dump(P, open('params.json', 'w'), indent=1)
out = run(P); W = learn_weights([x for x in out if 2009 <= x[0]['season'] <= 2018 and x[0]['hs'] is not None], P['sdm'])
for lo, hi, nm in ((2009, 2018, 'treino'), (2019, 2021, 'validação'), (2022, 2026, 'teste')):
    print(nm, json.dumps(evaluate(out, lo, hi, P, W)))
json.dump({str(k): round(v, 4) for k, v in W.items()}, open('keyw.json', 'w'))
print(P)

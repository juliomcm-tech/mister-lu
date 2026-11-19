'use strict';
/* =====================================================================
   MISTER LU · NFL  —  análise e duelo de apostas, só futebol americano.
   Um ficheiro, cinco ecrãs: Início · Jogos · Duelo · Contas · Mais.
   Dados: arquivo do Lu (seed.json, nflverse até à véspera) + ESPN.
   Só vai à internet quando carregas em ↻. Tudo fica no telemóvel («lu_…»).
   ===================================================================== */
const APP_VER = '1.2.3';

/* ---------- utilitários ---------- */
const $ = s => document.querySelector(s);
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const r2 = x => Math.round(x * 100) / 100;
const r3 = x => Math.round(x * 1000) / 1000;
const LS = {
  get(k, d) { try { const v = localStorage.getItem('lu_' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('lu_' + k, JSON.stringify(v)); return true; } catch (e) { toast('⚠️ A memória do telemóvel está cheia'); return false; } }
};
const eur = v => (Number(v) || 0).toLocaleString('pt-PT', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';
const sEur = v => (v > 0 ? '+' : v < 0 ? '−' : '') + eur(Math.abs(v));
const odd2 = v => v ? Number(v).toFixed(2).replace('.', ',') : '—';
const pct = v => Math.round(v * 100) + '%';
const sPct = v => (v > 0 ? '+' : v < 0 ? '−' : '') + Math.abs(Math.round(v * 100)) + '%';
const lineTxt = v => v == null ? '' : (v > 0 ? '+' : v < 0 ? '−' : '') + String(Math.abs(v)).replace('.', ',');
const num = x => { const v = parseFloat(String(x == null ? '' : x).replace(',', '.').replace(/[^\d.+-]/g, '')); return isFinite(v) ? v : null; };
function toast(msg, ms) { const t = $('#toast'); if (!t) return; t.innerHTML = msg; t.classList.add('on'); clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove('on'), ms || 2600); }
/* odds americanas (−110, +150) → decimais (1.91, 2.50) */
function american(x) {
  if (x == null || x === '') return null;
  if (typeof x === 'object') return american(x.american != null ? x.american : x.value != null ? x.value : x.odds != null ? x.odds : x.decimal);
  const s = String(x).trim();
  if (/^even$/i.test(s) || /^evs?$/i.test(s)) return 2;
  const v = Number(s.replace('+', ''));
  if (!isFinite(v) || v === 0) return null;
  if (Math.abs(v) >= 100) return r2(v > 0 ? 1 + v / 100 : 1 + 100 / Math.abs(v));
  return v > 1 && v < 30 ? r2(v) : null;
}


/* ---------- datas (a NFL conta os dias pela hora de Nova Iorque) ---------- */
const fmtET = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit' });
const etYmd = d => fmtET.format(d).replace(/-/g, '');
const ymdAdd = (s, n) => { const d = new Date(Date.UTC(+s.slice(0, 4), +s.slice(4, 6) - 1, +s.slice(6, 8) + n)); return d.toISOString().slice(0, 10).replace(/-/g, ''); };
const ymdDiff = (a, b) => Math.round((Date.UTC(+b.slice(0, 4), +b.slice(4, 6) - 1, +b.slice(6, 8)) - Date.UTC(+a.slice(0, 4), +a.slice(4, 6) - 1, +a.slice(6, 8))) / 864e5);
const hhmm = iso => new Date(iso).toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' });
const dayLbl = iso => new Date(iso).toLocaleDateString('pt-PT', { weekday: 'short', day: '2-digit', month: '2-digit' }).replace('.', '');
const todayET = () => etYmd(new Date());
const seasonOf = ed => { const y = +ed.slice(0, 4), m = +ed.slice(4, 6); return m >= 3 ? y : y - 1; };   // a época 2026 acaba em fev. 2027

/* ---------- as 32 equipas (abreviatura do nflverse; a ESPN usa algumas diferentes) ---------- */
const TEAMS = {
  ARI: ['Arizona', 'Cardinals', '97233f', '000000'], ATL: ['Atlanta', 'Falcons', 'a71930', '000000'], BAL: ['Baltimore', 'Ravens', '241773', '9e7c0c'], BUF: ['Buffalo', 'Bills', '00338d', 'c60c30'],
  CAR: ['Carolina', 'Panthers', '0085ca', '101820'], CHI: ['Chicago', 'Bears', '0b162a', 'c83803'], CIN: ['Cincinnati', 'Bengals', 'fb4f14', '000000'], CLE: ['Cleveland', 'Browns', '311d00', 'ff3c00'],
  DAL: ['Dallas', 'Cowboys', '003594', '869397'], DEN: ['Denver', 'Broncos', 'fb4f14', '002244'], DET: ['Detroit', 'Lions', '0076b6', 'b0b7bc'], GB: ['Green Bay', 'Packers', '203731', 'ffb612'],
  HOU: ['Houston', 'Texans', '03202f', 'a71930'], IND: ['Indianapolis', 'Colts', '002c5f', 'a2aaad'], JAX: ['Jacksonville', 'Jaguars', '006778', 'd7a22a'], KC: ['Kansas City', 'Chiefs', 'e31837', 'ffb81c'],
  LV: ['Las Vegas', 'Raiders', '000000', 'a5acaf'], LAC: ['LA Chargers', 'Chargers', '0080c6', 'ffc20e'], LA: ['LA Rams', 'Rams', '003594', 'ffa300'], MIA: ['Miami', 'Dolphins', '008e97', 'fc4c02'],
  MIN: ['Minnesota', 'Vikings', '4f2683', 'ffc62f'], NE: ['New England', 'Patriots', '002244', 'c60c30'], NO: ['New Orleans', 'Saints', 'd3bc8d', '101820'], NYG: ['NY Giants', 'Giants', '0b2265', 'a71930'],
  NYJ: ['NY Jets', 'Jets', '125740', '000000'], PHI: ['Philadelphia', 'Eagles', '004c54', 'a5acaf'], PIT: ['Pittsburgh', 'Steelers', '101820', 'ffb612'], SF: ['San Francisco', '49ers', 'aa0000', 'b3995d'],
  SEA: ['Seattle', 'Seahawks', '002244', '69be28'], TB: ['Tampa Bay', 'Buccaneers', 'd50a0a', '34302b'], TEN: ['Tennessee', 'Titans', '0c2340', '4b92db'], WAS: ['Washington', 'Commanders', '5a1414', 'ffb612']
};
const ESPN2NFL = { WSH: 'WAS', LAR: 'LA', JAC: 'JAX', OAK: 'LV', SD: 'LAC', STL: 'LA' };
const nflAb = ab => { ab = String(ab || '').toUpperCase(); return TEAMS[ab] ? ab : ESPN2NFL[ab] || null; };
const DIV = { BUF: 'AFC Este', MIA: 'AFC Este', NE: 'AFC Este', NYJ: 'AFC Este', BAL: 'AFC Norte', CIN: 'AFC Norte', CLE: 'AFC Norte', PIT: 'AFC Norte', HOU: 'AFC Sul', IND: 'AFC Sul', JAX: 'AFC Sul', TEN: 'AFC Sul', DEN: 'AFC Oeste', KC: 'AFC Oeste', LV: 'AFC Oeste', LAC: 'AFC Oeste', DAL: 'NFC Este', NYG: 'NFC Este', PHI: 'NFC Este', WAS: 'NFC Este', CHI: 'NFC Norte', DET: 'NFC Norte', GB: 'NFC Norte', MIN: 'NFC Norte', ATL: 'NFC Sul', CAR: 'NFC Sul', NO: 'NFC Sul', TB: 'NFC Sul', ARI: 'NFC Oeste', LA: 'NFC Oeste', SF: 'NFC Oeste', SEA: 'NFC Oeste' };
const AFC = ['BUF', 'MIA', 'NE', 'NYJ', 'BAL', 'CIN', 'CLE', 'PIT', 'HOU', 'IND', 'JAX', 'TEN', 'DEN', 'KC', 'LV', 'LAC'];

/* ---------- guardado ---------- */
const arrOr = v => Array.isArray(v) ? v : [], objOr = v => v && typeof v === 'object' && !Array.isArray(v) ? v : {};
let DB = LS.get('db', null); if (!DB || !DB.g || !DB.days) DB = { g: {}, days: {} };
let BETS = arrOr(LS.get('bets', [])), PREDS = objOr(LS.get('preds', {})), DEPOS = arrOr(LS.get('depos', [])), SLIPS = objOr(LS.get('slips', {}));
let BO = objOr(LS.get('bo', {}));                // odds da Betano que tu metes (por jogo)
const CFG_DEF = { bank: { tu: 100, lu: 100, pi: 250 }, min: 0.25, piOn: true, piStake: 2.5, evMin: 0.05, mktW: 0.90, mktWt: 0.95, oddMin: 1.30, oddMax: 4.50 };
let CFG = Object.assign({}, CFG_DEF, objOr(LS.get('cfg', {})));
CFG.bank = Object.assign({}, CFG_DEF.bank, CFG.bank || {});
if (CFG.botV !== 1) { CFG.piOn = true; CFG.botV = 1; }   // 1.2: o piloto passou a ser o «Lu sozinho», ligado de origem
const saveDB = () => LS.set('db', DB);
const saveBets = () => LS.set('bets', BETS);
let SEED = null;

/* =====================================================================
   1) IR BUSCAR À ESPN
   ===================================================================== */
const ESPN = 'https://site.api.espn.com/apis/site/v2/sports/football/nfl';
const BRIDGES = [
  { n: 'Direto', f: u => u },
  { n: 'corsproxy.io', f: u => 'https://corsproxy.io/?url=' + encodeURIComponent(u) },
  { n: 'allorigins', f: u => 'https://api.allorigins.win/raw?url=' + encodeURIComponent(u) }
];
async function getJSON(url, tmo) {
  const pref = clamp(LS.get('bridge', 0), 0, BRIDGES.length - 1);
  const order = [pref].concat(BRIDGES.map((_, i) => i).filter(i => i !== pref));
  let last = null;
  for (const i of order) {
    const ctrl = new AbortController(); const tm = setTimeout(() => ctrl.abort(), tmo || 15000);
    try {
      const r = await fetch(BRIDGES[i].f(url), { signal: ctrl.signal, cache: 'no-store' });
      if (!r.ok) { const e = new Error('HTTP ' + r.status); e.status = r.status; throw e; }
      const j = await r.json();
      if (i !== pref) LS.set('bridge', i);
      return j;
    } catch (e) { last = e; if (e.status === 400 || e.status === 404) throw e; }
    finally { clearTimeout(tm); }
  }
  throw last || new Error('sem ligação');
}
const scoreVal = x => x == null ? null : typeof x === 'object' ? Number(x.value != null ? x.value : x.displayValue) : Number(x);
function pickSide(s) { return s ? (s.close || s.current || s.open || s) : null; }

/* odds da ESPN: vencedor, handicap (linha da casa: negativa = casa favorita) e total — tudo conta prolongamento */
function parseOdds(o, hab, aab) {
  if (!o) return null;
  const r = { p: (o.provider && o.provider.name) || 'casa' };
  let hl = null, tl = null;
  try {
    const ps = o.pointSpread;
    if (ps && ps.home) { const x = pickSide(ps.home), y = pickSide(ps.away); if (x && x.line != null) hl = num(x.line); r.hso = american(x && x.odds); r.aso = american(y && y.odds); }
    const T = o.total;
    if (T && T.over) { const x = pickSide(T.over), y = pickSide(T.under); if (x && x.line != null) tl = num(String(x.line).replace(/^[ou]/i, '')); r.ovo = american(x && x.odds); r.uno = american(y && y.odds); }
    const ML = o.moneyline;
    if (ML && ML.home) { r.hml = american(pickSide(ML.home) && pickSide(ML.home).odds); r.aml = american(pickSide(ML.away) && pickSide(ML.away).odds); }
  } catch (e) {}
  if (hl == null && o.details) {   // formato antigo: «KC -6.5»
    const m = String(o.details).match(/^([A-Z]{2,4})\s+([+-]?\d+(?:\.\d+)?)/);
    if (m && Math.abs(+m[2]) < 30) { const v = Math.abs(+m[2]), ab = nflAb(m[1]); hl = ab === hab ? -v : ab === aab ? v : null; }
    else if (/\b(EVEN|PK|PICK)\b/i.test(o.details)) hl = 0;
  }
  if (hl == null && o.spread != null && o.homeTeamOdds) { const v = Math.abs(+o.spread); if (o.homeTeamOdds.favorite) hl = -v; else if (o.awayTeamOdds && o.awayTeamOdds.favorite) hl = v; }
  if (tl == null && o.overUnder != null) tl = num(o.overUnder);
  const H = o.homeTeamOdds || {}, A = o.awayTeamOdds || {};
  if (!r.hml && H.moneyLine != null) r.hml = american(H.moneyLine);
  if (!r.aml && A.moneyLine != null) r.aml = american(A.moneyLine);
  if (!r.hso && H.spreadOdds != null) r.hso = american(H.spreadOdds);
  if (!r.aso && A.spreadOdds != null) r.aso = american(A.spreadOdds);
  if (!r.ovo && o.overOdds != null) r.ovo = american(o.overOdds);
  if (!r.uno && o.underOdds != null) r.uno = american(o.underOdds);
  r.hl = hl != null && Math.abs(hl) < 30 ? hl : null;
  r.tl = tl != null && tl > 25 && tl < 75 ? tl : null;
  Object.keys(r).forEach(k => { if (r[k] == null) delete r[k]; });
  return (r.hl != null || r.tl != null || r.hml) ? r : null;
}
function ingest(ev) {
  const c = ev && ev.competitions && ev.competitions[0];
  if (!c || !c.competitors) return null;
  const H = c.competitors.find(x => x.homeAway === 'home'), A = c.competitors.find(x => x.homeAway === 'away');
  if (!H || !A || !H.team || !A.team) return null;
  const h = nflAb(H.team.abbreviation), a = nflAb(A.team.abbreviation);
  if (!h || !a) return null;                                                     // Pro Bowl e afins
  const ty = ev.season && ev.season.type;
  if (ty && [2, 3].indexOf(Number(ty)) < 0) return null;                         // só época regular e playoffs
  DB.logos = DB.logos || {}; [[h, H.team], [a, A.team]].forEach(([k, t]) => { const u = t.logo || (t.logos && t.logos[0] && t.logos[0].href); if (u && /^https:\/\//.test(u)) DB.logos[k] = u; });
  const S = (c.status || ev.status || {}), st = S.type || {};
  const off = /POSTPON|CANCEL|SUSPEND/i.test(String(st.name || '') + ' ' + String(st.description || ''));
  const s = off ? 'off' : (st.completed || st.state === 'post') ? 'post' : st.state === 'in' ? 'in' : 'pre';
  const id = String(ev.id), old = DB.g[id];
  const g = { id, d: ev.date || c.date, h, a, s, ty: Number(ty) || 2, wk: ev.week && ev.week.number ? (Number(ty) === 3 ? 18 + Math.min(4, Number(ev.week.number)) : Number(ev.week.number)) : (old && old.wk) || null, src: 'espn', neu: !!c.neutralSite };
  g.ed = etYmd(new Date(g.d));
  if (s === 'post' || s === 'in') { g.hs = scoreVal(H.score); g.as = scoreVal(A.score); g.per = Number(S.period) || 0; g.cl = st.shortDetail || st.detail || ''; g.ot = s === 'post' && (g.per > 4 || /OT/i.test(g.cl)); }
  const o = parseOdds(c.odds && c.odds[0], h, a);
  g.o = s === 'pre' ? (o || (old && old.o) || null) : ((old && old.o) || o || null);
  if (!g.o) delete g.o;
  DB.g[id] = g;
  return g;
}
let BUSY = false;
async function refresh() {
  if (BUSY || !SEED) return; BUSY = true;
  const btn = $('#btnRefresh'); if (btn) btn.classList.add('spin'); document.body.classList.add('busy');
  const T = todayET(), end = ymdAdd(T, 12);
  const cut = SEED.cut.replace(/-/g, '');
  let fails = 0, got = 0;
  try {
    // dia a dia desde o fim do arquivo até daqui a 12 dias (a semana NFL inteira e a seguinte: quinta, domingo e segunda)
    let d = ymdAdd(cut, 1); if (d < ymdAdd(T, -380)) d = ymdAdd(T, -380);
    for (let i = 0; d <= end && i < 420; i++, d = ymdAdd(d, 1)) {
      if (DB.days[d] && d < ymdAdd(T, -2)) continue;
      setUpd(`⏳ A buscar ${d.slice(6)}/${d.slice(4, 6)} à ESPN…`);
      try { const j = await getJSON(`${ESPN}/scoreboard?dates=${d}`); if (!j || !Array.isArray(j.events)) throw new Error('resposta sem jogos'); j.events.forEach(e => { if (ingest(e)) got++; }); if (d < ymdAdd(T, -2)) DB.days[d] = 1; }
      catch (e) { fails++; if (i >= 2 && !got && fails >= i + 1) break; }
      await new Promise(r => setTimeout(r, 60));
    }
    saveDB();
    MODEL = null; PC.clear();
    snapshotPreds();
    snapshotSlips();
    const sett = settleAll();
    const pil = pilotRun(); bossFeed();
    LS.set('last', Date.now());
    toast(fails && !got ? 'Sem ligação à ESPN. Experimenta «Testar ligação» nas Definições.' : `Atualizado: ${got} jogo${got === 1 ? '' : 's'}${sett ? ` · ${sett} aposta${sett === 1 ? '' : 's'} fechada${sett === 1 ? '' : 's'}` : ''}${pil ? ` · o Lu sozinho apostou em ${pil} jogo${pil === 1 ? '' : 's'}` : ''}`, 4200);
  } catch (e) {
    toast('❌ Falhou: ' + esc(e.message || e));
  } finally {
    BUSY = false; if (btn) btn.classList.remove('spin'); document.body.classList.remove('busy'); render();
  }
}

/* =====================================================================
   2) O CÉREBRO DO LU
   Pontos esperados: casa = média + casa/2 + Ataque casa − Defesa fora (± descanso)
                     fora = média − casa/2 + Ataque fora − Defesa casa
   - depois de cada jogo, ataque e defesa mexem 9% do erro (com teto de 21 pts: goleadas não contam tudo)
   - vantagem de jogar em casa aprende-se sozinha (caiu de ~3 pts para ~1 pt nos últimos anos)
   - semana de folga +1 pt · jogar à quinta depois de domingo −0,6
   - margem final: normal × «números-chave» (3 e 7 acontecem muito mais; empates quase nunca),
     aprendidos em 17 épocas de jogos reais
   Teste às cegas 2022-26: o modelo sozinho acerta 65% dos vencedores; a linha de fecho da casa 68%.
   Por isso o Lu junta a linha da casa com peso alto (aprende o peso) e usa o modelo de margens para
   pôr preço certo nas linhas alternativas, onde a Betano às vezes erra.
   ===================================================================== */
let MODEL = null;
const PC = new Map();
function buildModel() {
  const P = SEED.par, cut = SEED.cut.replace(/-/g, '');
  const O = {}, D = {}, LAST = {};
  Object.entries(SEED.teams).forEach(([t, v]) => { O[t] = v[0]; D[t] = v[1]; LAST[t] = String(v[2] || '').replace(/-/g, ''); });
  let mu = SEED.mu, HF = SEED.hfa, season = SEED.season;
  const seedG = (SEED.games || []).map((r, i) => ({ id: 'n' + (r[8] || i), espn: String(r[8] || ''), d: r[0] + 'T18:00:00Z', ed: r[0].replace(/-/g, ''), wk: r[1], h: r[2], a: r[3], hs: r[4], as: r[5], sl: r[6], tl: r[7], ot: !!r[9], s: r[4] != null ? 'post' : 'pre', src: 'seed' }));
  const espnFin = Object.values(DB.g).filter(g => g.ed > cut && TEAMS[g.h] && TEAMS[g.a] && g.s === 'post' && g.hs != null).sort((x, y) => x.d < y.d ? -1 : 1);
  espnFin.forEach(g => {
    const sy = seasonOf(g.ed);
    if (sy !== season) { season = sy; Object.keys(O).forEach(t => { O[t] *= P.carry; D[t] *= P.carry; }); }
    const E = expPts(P, O, D, mu, HF, LAST, g);
    const cap = x => clamp(x, -P.cap, P.cap), eh = cap(g.hs - E.h), ea = cap(g.as - E.a);
    O[g.h] = (O[g.h] || 0) + P.k * eh; D[g.a] = (D[g.a] || 0) - P.k * eh;
    O[g.a] = (O[g.a] || 0) + P.k * ea; D[g.h] = (D[g.h] || 0) - P.k * ea;
    mu += P.kmu * ((g.hs + g.as) / 2 - mu);
    if (!g.neu) HF += P.khfa * ((g.hs - g.as) - (E.h - E.a));
    LAST[g.h] = LAST[g.a] = g.ed;
  });
  // registos da época
  const espnIds = new Set(espnFin.map(g => g.id));
  const all = seedG.filter(g => g.s === 'post' && !espnIds.has(g.espn)).concat(espnFin.filter(g => seasonOf(g.ed) === season));
  const rec = {}; const R = t => rec[t] = rec[t] || { w: 0, l: 0, t: 0, hw: 0, hl: 0, aw: 0, al: 0, pf: 0, pa: 0, last: [] };
  all.filter(g => seasonOf(g.ed) === season && g.ty !== 3).sort((x, y) => x.d < y.d ? -1 : 1).forEach(g => {
    const H = R(g.h), A = R(g.a), d = g.hs - g.as;
    if (d > 0) { H.w++; H.hw++; A.l++; A.al++; } else if (d < 0) { A.w++; A.aw++; H.l++; H.hl++; } else { H.t++; A.t++; }
    H.pf += g.hs; H.pa += g.as; A.pf += g.as; A.pa += g.hs;
    H.last.push({ w: d > 0, t: d === 0, s: g.hs + '-' + g.as, vs: g.a }); A.last.push({ w: d < 0, t: d === 0, s: g.as + '-' + g.hs, vs: g.h });
  });
  return { O, D, mu, HF, LAST, rec, season, nEspn: espnFin.length, seedG };
}
const getModel = () => MODEL || (MODEL = buildModel());
function mergeSeed() {
  let n = 0;
  (SEED.games || []).forEach(r => {
    const id = String(r[8] || ''); if (!id || r[4] == null || (DB.g[id] && DB.g[id].src === 'espn')) return;
    DB.g[id] = { id, d: r[0] + 'T18:00:00Z', ed: r[0].replace(/-/g, ''), wk: r[1], h: r[2], a: r[3], s: 'post', hs: r[4], as: r[5], ot: !!r[9], ty: r[10] ? 3 : 2, src: 'seed' }; n++;
  });
  if (n) saveDB();
}
function restOf(LAST, t, g) {
  let l = LAST[t] && LAST[t] < g.ed ? LAST[t] : null;
  for (const x of Object.values(DB.g)) if ((x.h === t || x.a === t) && x.s !== 'off' && x.ed < g.ed && (!l || x.ed > l)) l = x.ed;
  return l ? ymdDiff(l, g.ed) : null;
}
function expPts(P, O, D, mu, HF, LAST, g) {
  const hfa = g.neu ? 0 : HF, rh = restOf(LAST, g.h, g), ra = restOf(LAST, g.a, g), post = g.ty === 3;
  let rest = 0;
  if (!post && rh >= 13) rest += P.bye; if (!post && ra >= 13) rest -= P.bye;
  if (rh != null && rh <= 5) rest -= P.short; if (ra != null && ra <= 5) rest += P.short;
  return { h: mu + hfa / 2 + rest / 2 + (O[g.h] || 0) - (D[g.a] || 0), a: mu - hfa / 2 - rest / 2 + (O[g.a] || 0) - (D[g.h] || 0), rest, rh, ra, hfa };
}
/* distribuição da margem final (casa − fora): normal com os números-chave do futebol americano */
const PMF = new Map();
function marginPmf(m) {
  // A linha do centro fica 50/50 (é assim que as casas a põem: metade cobre, metade não);
  // os números-chave (3, 7, 10…) só decidem como a probabilidade se espalha à volta.
  // Teste às cegas 2022-26: 0% de «valor» falso na linha principal (antes 2-12%) e linhas alternativas tão certas ou mais.
  const key = Math.round(m * 4) / 4; if (PMF.has(key)) return PMF.get(key);
  const sd = SEED.par.sdm, W = SEED.W, p = new Float64Array(141);
  const fill = mm => { let s = 0, up = 0, dn = 0; for (let i = 0; i < 141; i++) { const k = i - 70; p[i] = Math.exp(-0.5 * ((k - mm) / sd) ** 2) * (W[Math.abs(k)] || 1); s += p[i]; } for (let i = 0; i < 141; i++) { p[i] /= s; const k = i - 70; if (k > key) up += p[i]; else if (k < key) dn += p[i]; } return up - dn; };
  let lo = key - 8, hi = key + 8;
  for (let it = 0; it < 30; it++) { const mid = (lo + hi) / 2; if (fill(mid) > 0) hi = mid; else lo = mid; }
  fill((lo + hi) / 2);
  if (PMF.size > 4000) PMF.clear(); PMF.set(key, p); return p;
}
function Phi(x) { const t = 1 / (1 + 0.3275911 * Math.abs(x) / Math.SQRT2), y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x / 2); return x >= 0 ? (1 + y) / 2 : (1 - y) / 2; }
/* o Lu aprende quanto confiar na linha da casa (com as previsões que guardou antes de cada jogo) */
let CALW = null;
function calibW() {
  const k = Object.keys(PREDS).length + '|' + LS.get('last', 0); if (CALW && CALW.k === k) return CALW;
  let ed = 0, dd = 0, n = 0;
  Object.entries(PREDS).forEach(([id, p]) => { const g = DB.g[id]; if (!g || g.s !== 'post' || g.hs == null || p.mk == null || p.mm == null) return; const d = p.mk - p.mm; ed += ((g.hs - g.as) - p.mm) * d; dd += d * d; n++; });
  const raw = dd > 0 ? ed / dd : CFG.mktW;
  CALW = { k, n, raw, w: clamp((n * clamp(raw, 0, 1) + 120 * CFG.mktW) / (n + 120), 0.6, 0.98) };
  return CALW;
}
function predict(g) {
  const M = getModel(), P = SEED.par, o = g.o || {};
  const key = [g.id, g.s, Object.keys(DB.g).length, M.nEspn, o.hl, o.tl, o.hml, o.aml, calibW().w, CFG.mktWt, CFG.evMin, CFG.oddMin, CFG.oddMax, JSON.stringify(BO[g.id] || {})].join('|');
  const hit = PC.get(g.id); if (hit && hit.k === key) return hit.P;
  const E = expPts(P, M.O, M.D, M.mu, M.HF, M.LAST, g);
  const mModel = E.h - E.a, tModel = E.h + E.a;
  const W = calibW().w, Wt = CFG.mktWt;
  const hasM = o.hl != null, hasT = o.tl != null;
  const m = hasM ? W * (-o.hl) + (1 - W) * mModel : mModel;
  const t = hasT ? Wt * o.tl + (1 - Wt) * tModel : tModel;
  const pm = marginPmf(m);
  let ph = 0, tie = 0; for (let i = 0; i < 141; i++) { const k = i - 70; if (k > 0) ph += pm[i]; else if (k === 0) tie = pm[i]; }
  let pML = ph / (1 - tie), pNV = null;
  if (o.hml > 1 && o.aml > 1) { pNV = (1 / o.hml) / (1 / o.hml + 1 / o.aml); pML = clamp(pNV + (1 - W) * (pML - pNV), 0.01, 0.99); }
  const out = { g, E, mModel, tModel, m, t, W: hasM ? W : 0, Wt: hasT ? Wt : 0, pm, pML, tie, pNV, rh: E.rh, ra: E.ra };
  out.reasons = [
    ['Ataque e defesa (época)', ((M.O[g.h] || 0) - (M.D[g.a] || 0)) - ((M.O[g.a] || 0) - (M.D[g.h] || 0))],
    ['Jogar em casa', E.hfa],
    ['Descanso (folga / jogo à quinta)', E.rest]
  ];
  out.cands = candidates(g, out);
  const elig = out.cands.filter(c => c.src === 'Betano' && c.odd >= CFG.oddMin && c.odd <= CFG.oddMax).sort((x, y) => y.ev - x.ev);   // valor só contra a Betano
  out.best = elig[0] || null;
  out.value = out.best && out.best.ev >= CFG.evMin ? out.best : null;
  PC.set(g.id, { k: key, P: out });
  return out;
}
/* mercados (todos contam prolongamento, como na Betano): vencedor · handicap · total */
function probs(P, mk, sel, line) {
  if (mk === 'ml') return { w: sel === 'h' ? P.pML * (1 - P.tie) : (1 - P.pML) * (1 - P.tie), push: P.tie };
  if (mk === 'sp') {   // handicap: casa com linha L ganha se margem + L > 0
    let w = 0, push = 0;
    for (let i = 0; i < 141; i++) { const k = i - 70, d = (sel === 'h' ? k : -k) + line; if (d > 1e-9) w += P.pm[i]; else if (Math.abs(d) < 1e-9) push += P.pm[i]; }
    return { w, push };
  }
  if (mk === 'tot') {
    const sd = SEED.par.sdt, isInt = Math.abs(line - Math.round(line)) < 1e-9;
    if (isInt) { const hi = Phi((line + 0.5 - P.t) / sd), lo = Phi((line - 0.5 - P.t) / sd); return sel === 'o' ? { w: 1 - hi, push: hi - lo } : { w: lo, push: hi - lo }; }
    const pu = Phi((line - P.t) / sd); return sel === 'o' ? { w: 1 - pu, push: 0 } : { w: pu, push: 0 };
  }
  return { w: 0, push: 0 };
}
const evOf = (q, odd) => q.w * odd + q.push - 1;
const fairOf = q => q.w > 0 ? (1 - q.push) / q.w : 99;
function candidates(g, P) {
  const o = g.o || {}, b = BO[g.id] || {}, out = [];
  const add = (mk, sel, line, odd, src) => { if (!(odd > 1)) return; const q = probs(P, mk, sel, line); out.push({ mk, sel, line: line == null ? null : line, odd: r2(odd), src, p: q.w, push: q.push, ev: evOf(q, odd), fair: fairOf(q) }); };
  add('ml', 'h', null, b.mh, 'Betano'); add('ml', 'a', null, b.ma, 'Betano');
  if (b.hl != null) { add('sp', 'h', b.hl, b.hh, 'Betano'); add('sp', 'a', -b.hl, b.ha, 'Betano'); }
  if (b.tl != null) { add('tot', 'o', b.tl, b.to, 'Betano'); add('tot', 'u', b.tl, b.tu, 'Betano'); }
  const ps = o.p || 'ESPN';
  if (o.hml && o.aml) { add('ml', 'h', null, o.hml, ps); add('ml', 'a', null, o.aml, ps); }
  if (o.hl != null) { add('sp', 'h', o.hl, o.hso || 1.91, ps); add('sp', 'a', -o.hl, o.aso || 1.91, ps); }
  if (o.tl != null) { add('tot', 'o', o.tl, o.ovo || 1.91, ps); add('tot', 'u', o.tl, o.uno || 1.91, ps); }
  return out;
}
const tName = t => (TEAMS[t] && TEAMS[t][0]) || t || '?';
const tNick = t => (TEAMS[t] && TEAMS[t][1]) || t || '?';
const gl = n => String(n).replace('.', ',');
function selLabel(g, mk, sel, line) {
  const T = s => tNick(s === 'h' ? g.h : g.a);
  if (mk === 'ml') return T(sel) + ' ganha';
  if (mk === 'sp') return T(sel) + ' ' + lineTxt(line);
  return (sel === 'o' ? 'Mais de ' : 'Menos de ') + gl(line) + ' pontos';
}
const mkName = mk => ({ ml: 'Vencedor (incl. prolongamento)', sp: 'Handicap', tot: 'Total de pontos' }[mk] || mk);
const gLabel = g => tNick(g.h) + ' – ' + tNick(g.a);

function snapshotPreds() {
  const now = Date.now();
  Object.values(DB.g).forEach(g => {
    if (!TEAMS[g.h] || !TEAMS[g.a] || g.s !== 'pre' || new Date(g.d).getTime() < now - 6e5) return;
    if (ymdDiff(todayET(), g.ed) > 8) return;
    const P = predict(g);
    PREDS[g.id] = { m: r2(P.m), mm: r2(P.mModel), mk: g.o && g.o.hl != null ? -g.o.hl : null, t: r2(P.t), tm: r2(P.tModel), tl: g.o && g.o.tl, ml: r3(P.pML), nv: P.pNV != null ? r3(P.pNV) : null, ed: g.ed,
      pk: P.value ? { mk: P.value.mk, sel: P.value.sel, line: P.value.line, odd: P.value.odd, ev: r2(P.value.ev), p: r2(P.value.p), lb: selLabel(g, P.value.mk, P.value.sel, P.value.line), src: P.value.src } : null, ts: now };
  });
  const ks = Object.keys(PREDS); if (ks.length > 800) ks.sort((a, b) => PREDS[a].ts - PREDS[b].ts).slice(0, ks.length - 800).forEach(k => delete PREDS[k]);
  LS.set('preds', PREDS);
}

/* =====================================================================
   3) CONTAS: Tu · Mister Lu · Lu sozinho (bot)
   ===================================================================== */
const ACC = { tu: { n: 'Tu', ic: 'star', c: 'var(--c-blue)' }, lu: { n: 'Mister Lu', ic: 'ball', c: 'var(--c-orange)' }, pi: { n: 'Lu sozinho', ic: 'robot', c: 'var(--c-purple)' } };
function accStats(acc) {
  const B = BETS.filter(b => b.acc === acc);
  const dep = DEPOS.filter(d => d.acc === acc).reduce((s, d) => s + d.v, 0);
  let staked = 0, ret = 0, open = 0, setSt = 0, setRet = 0, w = 0, l = 0;
  B.forEach(b => {
    staked += b.stake;
    if (b.st === 'open') open += b.stake;
    else { ret += b.ret || 0; if (b.st !== 'void') { setSt += b.stake; setRet += b.ret || 0; if (b.st === 'won') w++; if (b.st === 'lost') l++; } }
  });
  const start = (CFG.bank[acc] || 0) + dep;
  return { start, bal: r2(start - staked + ret), open: r2(open), profit: r2(setRet - setSt), roi: setSt ? (setRet - setSt) / setSt : 0, w, l, n: B.length, nOpen: B.filter(b => b.st === 'open').length };
}
const canBet = g => g && g.s === 'pre' && new Date(g.d).getTime() > Date.now();
function newBet(acc, g, c, stake, extra) {
  const b = Object.assign({ id: acc + Date.now().toString(36) + Math.random().toString(36).slice(2, 6), acc, g: g.id, gl: gLabel(g), gd: g.d, mk: c.mk, sel: c.sel, line: c.line == null ? null : c.line, odd: r2(c.odd), stake: r2(stake), t: Date.now(), st: 'open', ret: 0, lb: selLabel(g, c.mk, c.sel, c.line) }, extra || {});
  BETS.push(b); return b;
}
function outcome(b, g) {
  if (g.s === 'off') return Date.now() - new Date(g.d).getTime() > 3 * 86400e3 ? 'void' : null;   // adiado: espera 3 dias pela nova data antes de anular
  if (g.s !== 'post' || g.hs == null) return null;
  const d = g.hs - g.as, wl = x => x > 1e-9 ? 'won' : x < -1e-9 ? 'lost' : 'push';
  if (b.mk === 'ml') return d === 0 ? 'push' : (b.sel === 'h' ? d > 0 : d < 0) ? 'won' : 'lost';
  if (b.mk === 'sp') return wl((b.sel === 'h' ? d : -d) + b.line);
  if (b.mk === 'tot') return wl(b.sel === 'o' ? g.hs + g.as - b.line : b.line - (g.hs + g.as));
  return null;
}
function newMulti(acc, legs, stake, extra) {
  const odd = r2(legs.reduce((a, l) => a * l.odd, 1));
  const b = Object.assign({ id: acc + 'm' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6), acc, mk: 'multi', legs: legs.map(l => Object.assign({}, l)), g: legs[0].g, gl: legs.length + ' jogos', gd: legs.reduce((m, l) => l.gd > m ? l.gd : m, legs[0].gd), odd, stake: r2(stake), t: Date.now(), st: 'open', ret: 0, lb: 'Múltipla · ' + legs.length + ' seleções' }, extra || {});
  BETS.push(b); return b;
}
const resTxt = g => g.hs + '-' + g.as + (g.ot ? ' (prol.)' : '');
function settleMulti(b) {
  let eff = 1, pending = false, lost = false;
  b.legs.forEach(l => { const g = DB.g[l.g]; const r = g ? outcome(l, g) : null; l.r = r; if (g && g.hs != null) l.res = resTxt(g); if (r === null) pending = true; else if (r === 'lost') lost = true; else if (r === 'won') eff *= l.odd; });
  if (lost) { b.st = 'lost'; b.ret = 0; }
  else if (pending) return false;
  else { b.st = eff > 1.0001 ? 'won' : 'push'; b.ret = r2(b.stake * eff); }
  b.tset = Date.now(); return true;
}
function settleAll() {
  let n = 0;
  BETS.forEach(b => {
    if (b.st !== 'open') return;
    if (b.mk === 'multi') { if (settleMulti(b)) n++; return; }
    const g = DB.g[b.g]; if (!g) return;
    const r = outcome(b, g); if (!r) return;
    b.st = r; b.ret = r === 'won' ? r2(b.stake * b.odd) : (r === 'push' || r === 'void') ? b.stake : 0; b.res = g.hs != null ? resTxt(g) : ''; b.tset = Date.now(); n++;
  });
  if (n) saveBets();
  safeGrade();
  return n;
}
/* =====================================================================
   🤖 LU SOZINHO: um bot que aposta sozinho, sem ninguém lhe mexer.
   Regra fixa: em cada jogo da semana, aposta no lado do handicap que a
   cabeça dele (o modelo puro, sem copiar a casa) acha melhor, à linha e
   odd da ESPN do momento. Valor fixo. Serve para ver como ele se porta
   de verdade. Teste às cegas 2022-26 com esta regra: ~48% de acerto e
   −6% por aposta (a linha da casa sabe coisas que ele não sabe).
   Guarda também a última linha que a app viu antes do jogo («fecho») para
   medir se a linha andou para o lado dele (CLV): é o sinal mais rápido de
   habilidade; o lucro demora centenas de apostas a dizer alguma coisa.
   ===================================================================== */
const BOT_TEST = { acerto: 0.479, roi: -0.058, n: 1289 };
const botSelLine = (b, o) => !o ? null : b.mk === 'sp' ? (o.hl == null ? null : b.sel === 'h' ? o.hl : -o.hl) : b.mk === 'tot' ? (o.tl == null ? null : o.tl) : null;
function botTrack() {   // enquanto o jogo não começa, vai atualizando a «linha de fecho»
  let n = 0;
  BETS.forEach(b => {
    if (b.acc !== 'pi' || !b.auto) return;
    const g = DB.g[b.g]; if (!g || g.s !== 'pre' || new Date(g.d).getTime() < Date.now()) return;
    const L = botSelLine(b, g.o); if (L != null && L !== b.cl) { b.cl = L; n++; }
  });
  return n;
}
const botClv = b => b.cl == null || b.line == null ? null : b.mk === 'tot' ? (b.sel === 'o' ? b.cl - b.line : b.line - b.cl) : b.line - b.cl;   // em pontos: + = a linha andou a favor dele
function pilotRun() {
  const tr = botTrack();
  if (!CFG.piOn) { if (tr) saveBets(); return 0; }
  const now = Date.now(); let n = 0;
  const done = new Set(BETS.filter(b => b.acc === 'pi' && b.mk !== 'multi').map(b => b.g));
  Object.values(DB.g).filter(g => TEAMS[g.h] && TEAMS[g.a] && g.s === 'pre' && !done.has(g.id) && g.o && g.o.hl != null)
    .sort((x, y) => x.d < y.d ? -1 : 1).forEach(g => {
      const t0 = new Date(g.d).getTime(); if (t0 < now + 5 * 60e3 || t0 > now + 8 * 864e5) return;   // a semana inteira de uma vez
      const P = predict(g), o = g.o, edge = P.mModel - (-o.hl);   // pontos que ele dá a mais (+) ou a menos (−) à equipa da casa
      const sel = edge >= 0 ? 'h' : 'a', line = sel === 'h' ? o.hl : -o.hl;
      const real = sel === 'h' ? o.hso : o.aso, odd = real || 1.91;
      const stake = Math.max(CFG.min, r2(CFG.piStake));
      if (accStats('pi').bal < stake) return;
      const q = probs(P, 'sp', sel, line);
      newBet('pi', g, { mk: 'sp', sel, line, odd }, stake, { auto: 1, edge: Math.round(Math.abs(edge) * 10) / 10, p: r2(q.w), ev: r2(evOf(q, odd)), src: o.p || 'ESPN', oe: !real, cl: line });
      n++;
    });
  if (n || tr) saveBets();
  return n;
}
function botStats() {
  const B = BETS.filter(b => b.acc === 'pi' && b.auto), S = B.filter(b => b.st === 'won' || b.st === 'lost' || b.st === 'push');
  const w = S.filter(b => b.st === 'won').length, l = S.filter(b => b.st === 'lost').length;
  const C = S.map(botClv).filter(x => x != null);
  const big = S.filter(b => b.edge >= 3), bw = big.filter(b => b.st === 'won').length, bl = big.filter(b => b.st === 'lost').length;
  const st = S.reduce((s, b) => s + b.stake, 0), ret = S.reduce((s, b) => s + (b.ret || 0), 0);
  return { n: B.length, open: B.filter(b => b.st === 'open').length, w, l, p: S.length - w - l, hit: w + l ? w / (w + l) : null, roi: st ? (ret - st) / st : null, pl: r2(ret - st),
    clv: C.length ? C.reduce((s, x) => s + x, 0) / C.length : null, clvPos: C.length ? C.filter(x => x > 0).length / C.length : null, clvNeg: C.filter(x => x < 0).length, bigHit: bw + bl ? bw / (bw + bl) : null, bigN: bw + bl };
}

/* =====================================================================
   🛡️ BOLETIM SEGURO DA SEMANA: seleções com ≥85% (e ≤95%), juntas enquanto
   o boletim fica ≥70%. Handicap alternativo (azarão +7,5 a +14,5, favorito
   +1,5/+3,5), total alternativo e vencedor. Odds estimadas: mete as da Betano.
   ===================================================================== */
const SAFE_LEG = 0.85, SAFE_SLIP = 0.70;
const weekGames = wkOff => { const L = upcomingWeek(); if (!L) return []; const w = L.wk + wkOff; return Object.values(DB.g).filter(g => TEAMS[g.h] && TEAMS[g.a] && g.wk === w && seasonOf(g.ed) === L.sy); };
function upcomingWeek() {
  const now = Date.now(), G = Object.values(DB.g).filter(g => TEAMS[g.h] && TEAMS[g.a] && g.wk != null).sort((x, y) => x.d < y.d ? -1 : 1);
  const nx = G.find(g => g.s !== 'post' && new Date(g.d).getTime() > now - 5 * 3600e3) || G[G.length - 1];
  return nx ? { wk: nx.wk, sy: seasonOf(nx.ed) } : null;
}
function safeCands(wkOff) {
  const now = Date.now(), out = [];
  weekGames(wkOff || 0).filter(g => g.s === 'pre' && new Date(g.d).getTime() > now + 10 * 60e3).forEach(g => {
    const P = predict(g), opts = [], favH = P.m >= 0, dog = favH ? 'a' : 'h', fav = favH ? 'h' : 'a', base = Math.abs(P.m);
    [7.5, 10.5, 13.5].forEach(L => { const ln = Math.round(L + base) - 0.5; if (ln <= 17.5) opts.push({ mk: 'sp', sel: dog, line: ln }); });
    [1.5, 3.5, 6.5].forEach(L => opts.push({ mk: 'sp', sel: fav, line: L }));
    opts.push({ mk: 'ml', sel: fav, line: null });
    [10.5, 13.5].forEach(L => { opts.push({ mk: 'tot', sel: 'o', line: Math.round(P.t - L) + 0.5 }); opts.push({ mk: 'tot', sel: 'u', line: Math.round(P.t + L) - 0.5 }); });
    opts.forEach(x => { x.p = probs(P, x.mk, x.sel, x.line).w; });
    bossPool(g, opts);
    const best = opts.filter(x => x.p >= SAFE_LEG && x.p <= 0.95).sort((a, b) => a.p - b.p)[0];
    if (best) out.push(Object.assign(best, { g, odd: r2(Math.max(1.02, 1 / (best.p * 1.06))), est: true, lb: selLabel(g, best.mk, best.sel, best.line) }));
  });
  return out.sort((a, b) => b.p - a.p);
}
function safeAuto(C) {
  const pick = new Set(); let P = 1;
  C.forEach((c, i) => { if (pick.size < 5 && (i === 0 || P * c.p >= SAFE_SLIP)) { P *= c.p; pick.add(i); } });
  return pick;
}
const safeLeg = (c, odd) => ({ g: c.g.id, gl: gLabel(c.g), gd: c.g.d, mk: c.mk, sel: c.sel, line: c.line, odd: r2(odd || c.odd), lb: c.lb, p: r2(c.p) });
function safeLogSave(list) {
  const L = LS.get('safe', {}); let ch = false;
  list.forEach(c => { const k = c.g.id + '|' + c.mk + '|' + c.sel + '|' + c.line; if (L[k]) return; L[k] = { g: c.g.id, mk: c.mk, sel: c.sel, line: c.line, p: r2(c.p), t: Date.now() }; ch = true; });
  const ks = Object.keys(L); if (ks.length > 500) ks.sort((a, b) => L[a].t - L[b].t).slice(0, ks.length - 500).forEach(k => delete L[k]);
  if (ch) LS.set('safe', L);
}
function safeGrade() {
  const L = LS.get('safe', {}); let ch = false;
  Object.values(L).forEach(l => { if (l.w != null) return; const g = DB.g[l.g]; if (!g) return; const r = outcome(l, g); if (r === 'won') l.w = 1; else if (r === 'lost') l.w = 0; else if (r) l.w = -1; else return; ch = true; });
  if (ch) LS.set('safe', L);
}
function safeStats() {
  const g = Object.values(LS.get('safe', {})).filter(l => l.w === 0 || l.w === 1);
  return g.length ? { n: g.length, w: g.filter(l => l.w === 1).length, p: g.reduce((a, l) => a + l.p, 0) / g.length } : null;
}
/* boletim seguro de cada dia, congelado antes do 1.º jogo */
function slipKey(wkOff) { const L = upcomingWeek(); return L ? L.sy + '-' + (L.wk + (wkOff || 0)) : null; }
function snapshotSlips() {
  const d = slipKey(0); if (!d) return; const old = SLIPS[d];
  if (old && (old.lock || old.legs.some(l => { const g = DB.g[l.g]; return !g || g.s !== 'pre' || new Date(g.d).getTime() <= Date.now(); }))) { old.lock = 1; LS.set('slips', SLIPS); return; }
  const C = safeCands(0), pick = safeAuto(C), legs = C.filter((_, i) => pick.has(i));
  if (legs.length) SLIPS[d] = { legs: legs.map(c => safeLeg(c)), p: r2(legs.reduce((a, c) => a * c.p, 1)), odd: r2(legs.reduce((a, c) => a * c.odd, 1)), t: Date.now() };
  const ks = Object.keys(SLIPS).sort(); if (ks.length > 60) ks.slice(0, ks.length - 60).forEach(k => delete SLIPS[k]);
  LS.set('slips', SLIPS);
}
function slipResult(S) {
  if (!S) return null; let w = 0, n = 0, lost = false, pend = false;
  S.legs.forEach(l => { const g = DB.g[l.g]; const r = g ? outcome(l, g) : null; l.r = r; if (r == null) pend = true; else { n++; if (r === 'won' || r === 'push') w++; if (r === 'lost') lost = true; } });
  return { w, n: S.legs.length, st: lost ? 'lost' : pend ? 'open' : 'won' };
}


function teamRt(t) {
  const M = getModel(), r = M.rec[t] || { w: 0, l: 0, t: 0, hw: 0, hl: 0, aw: 0, al: 0, pf: 0, pa: 0, last: [] };
  const gp = r.w + r.l + r.t, l5 = (r.last || []).slice(-5), wf = l5.length ? l5.filter(x => x.w).length / l5.length : 0.5;
  const k = v => Math.round(clamp(v, 25, 99));
  return { ovr: k(78 + ((M.O[t] || 0) + (M.D[t] || 0)) * 1.6), atk: k(76 + (M.O[t] || 0) * 2.2), def: k(76 + (M.D[t] || 0) * 2.2), form: k(45 + wf * 54), gp, r };
}

/* =====================================================================
   📤 FICHA PARA O MISTER BOSS
   Em cada atualização, o Lu deixa no telemóvel as seleções do dia que
   passam dos 80% (e as apostas de valor), e confere as antigas com o seu
   próprio código de liquidação. O Mister Boss só lê esta ficha.
   ===================================================================== */
let BPOOL = null;
function bossPool(g, opts) {
  if (!BPOOL) return;
  opts.forEach(x => { const p = x.c != null ? x.c : x.p; if (p >= 0.80 && p <= 0.985) BPOOL.push({ g, mk: x.mk, sel: x.sel, line: x.line == null ? null : x.line, p, odd: x.odd || null, est: x.est !== false }); });
}
function bossFeed() {
  try {
    const F = LS.get('boss', null) || { v: 1, legs: {} }, now = Date.now();
    const gameOf = id => DB.g[id], segOf = g => ({ lg: 'NFL' }), glOf = g => gLabel(g);
    BPOOL = []; [0].forEach(d => { try { safeCands(d); } catch (e) {} }); const pool = BPOOL; BPOOL = null;
    Object.values(DB.g).filter(g => g && g.s === 'pre' && new Date(g.d).getTime() > now && new Date(g.d).getTime() < now + 8 * 864e5).forEach(g => {
      try { const v = predict(g).value; if (v) pool.push({ g, mk: v.mk, sel: v.sel, line: v.line == null ? null : v.line, p: v.p, odd: v.odd, est: false, val: r2(v.ev) }); } catch (e) {}
    });
    pool.forEach(x => {
      const id = x.g.id + '|' + x.mk + '|' + x.sel + '|' + x.line + (x.val != null ? '|v' : ''), L = F.legs[id];
      const rec = { id, g: x.g.id, gl: glOf(x.g), d: x.g.d, mk: x.mk, mkn: mkName(x.mk), sel: x.sel, line: x.line, lb: selLabel(x.g, x.mk, x.sel, x.line), p: Math.round(x.p * 1000) / 1000, odd: x.odd ? r2(x.odd) : null, est: !!x.est, val: x.val != null ? x.val : null, seg: segOf(x.g), st: 'open', t: now };
      if (!L) F.legs[id] = rec; else if (L.st === 'open' && new Date(L.d).getTime() > now) Object.assign(L, { p: rec.p, odd: rec.odd, est: rec.est, val: rec.val, t: now });
    });
    Object.values(F.legs).forEach(l => { if (l.st !== 'open') return; const g = gameOf(l.g); if (!g) return; let r = null; try { r = outcome(l, g); } catch (e) {} if (r) { l.st = r; l.tset = now; } });
    const ks = Object.keys(F.legs); if (ks.length > 900) ks.sort((a, b) => F.legs[a].t - F.legs[b].t).slice(0, ks.length - 900).forEach(k => delete F.legs[k]);
    Object.assign(F, { app: 'lu', name: 'Mister Lu', sport: 'Futebol americano · NFL', ver: APP_VER, t: now });
    LS.set('boss', F);
  } catch (e) { console.warn('bossFeed', e); }
}

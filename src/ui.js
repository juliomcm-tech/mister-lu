/* =====================================================================
   5) ÍCONES (desenho próprio, traço simples)
   ===================================================================== */
const ICP = {
  ball: '<ellipse cx="12" cy="12" rx="9.5" ry="5.5" transform="rotate(-35 12 12)"/><path d="M8.5 15.5l7-7M10 12l2 2M12 10l2 2M3.5 15.5l5 5M15.5 3.5l5 5"/>',
  puck: '<ellipse cx="12" cy="9" rx="8" ry="3.2"/><path d="M4 9v5c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2V9"/>',
  stick: '<path d="M16 3l-7 14c-.6 1.2-1.6 2-3 2H3v-2.5h3.3L13.5 3M17 19h4"/>',
  goal: '<path d="M3 19V7h18v12M3 7l3 4h12l3-4M6 11v8M18 11v8M10 11v8M14 11v8M6 15h12"/>',
  snow: '<path d="M12 2v20M3.3 7l17.4 10M3.3 17L20.7 7M9 4l3 2 3-2M9 20l3-2 3 2"/>',
  mask: '<path d="M12 3c-4.5 0-7 3-7 7.5 0 5 2.5 9.5 7 10.5 4.5-1 7-5.5 7-10.5C19 6 16.5 3 12 3zM8 10.5h3M13 10.5h3M8 15h8M10 13v5M14 13v5"/>',
  vs: '<path d="M5 5l9 9M19 5l-9 9M12.5 15.5l3-3M8.5 12.5l3 3M15 15l4 4M9 15l-4 4M5 5h3M5 5v3M19 5h-3M19 5v3"/>',
  wallet: '<rect x="3" y="6" width="18" height="14" rx="3"/><path d="M3 10h18M16 15h2M6 6V4.5h11"/>',
  grid: '<rect x="4" y="4" width="6.5" height="6.5" rx="1.5"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5"/>',
  refresh: '<path d="M20 11a8 8 0 0 0-14.9-3.5M4 4v4h4M4 13a8 8 0 0 0 14.9 3.5M20 20v-4h-4"/>',
  trophy: '<path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 20h8M10 17h4"/>',
  chip: '<rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4"/>',
  gear: '<circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="7"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/>',
  save: '<path d="M5 4h11l3 3v13H5zM8 4v5h7V4M8 20v-6h8v6"/>',
  pulse: '<path d="M3 12h4l2-6 4 12 2-6h6"/>',
  phone: '<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18.5h2M12 6v7M9.5 10.5 12 13l2.5-2.5"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  gem: '<path d="M6 4h12l3 5-9 11L3 9zM3 9h18M9 4 7.5 9 12 20l4.5-11L15 4"/>',
  fire: '<path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-3 2-4 2-7 1 1 2 2 2 4 1-2 1-4 1-7z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  chart: '<path d="M4 20V11M10 20V5M16 20v-7M2 20h20"/>',
  star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  robot: '<rect x="5" y="8" width="14" height="11" rx="2"/><path d="M12 4.5V8M9 13h.01M15 13h.01M9 16h6M3 12v3M21 12v3"/><circle cx="12" cy="3.5" r="1"/>',
  share: '<circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M8.2 10.8l7.6-4.4M8.2 13.2l7.6 4.4"/>',
  print: '<path d="M7 9V3h10v6M7 17H4v-7h16v7h-3M7 14h10v7H7z"/>',
  download: '<path d="M12 3v12M7 10l5 5 5-5M4 20h16"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
  check: '<path d="M5 12l5 5 9-10"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  coins: '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  cal: '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5h.01"/>',
  bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  home: '<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
  back: '<path d="M15 5l-7 7 7 7"/>'
};
const ic = (n, cls) => `<svg class="i ${cls || ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICP[n] || ''}</svg>`;
const attr = (label, v, color, txt, max) => `<div class="at" style="--k:${color}"><div class="l"><span>${label}</span><span class="v">${txt != null ? txt : `${v} <small>/ ${max || 99}</small>`}</span></div><div class="bar"><i style="width:${clamp(v / (max || 99) * 100, 0, 100).toFixed(1)}%"></i></div></div>`;
const catH = (icon, text, color, right) => `<div class="cat" style="--k:${color}">${ic(icon)}${text}${right ? `<span class="muted small" style="margin-left:auto;font-weight:400">${right}</span>` : ''}</div>`;
const pnH = (title, right) => `<div class="pn-h">${title}${right ? `<span class="r">${right}</span>` : ''}</div><div class="div"></div>`;

%%FACE%%

/* =====================================================================
   6) ECRÃS
   ===================================================================== */
const VIEWS = ['inicio', 'jogos', 'duelo', 'contas', 'mais'];
let VIEW = (location.hash || '#inicio').slice(1); if (!VIEWS.includes(VIEW)) VIEW = 'inicio';
let DAY = 0, ACCF = 'all', BT = 'seg', GT = 'ana', SORT = LS.get('sort', 'hora');
function go(v) { VIEW = v; history.replaceState(null, '', '#' + v); render(); window.scrollTo(0, 0); }
function setUpd(t) { const e = $('#upd'); if (e) e.textContent = t; }
const tCol = t => '#' + ((TEAMS[t] && TEAMS[t][2]) || '1d6fc4');
/* emblema da equipa: o que a própria ESPN manda nos dados (carregado no telemóvel); se falhar, fica o círculo com as cores */


/* emblema da equipa: o que a própria ESPN manda nos dados (carregado no telemóvel); se falhar, fica o círculo com as cores */
const NFL2ESPN = { WAS: 'wsh', LA: 'lar' };
const logoUrl = t => (DB.logos && DB.logos[t]) || `https://a.espncdn.com/i/teamlogos/nfl/500/${(NFL2ESPN[t] || t).toLowerCase()}.png`;
function logo(t, sz) {
  const T = TEAMS[t] || ['?', '?', '1f8a4c', 'ffffff'];
  const s = sz ? `width:${sz}px;height:${sz}px;flex-basis:${sz}px;font-size:${sz / 3.6}px;` : '';
  const bg = `radial-gradient(circle at 35% 30%,#${T[2]}dd,#${T[2]} 55%,#${T[3] === 'ffffff' ? '10301c' : T[3]})`;
  return `<span class="logo" style="${s}background:${bg}"><img src="${esc(logoUrl(t))}" alt="${esc(t)}" loading="lazy" onerror="this.remove()"><b>${esc(t)}</b></span>`;
}
function renderTop() {
  $('#chips').innerHTML = ['tu', 'lu', 'pi'].map(k => `<span class="st" onclick="ACCF='${k}';go('contas')">${ic(ACC[k].ic)}${ACC[k].n.replace('Mister ', '')} ${eur(accStats(k).bal)}</span>`).join('');
  const last = LS.get('last', 0);
  setUpd(!SEED ? 'A carregar o arquivo do Lu…' : last ? 'Atualizado ' + new Date(last).toLocaleString('pt-PT', { weekday: 'short', hour: '2-digit', minute: '2-digit' }) + ' · toca em ↻ para ir à ESPN' : 'Arquivo até ' + SEED.cut.split('-').reverse().join('/') + ' · toca em ↻ para os jogos de hoje');
  const nOpen = BETS.filter(b => b.acc === 'tu' && b.st === 'open').length;
  document.querySelectorAll('#nav button').forEach(b => {
    b.classList.toggle('on', b.dataset.v === VIEW);
    const old = b.querySelector('.nb'); if (old) old.remove();
    if (b.dataset.v === 'contas' && nOpen) b.insertAdjacentHTML('beforeend', `<span class="nb">${nOpen}</span>`);
  });
}
function render() {
  renderTop();
  const v = $('#view');
  if (!SEED) { v.innerHTML = `<div class="pn empty" style="margin-top:40px"><div class="face">${luFace('ok')}</div>A carregar…</div>`; return; }
  if (VIEW === 'inicio') v.innerHTML = viewInicio();
  else if (VIEW === 'jogos') v.innerHTML = viewJogos();
  else if (VIEW === 'duelo') v.innerHTML = viewDuelo();
  else if (VIEW === 'contas') v.innerHTML = viewContas();
  else v.innerHTML = viewMais();
  if (VIEW === 'jogos') ssSum();
}
function dayGames(off) { return weekGames(off).sort((x, y) => x.d < y.d ? -1 : 1); }
const wkLbl = off => { const L = upcomingWeek(); return L ? (L.wk + off > 18 ? 'Playoffs ' + (L.wk + off - 18) : 'Semana ' + (L.wk + off)) : ''; };
const nmLg = t => { const n = tName(t), w = Math.max(...n.split(/\s+/).map(x => x.length)); return w >= 11 ? ' xl' : w >= 8 ? ' lg' : ''; };
const f1 = v => Math.abs(v).toFixed(1).replace('.', ',');
const okIc = ok => ok == null ? '<span class="muted">—</span>' : ok ? `<span class="pos">${ic('check')}</span>` : `<span class="neg">${ic('x')}</span>`;
const unitsTxt = u => (u > 0 ? '+' : u < 0 ? '−' : '') + Math.abs(u).toFixed(2).replace('.', ',') + ' u';

/* ---------- veredito: o que o Lu guardou antes do jogo vs o resultado ---------- */
function verdict(g) {
  const p = PREDS[g.id]; if (!p || g.s !== 'post' || g.hs == null) return null;
  const d = g.hs - g.as, favH = p.ml >= 0.5;
  const v = { p, win: d === 0 ? null : favH === (d > 0), fav: favH ? g.h : g.a, conf: Math.max(p.ml, 1 - p.ml) };
  if (p.mk != null) { const side = Math.sign(p.m - p.mk), r = Math.sign(d - p.mk); v.sp = side && r ? side === r : null; }
  if (p.tl != null) { const side = Math.sign(p.t - p.tl), r = Math.sign(g.hs + g.as - p.tl); v.tot = side && r ? side === r : null; }
  if (p.pk) { const o = outcome({ mk: p.pk.mk, sel: p.pk.sel, line: p.pk.line }, g); v.pk = p.pk; v.pkr = o; v.pku = o === 'won' ? p.pk.odd - 1 : o === 'lost' ? -1 : 0; }
  return v;
}
function dayVerdict(off) {
  const G = dayGames(off).filter(g => g.s === 'post'); let n = 0, w = 0, bn = 0, bw = 0, u = 0;
  const bets = [];
  G.forEach(g => { const v = verdict(g); if (!v || v.win == null) return; n++; if (v.win) w++; if (v.pk && (v.pkr === 'won' || v.pkr === 'lost')) { bn++; if (v.pkr === 'won') bw++; u += v.pku; bets.push({ g, v }); } });
  const S = SLIPS[slipKey(off)], sr = S ? slipResult(S) : null;
  return { n, w, bn, bw, u, S, sr, bets, G };
}
/* ---------- INÍCIO ---------- */
function viewInicio() {
  const G0 = dayGames(0), pre = G0.filter(g => g.s === 'pre'), live = G0.filter(g => g.s === 'in').length, done = G0.filter(g => g.s === 'post').length;
  const Y = dayVerdict(-1), S0 = SLIPS[slipKey(0)], ST = statsAll();
  const picks = pre.map(g => ({ g, P: predict(g) })).filter(x => x.P.value).sort((a, b) => b.P.value.ev - a.P.value.ev);
  const first = pre[0];
  let h = `<div class="pn hero"><span class="tag">${esc(wkLbl(0) || 'NFL')} · NFL</span>
    <div class="big">${G0.length ? `${G0.length} <b>jogo${G0.length === 1 ? '' : 's'}</b>` : `Mister <b>Lu</b>`}</div>
    <div class="sub">${!Object.keys(DB.g).length ? 'Toca em ↻ e vou buscar a semana à ESPN.' : live ? live + ' a decorrer agora. ' : first ? 'Próximo: ' + dayLbl(first.d) + ' às ' + hhmm(first.d) + '. ' : 'Semana acabada.'}${done ? ` ${done} já jogados.` : ''}${picks.length || S0 ? ' O meu boletim está pronto.' : ''}</div>
    <div class="face">${luFace(Y.bn && Y.u < 0 ? 'sad' : Y.bn ? 'win' : 'ok')}</div>
    <div class="kpis"><div class="kpi"><small>Semana passada · vencedor</small><b>${Y.n ? Y.w + '/' + Y.n : '—'}</b></div>
      <div class="kpi"><small>Semana passada · apostas</small><b class="${Y.u > 0 ? 'pos' : Y.u < 0 ? 'neg' : ''}">${Y.bn ? Y.bw + '/' + Y.bn : '—'}</b></div>
      <div class="kpi"><small>Semana passada · seguro</small><b>${Y.sr ? (Y.sr.st === 'won' ? '<span class="pos">✓</span>' : Y.sr.st === 'lost' ? '<span class="neg">✗</span>' : '…') : '—'}</b></div></div></div>`;
  h += installBanner();
  if (!Object.keys(DB.g).length) return h + `<div class="pn empty"><div class="face">${luFace('ok')}</div><div class="pn-h" style="justify-content:center">Olá! Sou o Mister Lu.</div><div class="muted small" style="margin:6px 0 14px">Só percebo de futebol americano. Trago 17 épocas estudadas, com as linhas de fecho das casas: sei onde estão os números-chave (3 e 7) e quanto vale cada linha alternativa.</div><button class="btn fill" onclick="refresh()">${ic('refresh')} Ir buscar a semana</button></div>`;
  h += `<div class="pn hl">${pnH(`${ic('check')} Veredito da semana passada`, Y.G.length + ' jogos')}`;
  if (!Y.n) h += `<div class="small muted">${Y.G.length ? 'O Lu não tinha previsões guardadas (só guarda quando tocas em ↻ antes dos jogos).' : 'Sem jogos lidos da semana passada: toca em ↻.'}</div>`;
  else {
    h += attr('Acertou no vencedor', Math.round(Y.w / Y.n * 100), 'var(--c-green)', `${Y.w} de ${Y.n}`, 100);
    h += Y.bets.length ? catH('gem', 'Apostas que o Lu guardou', 'var(--c-orange)', `${Y.bw}/${Y.bn} · <b class="${Y.u >= 0 ? 'pos' : 'neg'}">${unitsTxt(Y.u)}</b>`) + Y.bets.map(({ g, v }) => `<div class="why" onclick="GT='ana';openGame('${g.id}')"><span>${okIc(v.pkr === 'won')} ${esc(v.pk.lb)} <span class="muted small">@ ${odd2(v.pk.odd)} · ${esc(g.h)} ${resTxt(g)} ${esc(g.a)}</span></span><b class="${v.pku >= 0 ? 'pos' : 'neg'}">${unitsTxt(v.pku)}</b></div>`).join('')
      : `<div class="small muted" style="margin:8px 0">O Lu não encontrou valor: não apostou.</div>`;
    if (Y.S) h += catH('shield', 'Boletim seguro', 'var(--c-blue)', Y.sr.st === 'won' ? '<b class="pos">ganhou</b>' : Y.sr.st === 'lost' ? '<b class="neg">perdeu</b>' : 'em curso') + Y.S.legs.map(l => `<div class="why"><span>${okIc(l.r == null ? null : l.r !== 'lost')} ${esc(l.lb)}</span><b class="muted">${pct(l.p)}</b></div>`).join('');
  }
  h += `<button class="btn go full" style="margin-top:10px" onclick="DAY=-1;go('jogos')">${ic('list')} Ver a semana passada</button></div>`;
  if (pre.length) {
    h += `<div class="pn">${pnH(`${ic('target')} O Lu guardou para esta semana`, '')}`;
    if (S0) h += catH('shield', 'Boletim seguro', 'var(--c-blue)', `Lu ${pct(S0.p)}`) + S0.legs.map(l => `<div class="why"><span>${esc(l.lb)} <span class="muted small">${esc(l.gl)}</span></span><b>${pct(l.p)}</b></div>`).join('');
    if (picks.length) h += catH('gem', 'Apostas com valor', 'var(--c-orange)', picks.length + '') + picks.slice(0, 4).map(({ g, P }) => `<div class="why" onclick="GT='mk';openGame('${g.id}')"><span>${esc(selLabel(g, P.value.mk, P.value.sel, P.value.line))} <span class="muted small">${esc(g.h)}–${esc(g.a)} ${dayLbl(g.d)}</span></span><b>@ ${odd2(P.value.odd)} <span class="pos small">${sPct(P.value.ev)}</span></b></div>`).join('');
    if (!S0 && !picks.length) h += `<div class="small muted">Nada com confiança suficiente. Mete as odds da Betano nos jogos: o Lu diz onde há valor.</div>`;
    h += `<button class="btn fill full" style="margin-top:10px" onclick="DAY=0;BT='seg';go('jogos')">${ic('ball')} Abrir a semana e o boletim</button></div>`;
  }
  h += `<div class="pn">${pnH(`${ic('chart')} Como vai o Lu`, ST.n + ' jogos previstos')}`;
  h += ST.n ? `<div class="mosaic"><div><b>${pct(ST.win / ST.n)}</b><small>vencedor certo</small></div><div><b>${ST.spN ? pct(ST.spW / ST.spN) : '—'}</b><small>lado do handicap</small></div><div><b class="${ST.bu >= 0 ? 'pos' : 'neg'}">${ST.bn ? unitsTxt(ST.bu) : '—'}</b><small>apostas do Lu</small></div></div>`
    : `<div class="small muted">As estatísticas enchem-se sozinhas: toca em ↻ antes dos jogos de cada semana.</div>`;
  h += `<button class="btn go full" style="margin-top:8px" onclick="openStats()">${ic('chart')} Estatísticas completas</button></div>`;
  return h;
}
/* ---------- JOGOS ---------- */
function sortGames(G) {
  const conf = g => { const p = g.s === 'pre' ? predict(g).pML : (PREDS[g.id] ? PREDS[g.id].ml : predict(g).pML); return Math.max(p, 1 - p); };
  const val = g => { if (g.s !== 'pre') { const p = PREDS[g.id]; return p && p.pk ? p.pk.ev : -1; } const v = predict(g).value; return v ? v.ev : -1; };
  if (SORT === 'conf') return G.slice().sort((a, b) => conf(b) - conf(a));
  if (SORT === 'val') return G.slice().sort((a, b) => val(b) - val(a) || (a.d < b.d ? -1 : 1));
  return G;
}
function dateStrip() {
  const L = upcomingWeek(); if (!L) return '';
  let h = '<div class="dates">';
  for (let i = -3; i <= 2; i++) {
    const w = L.wk + i; if (w < 1) continue;
    h += `<button class="${DAY === i ? 'on' : ''}" onclick="DAY=${i};render()"><b>${w > 18 ? 'P' + (w - 18) : w}</b><small>${i === 0 ? 'esta' : i === -1 ? 'passada' : i === 1 ? 'próxima' : w > 18 ? 'playoffs' : 'semana'}</small></button>`;
  }
  return h + '</div>';
}
function viewJogos() {
  const G = dayGames(DAY), pre = G.filter(g => g.s === 'pre');
  const picks = pre.map(g => ({ g, P: predict(g) })).filter(x => x.P.value).sort((a, b) => b.P.value.ev - a.P.value.ev);
  const C = DAY === 0 || DAY === 1 ? safeCands(DAY) : [];
  const auto = safeAuto(C);
  let h = dateStrip();
  if ((DAY === 0 || DAY === 1) && pre.length) h += boletimPanel(C, auto, picks);
  if (G.some(g => g.s === 'post')) h += pastPanel(DAY);
  if (G.length) {
    h += `<div class="row" style="margin:16px 0 4px"><div class="cat" style="margin:0;flex:1">${ic('cal')}${esc(wkLbl(DAY))}</div><button class="btn sm" onclick="openHelp()">${ic('info')} O que quer dizer?</button></div>
      <div class="seg" style="margin-bottom:4px">${[['hora', 'Hora'], ['conf', 'Confiança'], ['val', 'Valor']].map(([k, t]) => `<button class="${SORT === k ? 'on' : ''}" onclick="SORT='${k}';LS.set('sort','${k}');render()">${t}</button>`).join('')}</div>` + sortGames(G).map(gameCard).join('');
  } else h += `<div class="pn small muted">${Object.keys(DB.g).length ? 'Sem jogos guardados para esta semana.' : 'Toca em ↻ para o Lu ir buscar os jogos.'}</div>`;
  return h;
}
function pastPanel(off) {
  const Y = dayVerdict(off);
  let h = `<div class="pn hl">${pnH(`${ic('check')} Veredito da semana`, Y.n ? `vencedor ${Y.w}/${Y.n}` : '')}`;
  if (!Y.n && !Y.S) return h + `<div class="small muted">O Lu não tinha previsões guardadas para estes jogos.</div></div>`;
  if (Y.S) h += catH('shield', 'Boletim seguro', 'var(--c-blue)', `${Y.sr.w}/${Y.sr.n} · ${Y.sr.st === 'won' ? '<b class="pos">ganhou</b>' : Y.sr.st === 'lost' ? '<b class="neg">perdeu</b>' : 'em curso'}`) + Y.S.legs.map(l => `<div class="why"><span>${okIc(l.r == null ? null : l.r !== 'lost')} ${esc(l.lb)} <span class="muted small">${esc(l.gl)}</span></span><b class="muted">${pct(l.p)}</b></div>`).join('');
  h += catH('gem', 'Apostas com valor', 'var(--c-orange)', Y.bn ? `${Y.bw}/${Y.bn} · <b class="${Y.u >= 0 ? 'pos' : 'neg'}">${unitsTxt(Y.u)}</b>` : '') +
    (Y.bets.length ? Y.bets.map(({ g, v }) => `<div class="why"><span>${okIc(v.pkr === 'won')} ${esc(v.pk.lb)} <span class="muted small">@ ${odd2(v.pk.odd)}</span></span><b class="${v.pku >= 0 ? 'pos' : 'neg'}">${unitsTxt(v.pku)}</b></div>`).join('') : '<div class="small muted">O Lu não apostou nestes jogos (nada com valor).</div>');
  return h + `<div class="small muted" style="margin-top:6px">u = unidades (1 u = o valor de uma aposta). Tudo foi guardado antes de cada jogo começar.</div></div>`;
}
/* ---------- 🛡️ BOLETIM DE HOJE ---------- */
let SS = { k: '', C: [], sel: new Set(), odd: {} };
const legKey = c => c.g.id + '|' + c.mk + '|' + c.sel + '|' + c.line;
function boletimPanel(C, auto, picks) {
  const k = DAY + '|' + slipKey(0);
  if (SS.k !== k) { SS = { k, C, sel: new Set(C.filter((_, i) => auto.has(i)).map(legKey)), odd: {}, stake: Math.max(CFG.min, 1) }; }
  SS.C = C; SS.auto = new Set(C.filter((_, i) => auto.has(i)).map(legKey));
  if (C.length) safeLogSave(C.filter((_, i) => auto.has(i)));
  let h = `<div class="pn hl">${pnH(`${ic('target')} Boletim ${DAY ? 'da próxima semana' : 'da semana'}`, esc(wkLbl(DAY)))}
    <div class="seg"><button class="${BT === 'seg' ? 'on' : ''}" onclick="BT='seg';render()">${ic('shield')} Seguro</button><button class="${BT === 'val' ? 'on' : ''}" onclick="BT='val';render()">${ic('gem')} Valor${picks.length ? ' ' + picks.length : ''}</button></div>`;
  if (BT === 'seg') {
    if (!C.length) h += `<div class="small muted" style="margin-top:10px">Nenhuma seleção chega aos ${pct(SAFE_LEG)}. Melhor não forçar.</div>`;
    else {
      h += `<div class="small muted" style="margin:10px 0 2px">As seleções mais seguras (handicaps e totais alternativos), juntas enquanto o boletim inteiro passa dos ${pct(SAFE_SLIP)}. <b>Seguro não é certo</b>: num boletim de 70%, 3 em cada 10 falham. As odds a cinzento são só estimativa: para registar, mete a da Betano em cada uma.</div>` +
        C.map((c, i) => { const key = legKey(c), od = SS.odd[key] != null ? SS.odd[key] : c.odd; return `<div class="leg"><input type="checkbox" ${SS.sel.has(key) ? 'checked' : ''} onchange="ssTog(${i},this.checked)">
        <div><div class="t">${esc(c.lb)}</div><div class="g">${dayLbl(c.g.d)} ${hhmm(c.g.d)} · ${esc(c.g.h)} – ${esc(c.g.a)} · ${esc(mkName(c.mk))}</div><div class="p">Lu ${pct(c.p)}</div></div>
        <input class="od${SS.odd[key] == null ? ' est' : ''}" inputmode="decimal" value="${String(od).replace('.', ',')}" oninput="ssOdd(${i},this)"></div>`; }).join('') + `<div class="sum" id="ssSum"></div>`;
    }
    const st = safeStats();
    if (st) h += `<div class="small muted" style="margin-top:8px">${ic('chart')} Seguro até hoje: acertou <b>${st.w}/${st.n}</b> seleções (${pct(st.w / st.n)}) · prometia ${pct(st.p)}</div>`;
  } else {
    h += picks.length ? picks.map(({ g, P }) => { const v = P.value, i = P.cands.indexOf(v); return `<div class="pick"><div style="min-width:0"><div class="g">${dayLbl(g.d)} ${hhmm(g.d)} · ${esc(g.h)} – ${esc(g.a)} · ${esc(mkName(v.mk))} · ${esc(v.src)}</div><div class="l">${esc(selLabel(g, v.mk, v.sel, v.line))}</div><div class="g">Lu ${pct(v.p)} · odd justa ${odd2(v.fair)}</div></div>
      <div class="o">${odd2(v.odd)}<small>valor ${sPct(v.ev)}</small></div><button class="btn go sm" onclick="openBet('${g.id}',${i})">Apostar</button></div>`; }).join('') + `<div class="small muted" style="margin-top:8px">«Valor» = a odd paga mais do que o Lu acha justo. Não é certeza: é vantagem a longo prazo.</div>`
      : `<div class="small" style="margin-top:10px">Sem valor nas odds da ESPN — normal: em 5 épocas de teste às cegas, a linha de fecho da NFL não se deixou bater.</div><div class="small muted" style="margin-top:6px"><b>Onde pode haver valor:</b> nas <b>linhas alternativas da Betano</b> (handicaps e totais diferentes do principal), onde o preço dos números 3 e 7 às vezes não bate certo. Abre um jogo → <b>Odds</b> → mete as da Betano.</div>`;
  }
  return h + '</div>';
}
function ssTog(i, on) { const k = legKey(SS.C[i]); if (on) SS.sel.add(k); else SS.sel.delete(k); ssSum(); }
function ssOdd(i, el) { const v = num(el.value); SS.odd[legKey(SS.C[i])] = v; el.classList.remove('est'); ssSum(); }
const ssLegs = () => SS.C.filter(c => SS.sel.has(legKey(c))).map(c => ({ c, odd: SS.odd[legKey(c)] != null ? SS.odd[legKey(c)] : c.odd, real: SS.odd[legKey(c)] > 1 }));
function ssSum() {
  const el = $('#ssSum'); if (!el) return;
  const L = ssLegs();
  if (!L.length) { el.innerHTML = '<span class="muted">Escolhe pelo menos uma seleção.</span>'; return; }
  const P = L.reduce((a, x) => a * x.c.p, 1), O = L.reduce((a, x) => a * (x.odd > 1 ? x.odd : 1), 1), ev = P * O - 1;
  el.innerHTML = `<div class="n"><span>${L.length} seleç${L.length === 1 ? 'ão' : 'ões'} · Lu dá <b class="pos" style="font-size:1.1rem">${pct(P)}</b></span><b>@ ${O.toFixed(2)}</b></div>
   <div class="small ${ev >= 0 ? 'pos' : 'muted'}">${ev >= 0 ? 'Com estas odds o boletim tem valor ' + sPct(ev) : 'Com estas odds paga ' + sPct(ev) + ' abaixo do justo (normal nas seguras)'}</div>
   <div class="row" style="margin-top:8px"><div style="flex:1"><label class="f" style="margin-top:0">Valor (€)</label><input class="in" id="ssStake" inputmode="decimal" value="${String(SS.stake).replace('.', ',')}" oninput="SS.stake=num(this.value)"></div></div>
   <div class="row" style="margin-top:8px"><button class="btn fill full" onclick="placeSlip()">${ic('check')} Registar múltipla</button><button class="btn go" onclick="shareSlip()" aria-label="Partilhar">${ic('share')}</button></div>`;
}
function placeSlip() {
  const L = ssLegs(); const stake = num(($('#ssStake') || {}).value);
  if (!L.length) return toast('Escolhe as seleções');
  if (L.some(x => !x.real)) return toast('Mete a odd da Betano em todas as seleções (as cinzentas são só estimativa)');
  if (L.some(x => !canBet(x.c.g))) return toast('Um dos jogos já começou');
  if (!(stake >= CFG.min)) return toast('A aposta mínima é ' + eur(CFG.min));
  if (stake > accStats('tu').bal) return toast('Não tens saldo para isso');
  const duel = 'd' + Date.now().toString(36), P = L.reduce((a, x) => a * x.c.p, 1);
  newMulti('tu', L.map(x => safeLeg(x.c, x.odd)), stake, { duel, src: 'seguro', p: r2(P) });
  let mine = SS.C.filter(c => SS.auto.has(legKey(c)));
  let same = mine.length === L.length && L.every(x => SS.auto.has(legKey(x.c)));
  if (!mine.every(c => SS.odd[legKey(c)] > 1)) { mine = L.map(x => x.c); same = true; }   // sem odds reais nas dele, vai no teu
  const tstake = Math.min(stake, accStats('lu').bal);
  let msg, mood = 'win';
  if (mine.length && tstake >= CFG.min) {
    newMulti('lu', mine.map(c => safeLeg(c, SS.odd[legKey(c)])), tstake, { duel, src: 'seguro', p: r2(mine.reduce((a, c) => a * c.p, 1)) });
    msg = same ? 'É o meu boletim. Vou contigo!' : `Mexeste no boletim. Eu fico com o meu: <b>${mine.map(c => esc(c.lb)).join(' + ')}</b>.`;
  } else { BETS.push({ id: 'gp' + Date.now().toString(36), acc: 'lu', g: L[0].c.g.id, gl: '', gd: L[0].c.g.d, mk: 'pass', stake: 0, odd: 0, t: Date.now(), st: 'pass', ret: 0, lb: 'Passou', duel }); msg = 'Estou sem saldo… passo esta.'; mood = 'sad'; }
  saveBets();
  openSheet('Duelo marcado', `<div class="opinion"><div class="face">${luFace(mood)}</div><div>${msg}</div></div>
    <div class="row" style="margin-top:14px"><button class="btn full" onclick="closeSheet();render()">Fechar</button><button class="btn fill full" onclick="closeSheet();go('duelo')">Ver duelo</button></div>`, true);
  render();
}
function shareSlip() {
  const L = ssLegs(); if (!L.length) return;
  const P = L.reduce((a, x) => a * x.c.p, 1), O = L.reduce((a, x) => a * x.odd, 1);
  shareText(`🏒 Boletim seguro do Mister Lu · ${new Date(L[0].c.g.d).toLocaleDateString('pt-PT', { day: '2-digit', month: '2-digit' })}\n` + L.map((x, i) => `${i + 1}) ${x.c.lb} @ ${odd2(x.odd)} (${x.c.g.h}–${x.c.g.a}, ${hhmm(x.c.g.d)})`).join('\n') + `\nOdd total ${O.toFixed(2)} · o Lu dá ${pct(P)}\n(simulação, sem dinheiro real)`);
}
async function shareText(txt) {
  try { if (navigator.share) { await navigator.share({ text: txt }); return; } } catch (e) { if (e && e.name === 'AbortError') return; }
  try { await navigator.clipboard.writeText(txt); toast('Copiado! Cola no WhatsApp ou no Facebook.'); } catch (e) { window.open('https://wa.me/?text=' + encodeURIComponent(txt), '_blank'); }
}

/* ---------- cartão de jogo «VS» ---------- */
function gameCard(g) {
  const M = getModel(), P = predict(g), o = g.o || {};
  const rh = M.rec[g.h] || {}, ra = M.rec[g.a] || {};
  const recTxt = r => `${r.w || 0}-${r.l || 0}${r.t ? '-' + r.t : ''}`;
  let notch, board;
  const fav = P.pML >= 0.5 ? g.h : g.a, ph = (P.t + P.m) / 2, pa = (P.t - P.m) / 2;
  if (g.s === 'pre') {
    notch = `${dayLbl(g.d)} · ${hhmm(g.d)}`;
    board = `<div class="board"><div class="n">${Math.round(ph)}<small>pontos (prev.)</small></div><div class="c"><b>${pct(P.pML)} · ${pct(1 - P.pML)}</b>vencedor</div><div class="n">${Math.round(pa)}<small>pontos (prev.)</small></div></div>`;
  } else if (g.s === 'in') {
    notch = `<span class="live">Ao vivo</span>${esc(g.cl || '')}`;
    board = `<div class="board"><div class="n">${g.hs}<small>${esc(g.h)}</small></div><div class="c"><span class="live">Live</span></div><div class="n">${g.as}<small>${esc(g.a)}</small></div></div>`;
  } else if (g.s === 'off') { notch = 'Adiado'; board = ''; }
  else {
    notch = `Final · ${dayLbl(g.d)}`;
    board = `<div class="board"><div class="n">${g.hs}<small>${esc(g.h)}</small></div><div class="c"><b>${g.ot ? 'prolongamento' : 'final'}</b></div><div class="n">${g.as}<small>${esc(g.a)}</small></div></div>`;
  }
  const tags = [];
  if (P.rh != null && P.rh >= 13 && g.ty !== 3) tags.push(`<span class="tg" style="--k:var(--c-green)">${esc(g.h)} vem de folga</span>`);
  if (P.ra != null && P.ra >= 13 && g.ty !== 3) tags.push(`<span class="tg" style="--k:var(--c-green)">${esc(g.a)} vem de folga</span>`);
  if (g.s === 'pre' && P.value) tags.push(`<span class="tg" style="--k:var(--c-orange)">valor</span>`);
  const mine = BETS.filter(b => b.acc === 'tu' && (b.g === g.id || (b.legs && b.legs.some(l => l.g === g.id)))).length;
  if (mine) tags.push(`<span class="tg" style="--k:var(--c-blue)">${ic('star')} ${mine}</span>`);
  let say, bet = '';
  const v = g.s === 'post' ? verdict(g) : null;
  if (v) {
    say = `${okIc(v.win)} Vencedor: o Lu dava ${esc(tNick(v.fav))} (${pct(v.conf)})${v.sp != null ? ` · handicap ${okIc(v.sp)}` : ''}${v.tot != null ? ` · total ${okIc(v.tot)}` : ''}`;
    bet = v.pk ? `<div class="say"><b>Aposta do Lu:</b> ${esc(v.pk.lb)} @ ${odd2(v.pk.odd)} → ${v.pkr === 'won' ? `<b class="pos">ganhou ${unitsTxt(v.pku)}</b>` : v.pkr === 'lost' ? `<b class="neg">perdeu</b>` : 'devolvida'}</div>` : `<div class="mk">O Lu não apostou neste jogo.</div>`;
  } else if (g.s === 'post') say = `<span class="muted">Sem previsão guardada antes do jogo.</span>`;
  else {
    say = `<b>Lu:</b> ${esc(tNick(fav))} ${Math.abs(P.m) < 1 ? 'muito equilibrado' : 'por ' + f1(P.m)} (${pct(Math.max(P.pML, 1 - P.pML))}) · ${Math.round(P.t)} pontos`;
    bet = g.s === 'pre' ? (P.value ? `<div class="say"><b style="color:var(--c-orange)">👉 Aposta do Lu:</b> ${esc(selLabel(g, P.value.mk, P.value.sel, P.value.line))} @ ${odd2(P.value.odd)} <span class="pos small">valor ${sPct(P.value.ev)}</span></div>` : `<div class="mk">Aposta do Lu: nenhuma ainda — mete as odds da Betano na ficha.</div>`) : '';
  }
  const book = o.hl != null || o.hml ? `<div class="mk">${ic('coins')} ${esc(o.p || 'Casa')}: ${o.hl != null ? (o.hl === 0 ? 'equilibrado' : `${esc(o.hl < 0 ? g.h : g.a)} favorito por ${f1(o.hl)}`) : ''}${o.tl != null ? ` · total ${gl(o.tl)}` : ''}${o.hml ? ` · ${esc(g.h)} ${odd2(o.hml)} / ${esc(g.a)} ${odd2(o.aml)}` : ''}</div>` : '';
  const team = (t, r, side) => `<div class="team">${logo(t)}<div style="min-width:0"><div class="nm${nmLg(t)}">${esc(tNick(t))}</div><div class="rc">${recTxt(r)} · ${side === 'h' ? 'casa' : 'fora'}</div></div></div>`;
  return `<div class="gc" onclick="GT='ana';openGame('${g.id}')"><div class="notch">${notch}</div>${tags.length ? `<div class="hd">${tags.join('')}</div>` : ''}
  <div class="tm">${team(g.h, rh, 'h')}<div class="vsx">VS</div>${team(g.a, ra, 'a')}</div>${board}
  <div class="ft"><div class="say">${say}</div>${bet}${book}</div></div>`;
}
/* ---------- FOLHA ---------- */
function openSheet(title, html, short) { const b = $('#sheetBox'); b.className = 'box' + (short ? ' short' : ''); b.innerHTML = `<div class="sh"><h3>${title}</h3><button class="x" onclick="closeSheet()" aria-label="Fechar">${ic('x')}</button></div>${html}`; $('#sheet').classList.add('on'); b.scrollTop = 0; }
function closeSheet() { $('#sheet').classList.remove('on'); }
function askConfirm(msg, okTxt, fnName) { openSheet('Confirmar', `<p>${msg}</p><div class="row"><button class="btn full" onclick="closeSheet()">Cancelar</button><button class="btn red full" onclick="${fnName}">${okTxt}</button></div>`, true); }

/* ---------- FICHA DO JOGO ---------- */
function openGame(id) {
  const g = DB.g[id]; if (!g) return;
  const P = predict(g);
  const favH = P.pML >= 0.5, conf = Math.round(Math.max(P.pML, 1 - P.pML) * 100);
  const cov = L => probs(P, 'sp', favH ? 'h' : 'a', L).w;
  let h = `<div class="pn" style="margin-top:6px"><div class="tm" style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px">
   <div class="team">${logo(g.h, 56)}<div class="nm${nmLg(g.h)}">${esc(tNick(g.h))}</div><div class="rc">${esc(tName(g.h))} · casa</div></div>
   <div class="score">${g.s === 'pre' ? `<div class="vsx">VS</div>` : g.hs != null ? `<div class="s">${g.hs}–${g.as}</div><div class="p">${g.s === 'in' ? esc(g.cl) : g.ot ? 'prolongamento' : 'final'}</div>` : '<div class="p">adiado</div>'}</div>
   <div class="team">${logo(g.a, 56)}<div class="nm${nmLg(g.a)}">${esc(tNick(g.a))}</div><div class="rc">${esc(tName(g.a))} · fora</div></div></div>
   <div class="small muted" style="text-align:center;margin:6px 0 10px">${dayLbl(g.d)} às ${hhmm(g.d)} (hora de cá)${g.neu ? ' · campo neutro' : ''}</div>
   <div class="mosaic"><div><b>${f1(P.m)}</b><small>margem ${esc(favH ? g.h : g.a)}</small></div><div><b>${Math.round(P.t)}</b><small>pontos totais</small></div><div><b>${pct(cov(-2.5))}</b><small>${esc(favH ? g.h : g.a)} por 3+</small></div></div>
   <div class="big-ovr" style="margin-top:6px"><div class="t">Confiança do Lu<div class="small muted">${esc(tNick(favH ? g.h : g.a))} ganha</div></div><div class="grow"></div><div class="n">${conf}%</div></div></div>
   <div class="tabs">${[['ana', 'Análise'], ['mk', 'Odds'], ['eq', 'Equipas']].map(([k, t]) => `<button class="${GT === k ? 'on' : ''}" onclick="GT='${k}';openGame('${id}')">${t}</button>`).join('')}</div>`;
  if (GT === 'mk') h += tabOdds(g, P);
  else if (GT === 'eq') h += tabEquipas(g, P);
  else h += tabAnalise(g, P);
  const mine = BETS.filter(b => b.st !== 'pass' && (b.g === g.id || (b.legs && b.legs.some(l => l.g === g.id))));
  if (mine.length) h += catH('list', 'Apostas neste jogo', 'var(--c-blue)') + `<div class="pn" style="margin-top:0">${mine.map(betRow).join('')}</div>`;
  if (canBet(g)) h += `<div class="cta"><button class="btn fill full" onclick="openBet('${g.id}')">${ic('target')} Apostar neste jogo</button></div>`;
  openSheet(esc(g.h) + ' <span class="muted">vs</span> ' + esc(g.a), h);
}
function tabAnalise(g, P) {
  const s1 = v => (v > 0 ? '+' : v < 0 ? '−' : '') + Math.abs(v).toFixed(1).replace('.', ',');
  const favH = P.m >= 0, F = favH ? g.h : g.a, side = favH ? 'h' : 'a';
  const mpp = []; for (let i = 0; i < 141; i++) mpp.push([i - 70, P.pm[i]]);
  const top = mpp.filter(([k]) => favH ? k > 0 : k < 0).sort((x, y) => y[1] - x[1]).slice(0, 4);
  let h = catH('chart', 'Previsão', 'var(--c-blue)') +
    attr(esc(tNick(g.h)) + ' ganha', Math.round(P.pML * 100), tCol(g.h), pct(P.pML), 100) +
    attr(esc(tNick(g.a)) + ' ganha', Math.round((1 - P.pML) * 100), tCol(g.a), pct(1 - P.pML), 100) +
    `<div class="small muted">Margens mais prováveis para ${esc(tNick(F))}: ${top.map(([k, p]) => `<b>${Math.abs(k)}</b> ${pct(p)}`).join(' · ')} — os números-chave do futebol americano (3 e 7).</div>`;
  h += catH('chip', 'Porque pensa assim', 'var(--c-purple)', 'pontos para ' + esc(g.h)) +
    P.reasons.map(([t, v]) => `<div class="why"><span>${esc(t)}</span><b class="${v > 0.05 ? 'pos' : v < -0.05 ? 'neg' : 'muted'}">${Math.abs(v) < 0.05 ? '0' : s1(v)}</b></div>`).join('') +
    `<div class="why"><span>= Só pelo modelo do Lu</span><b>${esc(P.mModel >= 0 ? g.h : g.a)} ${f1(P.mModel)}</b></div>` +
    (P.W ? `<div class="why"><span>Linha da casa (peso ${pct(P.W)})</span><b>${esc(g.h)} ${lineTxt(g.o.hl)}</b></div>` : `<div class="why"><span>Sem linha da ESPN: vai só pelo modelo</span><b>—</b></div>`) +
    `<div class="why" style="border:0"><span><b>Conclusão:</b> ${esc(tNick(F))} por ${f1(P.m)} · ${Math.round(P.t)} pontos</span></div>`;
  h += catH('list', 'Handicaps alternativos (Lu)', 'var(--c-green)') + `<table class="tbl"><tr><th>Aposta</th><th>Lu</th><th>Justa</th></tr>` +
    [-10.5, -7.5, -6.5, -3.5, -2.5, 2.5, 3.5, 6.5, 7.5, 10.5].map(L => { const q = probs(P, 'sp', side, L); return `<tr><td>${esc(tNick(F))} ${lineTxt(L)}</td><td>${pct(q.w)}</td><td>${odd2(fairOf(q))}</td></tr>`; }).join('') + '</table>' +
    `<div class="small muted" style="margin-top:6px">Repara no salto entre −2,5 e −3,5 e entre −6,5 e −7,5: muitos jogos acabam por 3 ou 7. Se a Betano cobrar pouco por esse salto, pode haver valor.</div>`;
  return h;
}

function tabOdds(g, P) {
  const b = BO[g.id] || {}, done = g.s !== 'pre';
  const fair = (mk, sel, line) => odd2(fairOf(probs(P, mk, sel, line)));
  const inp = (k, ph) => `<input class="in" style="padding:8px;text-align:center" inputmode="decimal" id="bo_${k}" placeholder="${String(ph).replace('.', ',')}" value="${b[k] != null ? String(b[k]).replace('.', ',') : ''}" ${done ? 'disabled' : ''}>`;
  const hl0 = b.hl != null ? b.hl : (g.o && g.o.hl != null ? g.o.hl : -Math.round(P.m * 2) / 2 - 0.5), tl0 = b.tl != null ? b.tl : (g.o && g.o.tl != null ? g.o.tl : Math.round(P.t) + 0.5);
  let h = catH('coins', 'Odds da Betano (mete-as tu)', 'var(--c-orange)', done ? 'jogo começado' : '') +
    `<div class="small muted" style="margin-bottom:6px">Escreve as que vês na Betano. Os números a cinzento dentro dos campos são as <b>odds justas</b> do Lu: se a Betano pagar mais, há valor.</div>
    <label class="f">Vencedor · ${esc(tNick(g.h))} / ${esc(tNick(g.a))}</label><div class="row">${inp('mh', fair('ml', 'h'))}${inp('ma', fair('ml', 'a'))}</div>
    <label class="f">Handicap · linha de ${esc(g.h)} / odd ${esc(g.h)} / odd ${esc(g.a)}</label><div class="row">${inp('hl', hl0)}${inp('hh', fair('sp', 'h', hl0))}${inp('ha', fair('sp', 'a', -hl0))}</div>
    <label class="f">Total de pontos · linha / mais / menos</label><div class="row">${inp('tl', tl0)}${inp('to', fair('tot', 'o', tl0))}${inp('tu', fair('tot', 'u', tl0))}</div>
    ${done ? '' : `<button class="btn fill full" style="margin-top:10px" onclick="saveBO('${g.id}')">${ic('check')} Guardar odds e ver valor</button>`}`;
  if (P.cands.length) h += catH('gem', 'Onde há valor', 'var(--c-green)') + `<table class="tbl"><tr><th>Aposta</th><th>Odd</th><th>Lu</th><th>Justa</th><th>Valor</th></tr>` +
    P.cands.map((c, i) => `<tr class="tap ${P.best && c === P.best ? 'best' : ''}" onclick="${canBet(g) ? `openBet('${g.id}',${i})` : ''}"><td>${esc(selLabel(g, c.mk, c.sel, c.line))}<div class="small muted">${esc(c.src)}</div></td><td>${odd2(c.odd)}</td><td>${pct(c.p)}</td><td>${odd2(c.fair)}</td><td class="${c.ev > 0 ? 'pos' : 'neg'}">${sPct(c.ev)}</td></tr>`).join('') +
    `</table><div class="small muted" style="margin:8px 2px">Toca numa linha para apostar nela. Tudo conta prolongamento.</div>`;
  else h += `<div class="small muted" style="margin-top:10px">Ainda sem odds para comparar.</div>`;
  return h;
}
function saveBO(id) {
  const o = {};
  ['mh', 'ma', 'hl', 'hh', 'ha', 'tl', 'to', 'tu'].forEach(k => { const e = $('#bo_' + k); const v = e ? num(e.value) : null; if (v != null) o[k] = v; });
  ['mh', 'ma', 'hh', 'ha', 'to', 'tu'].forEach(k => { if (o[k] != null && !(o[k] > 1 && o[k] < 60)) delete o[k]; });
  const g = DB.g[id], P = predict(g);
  if ((o.hh || o.ha) && o.hl == null) o.hl = g.o && g.o.hl != null ? g.o.hl : -Math.round(P.m * 2) / 2 - 0.5;
  if ((o.to || o.tu) && o.tl == null) o.tl = g.o && g.o.tl != null ? g.o.tl : Math.round(P.t) + 0.5;
  if (o.hl != null && Math.abs(o.hl) > 40) delete o.hl;
  if (o.tl != null && !(o.tl > 20 && o.tl < 90)) delete o.tl;
  if (Object.keys(o).length) BO[id] = o; else delete BO[id];
  LS.set('bo', BO); PC.delete(id); toast('Odds guardadas'); GT = 'mk'; openGame(id); render();
}


function tabEquipas(g, P) {
  const card = (t, side) => {
    const T = teamRt(t), r = T.r, rest = side === 'h' ? P.rh : P.ra;
    return `<div class="pn"><div class="row">${logo(t, 46)}<div style="flex:1"><div class="pn-h" style="margin:0">${esc(tNick(t))} <span class="muted small">${esc(tName(t))}</span></div><div class="small muted">${side === 'h' ? 'Casa' : 'Fora'} · ${r.w}-${r.l}${r.t ? '-' + r.t : ''} · ${rest == null ? '—' : rest >= 13 ? '<span class="pos">vem de folga</span>' : rest <= 5 ? '<span class="neg">semana curta</span>' : rest + ' dias de descanso'}</div></div><div class="ovr"><b>${T.ovr}</b><small>OVR</small></div></div>
     <div class="div"></div>
     ${attr('Ataque', T.atk, 'var(--c-blue)')}${attr('Defesa', T.def, 'var(--c-purple)')}${attr('Forma (últ. 5)', T.form, 'var(--c-green)')}
     <div class="row small muted">Últimos 5 <span class="form">${(r.last || []).slice(-5).map(x => `<i class="${x.w ? 'w' : x.t ? 'o' : 'l'}" title="${esc(x.s)}">${x.w ? 'V' : x.t ? 'E' : 'D'}</i>`).join('')}</span><span style="margin-left:auto">pontos ${r.pf}-${r.pa}</span></div></div>`;
  };
  return card(g.h, 'h') + card(g.a, 'a') + `<div class="small muted">Notas de 0 a 99 do Lu (pontos marcados e sofridos, corrigidos pelos adversários, mais peso no recente).</div>`;
}

/* ---------- APOSTAR (e o Lu responde) ---------- */
let BF = null;
const MKS = [['ml', 'Vencedor'], ['sp', 'Handicap'], ['tot', 'Total']];
function openBet(id, ci) {
  const g = DB.g[id]; if (!canBet(g)) return toast('Este jogo já começou — já não dá para apostar');
  const P = predict(g);
  const c0 = (ci != null && P.cands[ci]) || P.best || { mk: 'ml', sel: P.pML >= 0.5 ? 'h' : 'a' };
  BF = { id, mk: c0.mk, sel: c0.sel, line: c0.line, odd: c0.odd || '', stake: Math.max(CFG.min, 1) };
  drawBet();
}
function presetBF() {
  const g = DB.g[BF.id], P = predict(g), b = BO[g.id] || {}, o = g.o || {};
  const hl = b.hl != null ? b.hl : o.hl != null ? o.hl : -Math.round(P.m * 2) / 2 - 0.5;
  BF.line = BF.mk === 'sp' ? (BF.sel === 'h' ? hl : -hl) : BF.mk === 'tot' ? (b.tl != null ? b.tl : o.tl != null ? o.tl : Math.round(P.t) + 0.5) : null;
  const c = P.cands.find(x => x.mk === BF.mk && x.sel === BF.sel && (x.line == null || x.line === BF.line));
  BF.odd = c ? c.odd : '';
}
function sideFix() { presetBF(); }
function drawBet() {
  const g = DB.g[BF.id];
  const segMk = `<div class="seg">${MKS.map(([k, t]) => `<button class="${BF.mk === k ? 'on' : ''}" onclick="BF.mk='${k}';BF.sel='${k === 'tot' ? 'o' : 'h'}';presetBF();drawBet()">${t}</button>`).join('')}</div>`;
  const sels = BF.mk === 'tot' ? [['o', 'Mais'], ['u', 'Menos']] : [['h', tNick(g.h)], ['a', tNick(g.a)]];
  const segSel = sels.map(([k, t]) => `<button class="${BF.sel === k ? 'on' : ''}" onclick="BF.sel='${k}';presetBF();drawBet()">${esc(t)}</button>`).join('');
  const needLine = BF.mk === 'sp' || BF.mk === 'tot';
  openSheet('A tua aposta', `<div class="small muted">${esc(gLabel(g))} · ${dayLbl(g.d)} ${hhmm(g.d)}</div>
   <label class="f">Mercado</label>${segMk}
   <label class="f">Escolha</label><div class="seg">${segSel}</div>
   ${needLine ? `<label class="f">${BF.mk === 'sp' ? 'Handicap da tua escolha' : 'Linha de pontos'}</label><input class="in" id="bLine" inputmode="decimal" value="${BF.line == null ? '' : String(BF.line).replace('.', ',')}" oninput="betOpinion()">` : ''}
   <div class="row"><div style="flex:1"><label class="f">Odd (a da Betano)</label><input class="in" id="bOdd" inputmode="decimal" value="${BF.odd ? String(BF.odd).replace('.', ',') : ''}" oninput="betOpinion()"></div>
   <div style="flex:1"><label class="f">Valor (€)</label><input class="in" id="bStake" inputmode="decimal" value="${String(BF.stake).replace('.', ',')}" oninput="betOpinion()"></div></div>
   <div class="opinion" id="bOp"></div>
   <button class="btn fill full" style="margin-top:12px" id="bGo" onclick="placeBet()">${ic('check')} Registar a minha aposta</button>
   <div class="small muted" style="margin-top:6px">Ao registares, o Lu escolhe a aposta dele neste jogo, com o mesmo valor. Ganha o duelo quem lucrar mais.</div>`, true);
  betOpinion();
}
function readBF() { const nl = BF.mk === 'sp' || BF.mk === 'tot'; BF.line = nl ? num($('#bLine') && $('#bLine').value) : null; BF.odd = num($('#bOdd').value); BF.stake = num($('#bStake').value); }
function betOpinion() {
  readBF();
  const g = DB.g[BF.id], P = predict(g), box = $('#bOp'), nl = ['sp', 'tot'].includes(BF.mk);
  if (nl && BF.line == null) { $('#bGo').disabled = true; box.className = 'opinion'; box.innerHTML = `<div class="face">${luFace('ok')}</div><div>Diz-me a linha.</div>`; return; }
  const q = probs(P, BF.mk, BF.sel, BF.line), p = q.w, fair = fairOf(q);
  let cls = 'opinion', mood = 'ok', msg;
  if (!(BF.odd > 1)) msg = `Para mim isto acontece ${pct(p)} das vezes${q.push > 0.005 ? ` (e ${pct(q.push)} é devolvida)` : ''}. Odd justa: <b>${odd2(fair)}</b>.`;
  else {
    const ev = evOf(q, BF.odd);
    if (ev >= 0.05) { cls += ' good'; mood = 'win'; msg = `Boa! Dou-lhe ${pct(p)}. Com ${odd2(BF.odd)} tens <b>valor ${sPct(ev)}</b>.`; }
    else if (ev >= 0) msg = `Dou-lhe ${pct(p)}. Valor ${sPct(ev)}: aposta justa, sem grande vantagem.`;
    else { cls += ' bad'; mood = 'sad'; msg = `Hum… dou-lhe ${pct(p)} (justa ${odd2(fair)}). Com ${odd2(BF.odd)} perdes <b>${sPct(ev)}</b> a longo prazo.`; }
  }
  const issues = [];
  if (!(BF.stake >= CFG.min)) issues.push(`a aposta mínima é ${eur(CFG.min)}`);
  if (BF.stake > accStats('tu').bal) issues.push('não tens saldo para isso');
  box.className = cls; box.innerHTML = `<div class="face">${luFace(mood)}</div><div>${msg}${issues.length ? `<div class="neg small" style="margin-top:4px">${issues.join(' · ')}</div>` : ''}</div>`;
  $('#bGo').disabled = !(BF.odd > 1 && BF.stake >= CFG.min && BF.stake <= accStats('tu').bal && (!nl || BF.line != null));
}
function placeBet() {
  readBF();
  const g = DB.g[BF.id]; if (!canBet(g)) return toast('O jogo já começou');
  const nl = ['sp', 'tot'].includes(BF.mk);
  if ((nl && BF.line == null) || !(BF.odd > 1) || !(BF.stake >= CFG.min) || BF.stake > accStats('tu').bal) return toast('Falta a linha, a odd ou o valor');
  const P = predict(g);
  const c = { mk: BF.mk, sel: BF.sel, line: BF.line, odd: BF.odd };
  const q = probs(P, c.mk, c.sel, c.line), p = q.w, mineEv = evOf(q, c.odd);
  const duel = 'd' + Date.now().toString(36);
  newBet('tu', g, c, BF.stake, { p: r2(p), ev: r2(mineEv), duel });
  const opts = P.cands.filter(x => x.odd >= CFG.oddMin && x.odd <= CFG.oddMax && x.ev > 0).sort((a, b) => b.ev - a.ev);
  let tc = opts[0] || null;
  if (mineEv > 0 && (!tc || mineEv > tc.ev)) tc = Object.assign({}, c, { p, ev: mineEv });
  let msg, mood;
  const stake = Math.min(BF.stake, accStats('lu').bal);
  if (tc && stake >= CFG.min) {
    newBet('lu', g, tc, stake, { p: r2(tc.p), ev: r2(tc.ev), duel });
    const same = tc.mk === c.mk && tc.sel === c.sel && tc.line === c.line;
    msg = same ? `Concordo contigo! Vou no mesmo: <b>${esc(selLabel(g, tc.mk, tc.sel, tc.line))}</b> @ ${odd2(tc.odd)}.` : `Eu vou em <b>${esc(selLabel(g, tc.mk, tc.sel, tc.line))}</b> @ ${odd2(tc.odd)} (dou-lhe ${pct(tc.p)}). Que ganhe o melhor!`;
    mood = 'win';
  } else {
    BETS.push({ id: 'gp' + Date.now().toString(36), acc: 'lu', g: g.id, gl: gLabel(g), gd: g.d, mk: 'pass', stake: 0, odd: 0, t: Date.now(), st: 'pass', ret: 0, lb: 'Passou', duel });
    msg = stake < CFG.min ? 'Estou sem saldo… passo esta.' : 'Neste jogo não vejo nada com valor. Passo — fico com o meu dinheiro.'; mood = 'sad';
  }
  saveBets();
  openSheet('Duelo marcado', `<div class="opinion"><div class="face">${luFace(mood)}</div><div>${msg}</div></div>
    <div class="row" style="margin-top:14px"><button class="btn full" onclick="closeSheet();render()">Fechar</button><button class="btn fill full" onclick="closeSheet();go('duelo')">Ver duelo</button></div>`, true);
  render();
}
function voidBet(id) {
  const b = BETS.find(x => x.id === id); if (!b || b.st !== 'open') return;
  const gs = b.legs ? b.legs.map(l => DB.g[l.g]) : [DB.g[b.g]];
  if (gs.some(g => !canBet(g))) { closeSheet(); return toast('O jogo já começou: já não dá para anular'); }
  BETS.filter(x => x.duel && x.duel === b.duel && (x.st === 'open' || x.st === 'pass')).concat([b]).forEach(x => { if (x.st === 'pass') x.st = 'void'; else { x.st = 'void'; x.ret = x.stake; } x.tset = Date.now(); });
  saveBets(); closeSheet(); toast('Aposta anulada (o dinheiro voltou)'); render();
}

/* ---------- DUELO ---------- */
function duels() {
  const by = {};
  BETS.filter(b => b.duel).forEach(b => { (by[b.duel] = by[b.duel] || {})[b.acc] = b; });
  return Object.entries(by).map(([k, v]) => ({ k, tu: v.tu, lu: v.lu })).filter(d => d.tu).sort((a, b) => b.tu.t - a.tu.t);
}
const betPL = b => !b || b.st === 'open' || b.st === 'void' || b.st === 'pass' ? 0 : r2((b.ret || 0) - b.stake);
function viewDuelo() {
  const D = duels().filter(d => d.tu.st !== 'void');
  let you = 0, him = 0, w = 0, l = 0, e = 0, open = 0;
  D.forEach(d => {
    if (d.tu.st === 'open' || (d.lu && d.lu.st === 'open')) { open++; return; }
    const a = betPL(d.tu), b = betPL(d.lu); you += a; him += b;
    if (Math.abs(a - b) < 0.005) e++; else if (a > b) w++; else l++;
  });
  const n = w + l + e;
  let h = `<div class="pn hl" style="margin-top:14px">${pnH(`${ic('vs')} Duelo`, open + ' em jogo')}
    <div class="vs"><div><div class="av me">${ic('star')}</div><div class="nm">Tu</div><div class="ovr" style="margin-top:6px"><b class="${you >= 0 ? 'pos' : 'neg'}">${sEur(you)}</b><small>LUCRO</small></div></div>
    <div class="mid">VS</div>
    <div><div class="av">${luFace(him > you ? 'win' : him < you ? 'sad' : 'ok')}</div><div class="nm">Mister Lu</div><div class="ovr" style="margin-top:6px"><b class="${him >= 0 ? 'pos' : 'neg'}">${sEur(him)}</b><small>LUCRO</small></div></div></div>
    <div style="margin-top:14px">${attr('Duelos ganhos por ti', n ? Math.round(w / n * 100) : 0, 'var(--c-blue)', `${w} de ${n}`, 100)}${attr('Duelos ganhos pelo Lu', n ? Math.round(l / n * 100) : 0, 'var(--c-orange)', `${l} de ${n}`, 100)}${e ? `<div class="small muted">${e} empate${e > 1 ? 's' : ''} (mesma aposta)</div>` : ''}</div></div>`;
  if (!D.length) return h + `<div class="pn empty"><div class="face">${luFace('ok')}</div><b>Ainda não houve duelos.</b><div class="muted small" style="margin:6px 0 14px">Abre um jogo em «Jogos» ou regista o Boletim seguro. Eu respondo com a minha aposta.</div><button class="btn fill" onclick="go('jogos')">${ic('ball')} Ver jogos</button></div>`;
  h += catH('list', 'Duelos', 'var(--c-blue)');
  h += D.map(d => {
    const g = d.tu.mk === 'multi' ? null : DB.g[d.tu.g] || {};
    const res = !g ? `${d.tu.legs.length} jogos` : g.s === 'post' && g.hs != null ? resTxt(g) : g.s === 'in' ? 'a decorrer' : hhmm(d.tu.gd);
    const a = betPL(d.tu), b = betPL(d.lu), closed = d.tu.st !== 'open' && (!d.lu || d.lu.st !== 'open');
    const cell = (x, who, k, win) => `<div class="${closed && win ? 'win' : ''}" style="--k:${k}"><div class="h">${who}</div>${x && x.st !== 'pass' ? `<b>${esc(x.lb)}</b>${x.legs ? `<div class="small muted">${x.legs.map(l => esc(l.lb)).join(' + ')}</div>` : ''}<div class="small muted">@ ${odd2(x.odd)} · ${eur(x.stake)}</div><div class="small" style="margin-top:3px">${stTag(x)}</div>` : '<b class="muted">Passou</b>'}</div>`;
    return `<div class="pn" style="padding:12px 14px"><div class="row small"><b>${esc(d.tu.src === 'seguro' ? 'Boletim seguro' : d.tu.gl)}</b><span class="muted" style="margin-left:auto">${res}</span></div>
     <div class="duel">${cell(d.tu, 'Tu', 'var(--c-blue)', a > b)}${cell(d.lu, 'Mister Lu', 'var(--c-orange)', b > a)}</div></div>`;
  }).join('');
  return h;
}
function stTag(b) {
  if (b.st === 'open') return '<span class="tg" style="--k:var(--c-blue)">em jogo</span>';
  if (b.st === 'won') return `<span class="tg" style="--k:var(--pos)">ganhou ${sEur(b.ret - b.stake)}</span>`;
  if (b.st === 'lost') return `<span class="tg" style="--k:var(--neg)">perdeu ${sEur(-b.stake)}</span>`;
  if (b.st === 'push') return '<span class="tg">devolvida</span>';
  if (b.st === 'void') return '<span class="tg">anulada</span>';
  return '<span class="tg">passou</span>';
}

/* ---------- CONTAS ---------- */
function betRow(b) {
  const legs = b.legs ? `<div class="legs">${b.legs.map(l => `${l.r === 'won' ? '<span class="pos">✓</span>' : l.r === 'lost' ? '<span class="neg">✗</span>' : '•'} ${esc(l.lb)} @ ${odd2(l.odd)} <span class="muted">(${esc((DB.g[l.g] || {}).h)}–${esc((DB.g[l.g] || {}).a)}${l.res ? ' ' + esc(l.res) : ''})</span>`).join('<br>')}</div>` : '';
  return `<div class="bet"><div class="who" style="--k:${ACC[b.acc].c}">${ic(ACC[b.acc].ic)}</div><div class="m"><div class="t">${esc(b.lb)} <span class="muted" style="font-weight:400">@ ${odd2(b.odd)}</span></div>
   <div class="g">${b.legs ? 'Boletim' : esc(b.gl)} · ${dayLbl(b.gd)} ${hhmm(b.gd)}${b.res ? ' · ' + esc(b.res) : ''}${b.ev != null ? ` · valor Lu ${sPct(b.ev)}` : b.p != null && b.legs ? ` · Lu ${pct(b.p)}` : ''}</div>${legs}
   <div style="margin-top:4px">${stTag(b)}${b.acc === 'tu' && b.st === 'open' ? ` <button class="btn sm" style="min-height:26px;padding:2px 10px" onclick="askConfirm('Anular esta aposta? (se não chegaste a jogá-la na Betano). O duelo do Lu também é anulado.','Anular',&quot;voidBet('${b.id}')&quot;)">anular</button>` : ''}</div></div>
   <div class="v">${eur(b.stake)}<small>${b.st === 'open' ? 'pode dar ' + eur(b.stake * b.odd) : ''}</small></div></div>`;
}
function viewContas() {
  const tile = k => { const s = accStats(k); return `<div class="acct ${ACCF === k ? 'on' : ''}" style="--k:${ACC[k].c}" onclick="ACCF=ACCF==='${k}'?'all':'${k}';render()">${ic(ACC[k].ic)}<div class="n">${ACC[k].n}</div><div class="v">${eur(s.bal)}</div><div class="d"><span class="${s.profit >= 0 ? 'pos' : 'neg'}">${sEur(s.profit)}</span></div></div>`; };
  let h = `<div class="accs">${tile('tu')}${tile('lu')}${tile('pi')}</div>`;
  if (ACCF !== 'all') {
    const s = accStats(ACCF), n = s.w + s.l;
    h += `<div class="pn hl">${pnH(`${ic(ACC[ACCF].ic)} ${ACC[ACCF].n}`, 'toca outra vez para ver todas')}
      <div class="mosaic"><div><b>${eur(s.bal).replace(' €', '')}</b><small>saldo (€)</small></div><div><b>${n ? pct(s.w / n) : '—'}</b><small>acerto ${s.w}/${n}</small></div><div><b class="${s.roi >= 0 ? 'pos' : 'neg'}">${sPct(s.roi)}</b><small>ROI</small></div></div>
      <div class="small muted">Começou com ${eur(s.start)} · em jogo ${eur(s.open)}</div></div>`;
  } else h += `<div class="small muted" style="margin:8px 2px">Toca numa conta para ver os números dela.</div>`;
  h += `<div class="row w" style="margin-top:8px"><button class="btn sm" onclick="exportCSV()">${ic('download')} Exportar</button><button class="btn sm" onclick="printBets()">${ic('print')} Imprimir</button><button class="btn sm" onclick="openDeposit()">${ic('coins')} Recarregar</button></div>`;
  const L = BETS.filter(b => b.st !== 'pass' && (ACCF === 'all' || b.acc === ACCF)).sort((a, b) => b.t - a.t);
  const open = L.filter(b => b.st === 'open'), done = L.filter(b => b.st !== 'open');
  h += catH('fire', 'Em jogo', 'var(--c-orange)', `${open.length} · ${eur(open.reduce((s, b) => s + b.stake, 0))}`);
  h += open.length ? `<div class="pn open-box" style="margin-top:0">${open.map(betRow).join('')}</div>` : `<div class="pn small muted" style="margin-top:0">Nada em jogo.</div>`;
  h += catH('list', 'Histórico', 'var(--c-blue)');
  h += done.length ? `<div class="pn" style="margin-top:0">${done.slice(0, 150).map(betRow).join('')}</div>` : `<div class="pn small muted" style="margin-top:0">Ainda sem apostas fechadas.</div>`;
  return h;
}
function openDeposit() {
  openSheet('Recarregar banca', `<label class="f">Conta</label><select class="in" id="dAcc"><option value="tu">Tu</option><option value="lu">Mister Lu</option><option value="pi">Piloto</option></select>
   <label class="f">Valor a juntar (€)</label><input class="in" id="dVal" inputmode="decimal" value="50">
   <div class="small muted" style="margin-top:6px">Fica registado à parte: o lucro e o ROI continuam certos.</div>
   <button class="btn fill full" style="margin-top:12px" onclick="doDeposit()">Juntar</button>`, true);
}
function doDeposit() { const v = num($('#dVal').value); if (!(v > 0)) return toast('Valor inválido'); DEPOS.push({ acc: $('#dAcc').value, v: r2(v), t: Date.now() }); LS.set('depos', DEPOS); closeSheet(); toast('Banca recarregada'); render(); }
function betsForOut() { return BETS.filter(b => b.st !== 'pass' && (ACCF === 'all' || b.acc === ACCF)).sort((a, b) => a.t - b.t); }
const ST_TXT = { open: 'em jogo', won: 'ganhou', lost: 'perdeu', push: 'devolvida', void: 'anulada' };
const betDesc = b => b.legs ? b.legs.map(l => l.lb + ' @' + odd2(l.odd)).join(' + ') : b.lb;
function dlCSV(rows, name) {
  const csv = '﻿' + rows.map(r => r.map(x => /[;"\n]/.test(String(x)) ? '"' + String(x).replace(/"/g, '""') + '"' : x).join(';')).join('\n');
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
  a.download = name; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
}
function exportCSV() {
  const f = v => String(v == null ? '' : v).replace('.', ',');
  const rows = [['conta', 'registada', 'jogo', 'data_jogo', 'mercado', 'aposta', 'linha', 'odd', 'valor', 'estado', 'retorno', 'lucro', 'prob_gi', 'valor_gi', 'resultado']];
  betsForOut().forEach(b => rows.push([ACC[b.acc].n, new Date(b.t).toLocaleString('pt-PT'), b.legs ? 'Boletim ' + b.legs.length + ' jogos' : b.gl, new Date(b.gd).toLocaleString('pt-PT'), b.legs ? 'Múltipla' : mkName(b.mk), betDesc(b), f(b.line), f(b.odd), f(b.stake), ST_TXT[b.st] || b.st, b.st === 'open' ? '' : f(b.ret), b.st === 'open' ? '' : f(r2((b.ret || 0) - b.stake)), b.p != null ? f(b.p) : '', b.ev != null ? f(b.ev) : '', b.res || '']));
  dlCSV(rows, 'mister-lu-apostas-' + todayET() + '.csv'); toast('Ficheiro gerado (abre no Excel)');
}
function printBets() {
  const L = betsForOut(); const accs = ACCF === 'all' ? ['tu', 'lu', 'pi'] : [ACCF];
  $('#print').innerHTML = `<h2>Mister Lu · NFL — ${ACCF === 'all' ? 'todas as contas' : ACC[ACCF].n}</h2><p>${new Date().toLocaleString('pt-PT')}</p>
   <p>${accs.map(k => { const s = accStats(k); return `<b>${ACC[k].n}</b>: saldo ${eur(s.bal)} · em jogo ${eur(s.open)} · lucro ${sEur(s.profit)} · ROI ${sPct(s.roi)}`; }).join('<br>')}</p>
   <table><tr><th>Conta</th><th>Jogo</th><th>Aposta</th><th>Odd</th><th>Valor</th><th>Estado</th><th>Lucro</th></tr>${L.map(b => `<tr><td>${ACC[b.acc].n}</td><td>${esc(b.legs ? 'Boletim' : b.gl)}<br>${dayLbl(b.gd)}</td><td>${esc(betDesc(b))}</td><td>${odd2(b.odd)}</td><td>${eur(b.stake)}</td><td>${ST_TXT[b.st] || b.st}</td><td>${b.st === 'open' ? '' : sEur((b.ret || 0) - b.stake)}</td></tr>`).join('')}</table>`;
  window.print();
}

/* ---------- MAIS ---------- */
function openHelp() {
  const q = (t, x) => `<div class="pn"><div class="pn-h" style="font-size:1.05rem">${t}</div><div class="small" style="line-height:1.5">${x}</div></div>`;
  openSheet('O que quer dizer', q('Handicap −3,5', '«Chiefs −3,5» só ganha se os Chiefs ganharem por <b>4 ou mais</b>. «Broncos +3,5» ganha se os Broncos ganharem, ou perderem por 3 ou menos. Conta o prolongamento.') +
    q('Números-chave: 3 e 7', 'No futebol americano marca-se 3 (field goal) e 7 (touchdown + ponto extra). Por isso ~15% dos jogos acabam por 3 pontos e ~8% por 7. Passar de −2,5 para −3,5 custa muito mais do que de −4,5 para −5,5. O Lu sabe quanto vale cada salto.') +
    q('Total 44,5', '«Mais de 44,5» ganha com 45 ou mais pontos das duas equipas, prolongamento incluído.') +
    q('Folga e semana curta', 'Quem vem de uma semana sem jogar (bye) rende um pouco mais. Quem joga à quinta depois de ter jogado ao domingo rende um pouco menos.') +
    q('Valor', 'O Lu calcula a probabilidade e a <b>odd justa</b> (1 ÷ probabilidade). Se a casa paga mais, há <b>valor</b>. Só aparece «Aposta do Lu» quando o valor passa dos ' + pct(CFG.evMin) + '.') +
    q('Empate', 'Raríssimo (~0,2%): no vencedor, a aposta é devolvida.'));
}
function viewMais() {
  const T = [['chart', 'Estatísticas', 'openStats()'], ['trophy', 'Classificação', 'openStand()'], ['chip', 'Como pensa o Lu', 'openHow()'], ['info', 'O que quer dizer', 'openHelp()'], ['gear', 'Definições', 'openCfg()'], ['save', 'Cópia de segurança', 'openBackup()'], ['pulse', 'Testar ligação', 'openNet()']];
  if (!isStandalone()) T.push(['phone', 'Instalar app', 'openInstall()']);
  const ST = statsAll();
  return `<div class="pn hl" style="cursor:pointer;margin-top:14px" onclick="openStats()">${pnH(`${ic('chart')} Estatísticas do Lu`, 'tocar para abrir')}
    ${ST.n ? `<div class="mosaic"><div><b>${pct(ST.win / ST.n)}</b><small>vencedor (${ST.n})</small></div><div><b>${ST.spN ? pct(ST.spW / ST.spN) : '—'}</b><small>handicap</small></div><div><b class="${ST.bu >= 0 ? 'pos' : 'neg'}">${ST.bn ? unitsTxt(ST.bu) : '—'}</b><small>apostas</small></div></div>` : '<div class="small muted">Ainda sem jogos previstos e acabados.</div>'}</div>
   <div class="tiles">${T.map(([i, l, f]) => `<div class="tile" onclick="${f}">${ic(i)}<b>${l}</b></div>`).join('')}</div>
   <div class="pn small muted" style="text-align:center">Mister Lu v${APP_VER} · dados: nflverse até ${SEED.cut.split('-').reverse().join('/')} + ESPN · simulação, sem dinheiro real<br>© 2026 Júlio Melo</div>`;
}
function statsAll() {
  const R = { n: 0, win: 0, spN: 0, spW: 0, toN: 0, toW: 0, bn: 0, bw: 0, bu: 0, mk: {}, conf: {}, rows: [] };
  Object.values(DB.g).filter(g => g.s === 'post' && PREDS[g.id]).forEach(g => {
    const v = verdict(g); if (!v || v.win == null) return;
    R.n++; if (v.win) R.win++;
    if (v.sp != null) { R.spN++; if (v.sp) R.spW++; }
    if (v.tot != null) { R.toN++; if (v.tot) R.toW++; }
    const pc = v.conf, b = pc < 0.55 ? '50-55' : pc < 0.65 ? '55-65' : pc < 0.75 ? '65-75' : pc < 0.85 ? '75-85' : '85+';
    const C = R.conf[b] = R.conf[b] || { n: 0, w: 0, p: 0 }; C.n++; C.p += pc; if (v.win) C.w++;
    if (v.pk && (v.pkr === 'won' || v.pkr === 'lost')) { R.bn++; if (v.pkr === 'won') R.bw++; R.bu += v.pku; const K = R.mk[v.pk.mk] = R.mk[v.pk.mk] || { n: 0, w: 0, u: 0 }; K.n++; if (v.pkr === 'won') K.w++; K.u += v.pku; }
    R.rows.push({ g, v });
  });
  return R;
}
function wilson(k, n) { if (!n) return [0, 1]; const z = 1.96, p = k / n, d = 1 + z * z / n, c = (p + z * z / (2 * n)) / d, m = z * Math.sqrt(p * (1 - p) / n + z * z / (4 * n * n)) / d; return [c - m, c + m]; }
function openStats() {
  const R = statsAll(), ss = safeStats();
  const pm = (k, n) => { const [a, b] = wilson(k, n); return `${pct(k / n)} <small>(${Math.round(a * 100)}–${Math.round(b * 100)}%)</small>`; };
  let h = catH('target', 'Teste às cegas (antes da app)', 'var(--c-blue)', '2022-26 · 1.285 jogos') +
    `<div class="mosaic"><div><b>65%</b><small>vencedor (só o Lu)</small></div><div><b>68%</b><small>linha de fecho da casa</small></div><div><b>~50%</b><small>handicap contra a casa</small></div></div>
    <div class="small muted">Sem ver o futuro: o modelo sozinho fica atrás da linha de fecho das casas (como em quase todos os modelos públicos). Por isso o Lu usa a linha da casa com peso alto e põe preço nas <b>linhas alternativas</b>: aí as probabilidades bateram certo (ex.: favorito por 3+ ou 7+ pontos).</div>`;
  if (!R.n && !ss) return openSheet('Estatísticas', h + `<div class="pn empty"><div class="face">${luFace('ok')}</div>As estatísticas da app enchem-se sozinhas: o Lu guarda a previsão de cada jogo antes de começar. Toca em ↻ antes dos jogos de cada semana.</div>`);
  const sl = Object.values(SLIPS).map(slipResult).filter(x => x && x.st !== 'open'), slW = sl.filter(x => x.st === 'won').length;
  h += catH('check', 'Na app', 'var(--c-green)', R.n + ' jogos') +
    (R.n ? attr('Vencedor certo', Math.round(R.win / R.n * 100), 'var(--c-green)', pm(R.win, R.n), 100) +
      (R.spN ? attr('Lado certo no handicap (precisa 52,4%)', Math.round(R.spW / R.spN * 100), 'var(--c-blue)', pm(R.spW, R.spN), 100) : '') +
      (R.toN ? attr('Lado certo no total (precisa 52,4%)', Math.round(R.toW / R.toN * 100), 'var(--c-yellow)', pm(R.toW, R.toN), 100) : '') : '') +
    `<div class="why"><span>Peso que o Lu dá à linha da casa (aprendido)</span><b>${pct(calibW().w)} · ${calibW().n} jogos</b></div>`;
  h += catH('gem', 'Apostas do Lu (valor)', 'var(--c-orange)', R.bn ? `${R.bw}/${R.bn} · <b class="${R.bu >= 0 ? 'pos' : 'neg'}">${unitsTxt(R.bu)}</b>` : 'ainda nenhuma') +
    Object.entries(R.mk).map(([k, K]) => `<div class="why"><span>${mkName(k)}</span><b>${K.w}/${K.n} · <span class="${K.u >= 0 ? 'pos' : 'neg'}">${unitsTxt(K.u)}</span></b></div>`).join('');
  h += catH('shield', 'Seguro', 'var(--c-blue)') +
    (ss ? attr('Seleções seguras', Math.round(ss.w / ss.n * 100), 'var(--c-blue)', `${ss.w}/${ss.n} · prometia ${pct(ss.p)}`, 100) : '') +
    (sl.length ? attr('Boletins seguros inteiros', Math.round(slW / sl.length * 100), 'var(--c-blue)', `${slW}/${sl.length}`, 100) : '') +
    (!ss && !sl.length ? '<div class="small muted">Ainda sem resultados.</div>' : '');
  if (R.n) h += catH('chip', 'Quando o Lu diz X%, acontece…', 'var(--c-purple)') + `<table class="tbl"><tr><th>Confiança</th><th>Jogos</th><th>Lu dizia</th><th>Aconteceu</th></tr>` +
    ['50-55', '55-65', '65-75', '75-85', '85+'].filter(b => R.conf[b]).map(b => { const C = R.conf[b]; return `<tr><td>${b}%</td><td>${C.n}</td><td>${pct(C.p / C.n)}</td><td class="${Math.abs(C.w / C.n - C.p / C.n) < 0.08 ? 'pos' : 'neg'}">${pct(C.w / C.n)}</td></tr>`; }).join('') + `</table>`;
  h += catH('coins', 'Contas', 'var(--c-yellow)') + ['tu', 'lu', 'pi'].map(k => { const s = accStats(k); return `<div class="why"><span>${ACC[k].n}</span><b class="${s.profit >= 0 ? 'pos' : 'neg'}">${sEur(s.profit)} · ROI ${sPct(s.roi)} · ${s.w}/${s.w + s.l}</b></div>`; }).join('');
  h += `<button class="btn go full" style="margin-top:12px" onclick="exportPreds()">${ic('download')} Exportar previsões (Excel)</button>
   <div class="pn small muted">Os números entre parênteses são a margem de sorte (95%). Tudo foi guardado antes de cada jogo começar.</div>`;
  openSheet('Estatísticas', h);
}
function exportPreds() {
  const f = v => String(v == null ? '' : v).replace('.', ',');
  const rows = [['dia', 'casa', 'fora', 'resultado', 'lu_margem', 'lu_total', 'lu_prob_casa', 'linha_casa', 'total_casa', 'vencedor_certo', 'handicap_certo', 'total_certo', 'aposta_lu', 'odd', 'resultado_aposta', 'unidades']];
  statsAll().rows.forEach(({ g, v }) => rows.push([g.ed, tNick(g.h), tNick(g.a), resTxt(g), f(v.p.m), f(v.p.t), f(v.p.ml), f(v.p.mk != null ? -v.p.mk : ''), f(v.p.tl), v.win ? 1 : 0, v.sp == null ? '' : v.sp ? 1 : 0, v.tot == null ? '' : v.tot ? 1 : 0, v.pk ? v.pk.lb : '', v.pk ? f(v.pk.odd) : '', v.pk ? v.pkr : '', v.pk ? f(r2(v.pku)) : '']));
  dlCSV(rows, 'mister-lu-previsoes-' + todayET() + '.csv');
}
let CONFV = 'E';
function openStand() {
  const M = getModel(), set = Object.keys(TEAMS).filter(t => (CONFV === 'E') === AFC.includes(t));
  const ts = set.map(t => ({ t, r: M.rec[t] || { w: 0, l: 0, t: 0, pf: 0, pa: 0, last: [] }, o: teamRt(t).ovr }))
    .sort((a, b) => ((b.r.w + b.r.t / 2) / Math.max(1, b.r.w + b.r.l + b.r.t)) - ((a.r.w + a.r.t / 2) / Math.max(1, a.r.w + a.r.l + a.r.t)) || (b.r.pf - b.r.pa) - (a.r.pf - a.r.pa));
  openSheet('Classificação', `<div class="tabs" style="margin-top:4px"><button class="${CONFV === 'E' ? 'on' : ''}" onclick="CONFV='E';openStand()">AFC</button><button class="${CONFV === 'W' ? 'on' : ''}" onclick="CONFV='W';openStand()">NFC</button></div>
   <table class="tbl" style="margin-top:8px"><tr><th>#</th><th>Equipa</th><th>OVR</th><th>V-D</th><th>Pontos</th></tr>
   ${ts.map((x, i) => `<tr><td>${i + 1}</td><td><b>${esc(tNick(x.t))}</b></td><td>${x.o}</td><td>${x.r.w}-${x.r.l}${x.r.t ? '-' + x.r.t : ''}</td><td>${x.r.pf}-${x.r.pa}</td></tr>`).join('')}
   </table><div class="small muted" style="margin-top:6px">Feita pelo Lu com os resultados guardados. OVR = nota geral (0–99).</div>`);
}

function openHow() {
  const M = getModel(), P = SEED.par;
  openSheet('Como pensa o Lu', `<div class="pn" style="line-height:1.55">
   ${catH('chart', '1. Ataque e defesa', 'var(--c-blue)')}<p>Depois de cada jogo, o ataque e a defesa de cada equipa mexem ${Math.round(P.k * 100)}% do erro (pontos marcados e sofridos acima ou abaixo do esperado contra aquele adversário). Goleadas só contam até ${P.cap} pontos. De uma época para a outra fica ${pct(P.carry)} da força.</p>
   ${catH('home', '2. Casa', 'var(--c-orange)')}<p>A vantagem de jogar em casa aprende-se sozinha. Valia ~3 pontos há 10 anos; agora vale <b>${f1(M.HF)} pts</b>.</p>
   ${catH('clock', '3. Descanso', 'var(--c-red)')}<p>Vir de uma semana de folga vale +${f1(P.bye)} pt; jogar à quinta depois de domingo −${f1(P.short)}.</p>
   ${catH('target', '4. Números-chave', 'var(--c-green)')}<p>A margem final não é uma curva lisa: 3 e 7 aparecem muito mais (os pesos foram medidos em 17 épocas reais), o empate quase nunca. É isto que permite pôr preço certo em −2,5 vs −3,5 ou −6,5 vs −7,5.</p>
   ${catH('coins', '5. Mercado', 'var(--c-yellow)')}<p>Junta a linha da casa (ESPN) com peso alto e vai aprendendo quanto confiar nela: peso atual <b>${pct(calibW().w)}</b> (${calibW().n} jogos medidos).</p>
   ${catH('chip', '6. O que dizem os testes às cegas', 'var(--c-purple)')}<p>Afinado em 2009-18, escolhido com 2019-21 e testado sem ver o futuro em 2022-26 (1.285 jogos). O Lu sozinho acerta <b>65%</b> dos vencedores; a linha de fecho das casas 68%, e contra ela o handicap ficou ~50%. <b>Honestidade:</b> a linha principal da NFL é das mais eficientes do mundo. O valor possível está nas linhas alternativas e nas odds da Betano que fujam do justo.</p>
   <p class="small muted">Contas: <b>Tu</b> apostas e o Lu dá opinião; <b>Mister Lu</b> responde a cada aposta tua (duelo); <b>Piloto</b> aposta ${eur(CFG.piStake)} em cada «valor» com odds reais.</p></div>`);
}
function openCfg() {
  const inp = (id, lbl, v, hint) => `<label class="f">${lbl}</label><input class="in" id="${id}" inputmode="decimal" value="${String(v).replace('.', ',')}">${hint ? `<div class="small muted">${hint}</div>` : ''}`;
  openSheet('Definições', `<div class="row">${['tu', 'lu', 'pi'].map(k => `<div style="flex:1">${inp('c_' + k, 'Banca ' + ACC[k].n.replace('Mister ', ''), CFG.bank[k])}</div>`).join('')}</div>
   ${inp('c_min', 'Aposta mínima da tua casa (€)', CFG.min)}
   ${inp('c_pis', 'Valor de cada aposta do piloto (€)', CFG.piStake)}
   ${inp('c_ev', 'Valor mínimo para o Boletim (%)', Math.round(CFG.evMin * 100), 'Mais alto = menos apostas, mais exigentes.')}
   ${inp('c_w', 'Peso das odds da ESPN (%)', Math.round(CFG.mktW * 100), 'No teste às cegas a casa acertou um pouco melhor: 85% é um bom ponto.')}
   <label class="f">Piloto automático</label><div class="seg"><button id="c_pon" class="${CFG.piOn ? 'on' : ''}" onclick="this.classList.add('on');$('#c_poff').classList.remove('on')">Ligado</button><button id="c_poff" class="${!CFG.piOn ? 'on' : ''}" onclick="this.classList.add('on');$('#c_pon').classList.remove('on')">Desligado</button></div>
   <button class="btn fill full" style="margin-top:14px" onclick="saveCfg()">Guardar</button>
   <button class="btn red full" style="margin-top:10px" onclick="askConfirm('Apagar TODAS as apostas e recomeçar as três contas? Os jogos guardados ficam.','Apagar apostas','wipeBets()')">Recomeçar as contas</button>`);
}
function saveCfg() {
  const v = id => num($('#' + id).value);
  ['tu', 'lu', 'pi'].forEach(k => { const x = v('c_' + k); if (x >= 0) CFG.bank[k] = r2(x); });
  const mn = v('c_min'); if (mn > 0) CFG.min = r2(mn);
  const ps = v('c_pis'); if (ps > 0) CFG.piStake = r2(ps);
  const ev = v('c_ev'); if (ev != null) CFG.evMin = clamp(ev, 0, 50) / 100;
  const w = v('c_w'); if (w != null) CFG.mktW = clamp(w, 0, 100) / 100;
  CFG.piOn = $('#c_pon').classList.contains('on');
  LS.set('cfg', CFG); PC.clear(); closeSheet(); toast('Guardado'); render();
}
function wipeBets() { BETS = []; DEPOS = []; saveBets(); LS.set('depos', DEPOS); closeSheet(); toast('Contas a zero'); render(); }
function openBackup() {
  openSheet('Cópia de segurança', `<p class="small">Guarda as apostas, contas e definições num ficheiro. Serve para mudar de telemóvel ou para não perder nada.</p>
   <button class="btn fill full" onclick="exportAll()">${ic('download')} Exportar tudo</button>
   <label class="f" style="margin-top:14px">Importar um ficheiro</label><input type="file" accept=".json,application/json" class="in" onchange="importAll(this)">
   <div class="small muted" style="margin-top:6px">Importar substitui o que está neste telemóvel.</div>`, true);
}
function exportAll() {
  const data = {}; ['bets', 'preds', 'depos', 'cfg', 'safe', 'slips', 'bo', 'db'].forEach(k => data[k] = LS.get(k, null));
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify({ app: 'mister-lu', ver: APP_VER, t: Date.now(), data })], { type: 'application/json' }));
  a.download = 'mister-lu-copia-' + todayET() + '.json'; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
}
function importAll(inp) {
  const f = inp.files && inp.files[0]; if (!f) return;
  const r = new FileReader();
  r.onload = () => { try { const j = JSON.parse(r.result); if (j.app !== 'mister-lu' || !j.data) throw new Error('não é uma cópia do Mister Lu'); Object.entries(j.data).forEach(([k, v]) => { if (v != null) LS.set(k, v); }); toast('Importado'); setTimeout(() => location.reload(), 700); } catch (e) { toast(esc(e.message)); } };
  r.readAsText(f);
}
function openNet() { openSheet('Testar ligação', `<p class="small">Testa cada caminho até à ESPN e guarda o mais rápido.</p><button class="btn fill full" onclick="netTest(this)">Testar agora</button><div id="netBox" style="margin-top:10px"></div>`, true); }
async function netTest(btn) {
  btn.disabled = true; btn.textContent = 'A testar…';
  const url = `${ESPN}/scoreboard?dates=${todayET()}`; const rows = []; let best = null;
  for (let i = 0; i < BRIDGES.length; i++) {
    const t0 = Date.now();
    try { const ctrl = new AbortController(); const tm = setTimeout(() => ctrl.abort(), 12000); const r = await fetch(BRIDGES[i].f(url), { signal: ctrl.signal, cache: 'no-store' }); clearTimeout(tm); const j = await r.json(); const ms = Date.now() - t0; rows.push(`<span class="pos">✓</span> ${BRIDGES[i].n}: ${(j.events || []).length} jogos (${ms} ms)`); if (best == null || ms < best.ms) best = { i, ms }; }
    catch (e) { rows.push(`<span class="neg">✗</span> ${BRIDGES[i].n}: ${esc(e.name === 'AbortError' ? 'demorou demais' : e.message)}`); }
  }
  if (best) LS.set('bridge', best.i);
  $('#netBox').innerHTML = `<div class="pn small">${rows.join('<br>')}${best ? `<br><b>A usar: ${BRIDGES[best.i].n}</b>` : '<br><b class="neg">Nenhum caminho funcionou. Tens internet?</b>'}</div>`;
  btn.disabled = false; btn.textContent = 'Testar outra vez';
}

/* ---------- instalar como app ---------- */
let DEFER_INSTALL = null;
const isStandalone = () => (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); DEFER_INSTALL = e; if (VIEW === 'inicio' || VIEW === 'mais') render(); });
window.addEventListener('appinstalled', () => { DEFER_INSTALL = null; LS.set('instHide', 1); toast('Mister Lu instalado! Já está no teu ecrã.'); render(); });
function installBanner() {
  if (isStandalone() || LS.get('instHide', 0)) return '';
  return `<div class="pn inst"><span style="color:var(--blue)">${ic('phone')}</span><div class="t"><b>Instala o Mister Lu</b><small>Fica no ecrã do telemóvel, como uma app.</small></div><button class="btn fill sm" onclick="doInstall()">Instalar</button><button class="x" onclick="LS.set('instHide',1);render()" aria-label="Fechar">${ic('x')}</button></div>`;
}
const INSTALL_HELP = () => isIOS()
  ? '<p><b>iPhone:</b> abre no <b>Safari</b>, toca em <b>Partilhar</b> (□↑) e escolhe <b>«Adicionar ao ecrã principal»</b>.</p>'
  : '<p><b>Android (Chrome):</b> toca nos <b>⋮</b> em cima à direita e escolhe <b>«Instalar app»</b> ou <b>«Adicionar ao ecrã principal»</b>.</p>';
async function doInstall() {
  if (DEFER_INSTALL) { DEFER_INSTALL.prompt(); try { const r = await DEFER_INSTALL.userChoice; if (r && r.outcome === 'accepted') LS.set('instHide', 1); } catch (e) {} DEFER_INSTALL = null; render(); return; }
  openInstall();
}
function openInstall() {
  openSheet('Instalar como app', isStandalone() ? '<div class="pn">Já estás a usar o Mister Lu como app.</div>' :
    `<div class="pn"><div class="row" style="gap:12px"><div style="width:64px;height:64px;flex:0 0 64px">${luFace('win')}</div><div>Fica com o ícone do Lu no ecrã, abre em ecrã inteiro e funciona mesmo sem internet (só o ↻ precisa de rede).</div></div></div>
     ${DEFER_INSTALL ? `<button class="btn fill full" onclick="doInstall()">${ic('phone')} Instalar agora</button>` : ''}
     <div class="pn">${INSTALL_HELP()}</div>`, true);
}

/* ---------- arranque ---------- */
$('#topFace').innerHTML = luFace('ok');
$('#btnRefresh').innerHTML = ic('refresh');
document.querySelectorAll('[data-ic]').forEach(el => { el.outerHTML = ic(el.dataset.ic); });
window.addEventListener('hashchange', () => { const v = location.hash.slice(1); if (VIEWS.includes(v) && v !== VIEW) { VIEW = v; render(); } });
render();
function loadSeed() {
  fetch('seed.json').then(r => r.json()).then(j => { SEED = j; MODEL = null; settleAll(); render(); })
    .catch(() => { $('#view').innerHTML = `<div class="pn empty" style="margin-top:40px"><div class="face">${luFace('sad')}</div>Não consegui abrir o arquivo do Lu.<br><button class="btn fill" style="margin-top:12px" onclick="loadSeed()">${ic('refresh')} Tentar outra vez</button></div>`; });
}
loadSeed();
if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(() => {});

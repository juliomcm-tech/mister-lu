/* ---------- a cara do Lu: capacete de futebol americano, preto e branco, num medalhão de vidro ---------- */
function luFace(mood) {
  const id = 'lf' + Math.random().toString(36).slice(2, 7);
  const brow = mood === 'win' ? 'M62 50q7-6 15-2M86 48q7-3 13 2' : mood === 'sad' ? 'M62 47q7 4 15 6M86 52q7-2 13-6' : 'M62 49q7-3 15 0M86 49q6-3 13 0';
  return `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mister Lu">
  <defs>
    <radialGradient id="${id}b" cx="35%" cy="25%" r="80%"><stop offset="0" stop-color="#ffffff"/><stop offset=".6" stop-color="#e6e6e6"/><stop offset="1" stop-color="#9a9a9a"/></radialGradient>
    <linearGradient id="${id}h" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3a3a3a"/><stop offset=".55" stop-color="#121212"/><stop offset="1" stop-color="#000"/></linearGradient>
  </defs>
  <circle cx="64" cy="64" r="60" fill="url(#${id}b)" stroke="#fff" stroke-width="4"/>
  <circle cx="64" cy="64" r="53" fill="none" stroke="#111" stroke-opacity=".22" stroke-width="1.5" stroke-dasharray="3 5"/>
  <!-- capacete -->
  <path d="M22 70c-2-28 18-48 44-48 24 0 40 16 40 38 0 8-2 14-5 19H58l-6 12H34c-8-4-11-11-12-21z" fill="url(#${id}h)" stroke="#fff" stroke-width="2.5"/>
  <path d="M38 38c12-10 30-14 46-10" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round" opacity=".9"/>
  <path d="M38 38c12-10 30-14 46-10" stroke="#111" stroke-width="2" fill="none" stroke-linecap="round"/>
  <circle cx="44" cy="66" r="7" fill="#222" stroke="#fff" stroke-width="2"/>
  <!-- cara -->
  <path d="M56 44h46c3 0 5 3 5 6v22c0 6-4 9-9 9H58z" fill="#f4f4f4"/>
  <ellipse cx="70" cy="58" rx="6" ry="5" fill="#111"/><ellipse cx="93" cy="58" rx="5.5" ry="5" fill="#111"/>
  ${mood === 'sad' ? '<path d="M66 59q4-3 8 0M89 59q4-3 8 0" stroke="#ddd" stroke-width="2" fill="none"/>' : '<circle cx="72" cy="56.5" r="2" fill="#fff"/><circle cx="95" cy="56.5" r="2" fill="#fff"/>'}
  <path d="${brow}" stroke="#111" stroke-width="3.2" fill="none" stroke-linecap="round"/>
  ${mood === 'win' ? '<path d="M70 72q12 8 24 0" stroke="#111" stroke-width="3" fill="none" stroke-linecap="round"/>' : mood === 'sad' ? '<path d="M72 76q10-6 20 0" stroke="#111" stroke-width="3" fill="none" stroke-linecap="round"/>' : '<path d="M73 74h18" stroke="#111" stroke-width="3" stroke-linecap="round"/>'}
  <!-- grade -->
  <path d="M54 66h56M54 80h52M62 64v26M80 66v24M98 66v20M54 66q-2 14 6 26" stroke="#888" stroke-width="3.2" fill="none" stroke-linecap="round"/>
  <path d="M54 66h56M54 80h52" stroke="#fff" stroke-width="1" fill="none" opacity=".6"/>
  ${mood === 'win' ? '<path d="M104 18l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" fill="#fff" stroke="#111" stroke-width="1.6"/>' : ''}
  ${mood === 'sad' ? '<path d="M108 38q-5 8 0 11 5-3 0-11z" fill="#bbb" stroke="#fff" stroke-width="1"/>' : ''}
  <!-- bola -->
  <g transform="rotate(-30 30 104)"><ellipse cx="30" cy="104" rx="14" ry="8" fill="#111" stroke="#fff" stroke-width="2"/><path d="M22 104h16M26 101v6M30 101v6M34 101v6" stroke="#fff" stroke-width="1.6"/></g>
</svg>`;
}

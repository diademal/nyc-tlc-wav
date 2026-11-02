// "How it is made" video player inside the 3D page (same player as the frame bending plans)
(function(){
  const f = location.pathname.split('/').pop().toLowerCase(), q = new URLSearchParams(location.search);
  let part = null, m;
  if ((m = f.match(/^fr(\d+)-3d\.html$/))) part = 'FR-' + m[1];
  else if ((m = f.match(/^ff3-(\d)-3d\.html$/))) part = 'FF3-' + m[1];
  else if ((m = f.match(/^ff(\d+)-3d\.html$/))) part = 'FF-' + m[1];
  else if (f === 'ra3d.html' || f === 'st3d.html') { part = (q.get('p') || 'ALL').toUpperCase(); if (part === 'ALL') part = f === 'ra3d.html' ? 'RA' : null; }
  else if (f === 'ra-asm.html') part = 'RA';
  if (!part) return;
  const V = {};
  ['1','2','3','4','5','7','8','10'].forEach(n => V['FR-'+n] = 'fr'+n+'-bend.html');
  ['FR-6','FR-9','FF-4','RA-1','RA-2','RA-3','RA-4','RA-5','RA-6','RA-7','RA-8','ST-1','ST-2','ST-3'].forEach(k => V[k] = 'bend.html?p='+k);
  V['FF-1'] = 'ff1-bend.html'; V['RA-3L'] = 'bend.html?p=RA-3L'; V['RA-9'] = 'bend.html?p=RA-9'; ['FF-3','FF3-1','FF3-2'].forEach(k => V[k] = 'ff3-bend.html'); V['RA'] = 'ra-video.html';
  const src = V[part]; if (!src) return;
  const T = {en: part === 'RA' ? 'Assembly video — how the ramp goes together' : 'Video — how the part is made', ru: part === 'RA' ? 'Видео сборки — как собирается рампа' : 'Видео — как делается деталь'};
  const lang = () => { try { return localStorage.getItem('fr4-lang') || 'en'; } catch(e) { return 'en'; } };
  const sec = document.createElement('section');
  sec.style.cssText = 'background:var(--panel,#f6f8f9);border:1px solid var(--line,#c9d1d7);border-radius:8px;padding:10px 12px;display:flex;flex-direction:column;gap:8px';
  const h = document.createElement('h2'); h.style.cssText = 'margin:0;font-size:17px;font-weight:700';
  const fr = document.createElement('iframe'); fr.loading = 'lazy'; fr.title = 'video';
  fr.style.cssText = 'width:100%;height:' + (innerWidth < 820 ? 1100 : 720) + 'px;border:0;border-radius:6px;background:transparent';
  const url = () => src + (src.includes('?') ? '&' : '?') + 'embed=1&v=' + (q.get('v') || '') + '&l=' + lang();
  function upd(){ h.textContent = T[lang()] || T.en; const u = url(); if (fr.dataset.u !== u) { fr.dataset.u = u; fr.src = u; } }
  sec.append(h, fr);
  const viewer = document.getElementById('viewer');
  let el = viewer; while (el.parentElement && el.parentElement !== document.body && !el.parentElement.classList.contains('wrap')) el = el.parentElement;
  let after = el; const nx = el.nextElementSibling; if (nx && (nx.classList.contains('bar') || nx.querySelector('button'))) after = nx;
  after.insertAdjacentElement('afterend', sec);
  upd();
  ['langEn','langRu'].forEach(id => { const b = document.getElementById(id); if (b) b.addEventListener('click', () => setTimeout(upd, 50)); });
})();

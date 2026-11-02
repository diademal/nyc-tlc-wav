// site-wide: (1) material badge in the page language, (2) 3D dimension labels never sit on top of each other
(function(){
  const lang = () => { try { return localStorage.getItem('fr4-lang') || 'en'; } catch(e) { return 'en'; } };
  function badge(){ const b = document.getElementById('matBadge'); if (!b) return;
    if (!b.dataset.src || (b.dataset.out && b.innerHTML !== b.dataset.out)) b.dataset.src = b.innerHTML;
    let h = b.dataset.src; const ru = lang() === 'ru';
    h = h.replace(/Металл\s*\/\s*Material:/, ru ? 'Металл:' : 'Material:').replace(/;\s*трубы\s*\/\s*tubes:/, ru ? '; трубы:' : '; tubes:');
    if (ru) h = h.replace(/Aluminum/g,'Алюминий').replace(/HR steel/g,'Сталь г/к').replace(/Stainless 304, brushed/g,'Нержавейка 304, шлифованная').replace(/steel tube/g,'стальная труба').replace(/square tube/g,'квадратная труба').replace(/\bwall\b/g,'стенка').replace(/(\d) mm\)/g,'$1 мм)');
    if (b.innerHTML !== h) b.innerHTML = h; b.dataset.out = h; }
  // declutter: leaf label elements inside #labels (CSS2D); shift overlapping ones down in screen space
  function leafs(){ const root = document.getElementById('labels'); if (!root) return [];
    return [...root.querySelectorAll('*')].filter(e => !e.children.length && e.textContent.trim() && e.offsetParent !== null); }
  function declutter(){ const els = leafs(); if (!els.length) return;
    els.forEach(e => { e.style.marginTop = '0px'; });
    const R = els.map(e => ({e, r: e.getBoundingClientRect()})).filter(o => o.r.width > 0).sort((a, b) => a.r.top - b.r.top || a.r.left - b.r.left);
    const placed = [];
    for (const o of R) { let dy = 0, r = o.r;
      for (let k = 0; k < 8; k++) { const hit = placed.find(p => r.left < p.right - 1 && r.right > p.left + 1 && r.top + dy < p.bottom - 1 && r.bottom + dy > p.top + 1);
        if (!hit) break; dy = hit.bottom - r.top + 1; }
      if (dy) o.e.style.marginTop = dy + 'px';
      placed.push({left: r.left, right: r.right, top: r.top + dy, bottom: r.bottom + dy}); } }
  let busy = false;
  function tick(){ if (busy) return; busy = true; try { badge(); declutter(); } catch(e) {} busy = false; }
  setInterval(tick, 400); window.addEventListener('load', tick);
  document.addEventListener('click', e => { if (e.target.closest('#langEn,#langRu,.lang button')) setTimeout(tick, 60); });
})();

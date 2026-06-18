// ── scroll-spy: highlight the current section in the sidebar ─────────────────
const links = [...document.querySelectorAll('.toc a')];
const map = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
const spy = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(a => a.classList.remove('on'));
      const a = map.get(e.target.id);
      if (a) a.classList.add('on');
    }
  });
}, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });
document.querySelectorAll('section.step').forEach(s => spy.observe(s));

// ── figure lightbox ─────────────────────────────────────────────────────────
const lb = document.getElementById('lb'), lbimg = document.getElementById('lbimg');
document.querySelectorAll('figure.fig img').forEach(img => {
  img.addEventListener('click', () => { lbimg.src = img.src; lb.classList.add('on'); });
});
lb.addEventListener('click', () => { lb.classList.remove('on'); lbimg.src = ''; });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { lb.classList.remove('on'); lbimg.src=''; } });

// ── play videos only while visible (muted loop), pause otherwise ─────────────
const vids = [...document.querySelectorAll('video')];
vids.forEach(v => { v.muted = true; v.loop = true; v.playsInline = true; });
const veye = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    const v = e.target;
    if (e.isIntersecting) { v.play().catch(()=>{}); }
    else { v.pause(); }
  });
}, { threshold: 0.35 });
vids.forEach(v => veye.observe(v));

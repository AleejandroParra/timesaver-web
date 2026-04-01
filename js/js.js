// NAV
const nav = document.getElementById('nav');
const hamburger = document.getElementById('nav-hamburger');
const mobileMenu = document.getElementById('mobile-menu');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
  updateActive();
}, { passive: true });
nav.classList.toggle('scrolled', window.scrollY > 20);

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
}));

function updateActive() {
  let cur = '';
  document.querySelectorAll('section[id]').forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) cur = s.id;
  });
  document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + cur));
}

// REVEAL ANIMATIONS
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); revObs.unobserve(e.target); } });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal, .reveal-up').forEach(el => revObs.observe(el));

// COUNTER ANIMATION
function countUp(el, target, dur = 1400) {
  const start = performance.now();
  const tick = now => {
    const p = Math.min((now - start) / dur, 1);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(e * target);
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const cntObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      countUp(e.target, parseInt(e.target.dataset.count, 10));
      cntObs.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => cntObs.observe(el));

// CHATBOT DEMO ANIMATION
(function(){
  const section = document.querySelector('.chatbot-demo');
  if(!section) return;
  let done = false;
  const obs = new IntersectionObserver(entries => {
    if(entries[0].isIntersecting && !done){
      done = true; obs.disconnect();
      const msgs = section.querySelectorAll('.wa-msg');
      const typing = document.getElementById('wa-typing');
      const result = document.getElementById('cd-result');
      setTimeout(() => msgs[0].classList.add('visible'), 400);
      setTimeout(() => { typing.style.display='flex'; }, 1100);
      setTimeout(() => { typing.style.display='none'; msgs[1].classList.add('visible'); }, 2300);
      setTimeout(() => msgs[2].classList.add('visible'), 3500);
      setTimeout(() => msgs[3].classList.add('visible'), 4500);
      setTimeout(() => result.classList.add('visible'), 5400);
    }
  }, {threshold:0.3});
  obs.observe(section);
})();

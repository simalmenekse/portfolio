'use strict';

/* ──────────────────────────────────────────────
   NAVBAR: scroll effect + active section
────────────────────────────────────────────── */
const navbar   = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  },
  { rootMargin: `-${68}px 0px -60% 0px`, threshold: 0 }
);
sections.forEach((s) => navObserver.observe(s));

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
  document.getElementById('back-to-top').classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

/* ──────────────────────────────────────────────
   HAMBURGER MENU
────────────────────────────────────────────── */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
  mobileMenu.setAttribute('aria-hidden', !open);
});

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
    mobileMenu.setAttribute('aria-hidden', true);
  });
});

/* ──────────────────────────────────────────────
   REVEAL ON SCROLL
────────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

/* ──────────────────────────────────────────────
   ANIMATED STAT COUNTERS
────────────────────────────────────────────── */
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function animateCounter(el) {
  const target   = parseFloat(el.dataset.target);
  const decimals = parseInt(el.dataset.decimals ?? 0, 10);
  if (prefersReduced) { el.textContent = target.toFixed(decimals); return; }

  const duration = 1600;
  const start    = performance.now();
  const from     = 0;

  function tick(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease     = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
    const value    = from + (target - from) * ease;
    el.textContent = value.toFixed(decimals);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);
document.querySelectorAll('.stat-number').forEach((el) => statObserver.observe(el));

/* ──────────────────────────────────────────────
   PROFILE PHOTO — show real image if it loads
────────────────────────────────────────────── */
const profileImg      = document.getElementById('profile-img');
const photoPlaceholder = document.getElementById('photo-placeholder');

if (profileImg) {
  profileImg.addEventListener('load', () => {
    profileImg.classList.add('loaded');
    if (photoPlaceholder) photoPlaceholder.style.display = 'none';
  });
  profileImg.addEventListener('error', () => {
    profileImg.style.display = 'none';
  });
  if (profileImg.complete && profileImg.naturalWidth > 0) {
    profileImg.classList.add('loaded');
    if (photoPlaceholder) photoPlaceholder.style.display = 'none';
  }
}

/* ──────────────────────────────────────────────
   CONTACT FORM — mailto fallback
────────────────────────────────────────────── */
const form       = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name    = form.name.value.trim();
  const email   = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    setStatus('Please fill in all fields.', 'error');
    return;
  }

  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
  const body    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  const mailto  = `mailto:aysesimalmenekse@gmail.com?subject=${subject}&body=${body}`;

  window.location.href = mailto;

  setStatus('Opening your email client…', 'success');
  setTimeout(() => { form.reset(); setStatus(''); }, 3000);
});

function setStatus(msg, type = '') {
  formStatus.textContent = msg;
  formStatus.className   = `form-note${type ? ` ${type}` : ''}`;
}

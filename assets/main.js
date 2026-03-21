document.addEventListener('DOMContentLoaded', () => {
  // --- Dark / Light mode toggle handler ---
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      root.classList.toggle('dark');
      localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
    });
  }

  // --- Header glassmorphism on scroll ---
  const headerBg = document.getElementById('header-bg');
  if (headerBg) {
    window.addEventListener('scroll', () => {
      headerBg.style.opacity = window.scrollY > 10 ? '1' : '0';
    }, { passive: true });
  }

  // --- Mobile menu ---
  const mobileBtn = document.getElementById('mobile-btn');
  const mobileNav = document.getElementById('mobile-nav');
  if (mobileBtn && mobileNav) {
    mobileBtn.addEventListener('click', () => {
      const open = !mobileNav.classList.contains('hidden');
      mobileNav.classList.toggle('hidden', open);
      mobileBtn.setAttribute('aria-expanded', String(!open));
    });
    mobileNav.querySelectorAll('a').forEach(l => l.addEventListener('click', () => {
      mobileNav.classList.add('hidden');
      mobileBtn.setAttribute('aria-expanded', 'false');
    }));
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href && href !== '#') {
        const t = document.querySelector(href);
        if (t) {
          e.preventDefault();
          t.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // --- Scroll reveal ---
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal, .reveal-scale').forEach(el => observer.observe(el));
  } else {
    // Fallback for older browsers
    document.querySelectorAll('.reveal, .reveal-scale').forEach(el => el.classList.add('visible'));
  }

  // --- Frosted glass header on scroll ---
  const siteHeader = document.getElementById('site-header');
  if (siteHeader) {
    window.addEventListener('scroll', () => {
      siteHeader.classList.toggle('header-scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // --- Projects tab switcher ---
  const tabs = document.querySelectorAll('[role="tab"].proj-tab');
  if (tabs.length > 0) {
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetId = tab.getAttribute('aria-controls');
        tabs.forEach(t => {
          const isActive = t === tab;
          t.setAttribute('aria-selected', String(isActive));
          if (isActive) {
            t.classList.add('bg-apple-white', 'dark:bg-apple-darkbg', 'text-apple-text', 'dark:text-white', 'shadow-sm', 'border', 'border-black/6', 'dark:border-white/10');
            t.classList.remove('text-apple-secondary', 'dark:text-apple-darksec');
          } else {
            t.classList.remove('bg-apple-white', 'dark:bg-apple-darkbg', 'text-apple-text', 'dark:text-white', 'shadow-sm', 'border', 'border-black/6', 'dark:border-white/10');
            t.classList.add('text-apple-secondary', 'dark:text-apple-darksec');
          }
          const panel = document.getElementById(t.getAttribute('aria-controls'));
          if (panel) panel.classList.toggle('hidden', !isActive);
        });
        // Re-trigger reveal on newly visible cards
        if ('IntersectionObserver' in window) {
          const newObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                newObserver.unobserve(entry.target);
              }
            });
          }, { threshold: 0.12 });
          document.querySelectorAll(`#${targetId} .reveal`).forEach(el => {
            el.classList.remove('visible'); // reset first to force animation
            // slight delay to ensure browser registers the removed class
            setTimeout(() => newObserver.observe(el), 10);
          });
        }
      });
    });
  }

  // --- Expériences scroll arrows ---
  const track = document.getElementById('exp-scroll');
  const prev = document.getElementById('exp-prev');
  const next = document.getElementById('exp-next');
  if (track && prev && next) {
    const step = () => {
      const card = track.querySelector('.exp-card');
      return card ? card.offsetWidth + 20 : 340;
    };
    next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
    prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  }

  // --- Email Obfuscation ---
  document.querySelectorAll('.email-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'mai' + 'lto:' + 'doryan.schouver' + '@' + 'gmail.com';
    });
  });
});

(function () {
  const root = document.documentElement;
  const stored = localStorage.getItem('theme');
  const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (stored === 'dark' || (!stored && prefers)) {
    root.classList.add('dark');
  }
})();

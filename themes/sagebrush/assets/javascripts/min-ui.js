// Fog & Pine theme UI: email obfuscation, mobile nav toggle, theme switcher.

// Email obfuscation — build the address from data attributes on click.
document.querySelectorAll('.lm-email-link').forEach(function (el) {
  el.addEventListener('click', function () {
    window.location.href = 'mailto:' + el.dataset.name + '@' + el.dataset.domain;
  });
});

// Mobile hamburger nav.
(function () {
  var toggle = document.querySelector('.lm-nav-toggle');
  var nav = document.getElementById('lmNav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('lm-nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('lm-nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// Theme switcher: cycle auto -> light -> dark and persist.
(function () {
  var root = document.documentElement;
  var btn = document.querySelector('.lm-theme');
  if (!btn) return;
  var order = ['auto', 'light', 'dark'];
  btn.addEventListener('click', function () {
    var cur = root.getAttribute('data-mode') || 'auto';
    var next = order[(order.indexOf(cur) + 1) % order.length];
    root.setAttribute('data-mode', next);
    if (next === 'auto') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', next);
    try { localStorage.setItem('lm-theme-mode', next); } catch (e) {}
  });
})();

/* Ronda · aplica el tema elegido antes de pintar (evita el parpadeo) */
(function () {
  var r = document.documentElement;
  r.classList.add('js');
  try {
    var t = localStorage.getItem('ronda-tema');
    if (t === 'claro' || t === 'oscuro') r.setAttribute('data-tema', t);
  } catch (e) {}
  var reducido = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reducido && 'IntersectionObserver' in window) r.classList.add('js-revelar');
})();

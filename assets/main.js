// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('nav-toggle');
  var menu = document.getElementById('nav-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', function () {
    var isOpen = menu.classList.toggle('hidden');
    btn.setAttribute('aria-expanded', String(!isOpen));
  });
});

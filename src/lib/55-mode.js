/* ============================================================
   PORTAL MODE — client vs dev
   The deck serves two audiences from one build. Mode decides which
   navigation is shown and which chrome the page carries; it never hides
   a route, so any link stays shareable and openable.
   ============================================================ */

const MODES = ['client', 'dev'];

let CURRENT_MODE = (() => {
  try {
    const saved = localStorage.getItem('emenda_mode');
    return MODES.includes(saved) ? saved : 'client';
  } catch (e) {
    return 'client';
  }
})();

/* A dev route always implies dev mode, so a link pasted into chat opens with the
   right navigation even when the recipient has never switched modes. */
const isDevRoute = (route) => route === 'dev' || route.startsWith('dev/');

function applyMode() {
  document.body.classList.toggle('mode-dev', CURRENT_MODE === 'dev');
  document.body.classList.toggle('mode-client', CURRENT_MODE === 'client');
  document.querySelectorAll('.mode-btn').forEach((btn) => {
    const active = btn.dataset.mode === CURRENT_MODE;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
}

function setMode(mode, { navigate = true } = {}) {
  if (!MODES.includes(mode)) return;
  const changed = mode !== CURRENT_MODE;
  CURRENT_MODE = mode;
  try { localStorage.setItem('emenda_mode', mode); } catch (e) { /* private browsing */ }
  applyMode();
  closeMobile();
  if (!navigate || !changed) return;
  /* Land on the home of the mode being entered rather than leaving the reader on a
     page that belongs to the other audience. */
  window.location.hash = mode === 'dev' ? '#/dev' : '#/home';
}

/* Keep mode in step with the route on every render, including first load and
   back/forward navigation. */
function syncModeToRoute() {
  const wanted = isDevRoute(currentRoute()) ? 'dev' : CURRENT_MODE;
  if (wanted !== CURRENT_MODE) {
    CURRENT_MODE = wanted;
    try { localStorage.setItem('emenda_mode', wanted); } catch (e) { /* private browsing */ }
  }
  applyMode();
}

const _renderBeforeMode = render;
render = function () {
  syncModeToRoute();
  return _renderBeforeMode.apply(this, arguments);
};

document.addEventListener('click', (e) => {
  const b = e.target.closest('.mode-btn');
  if (!b) return;
  e.preventDefault();
  e.stopPropagation();
  setMode(b.dataset.mode);
});

applyMode();

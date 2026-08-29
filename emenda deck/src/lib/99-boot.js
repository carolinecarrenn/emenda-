/* boot */
try {
  if (!window.location.hash || window.location.hash === '#' || window.location.hash === '#/') {
    history.replaceState(null, '', '#/home');
  }
} catch (e) {
  /* file:// fallback: currentPage() already defaults to home */
}
render();
applyLanguage(document.body);

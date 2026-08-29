/* ============================================================
   BEHAVIORS — delegated so they survive every re-render
   ============================================================ */
document.addEventListener('click',e=>{
  const q=e.target.closest('.acc-q');
  if(q){ e.preventDefault(); q.parentElement.classList.toggle('open'); return; }

  const tb=e.target.closest('.tabbtn');
  if(tb){
    e.preventDefault();
    const bar=tb.closest('.tabbar');
    const scope=bar.parentElement;
    bar.querySelectorAll('.tabbtn').forEach(b=>b.classList.toggle('on',b===tb));
    scope.querySelectorAll('.tabpane').forEach(p=>p.classList.toggle('on',p.dataset.tab===tb.dataset.tab));
  }
});

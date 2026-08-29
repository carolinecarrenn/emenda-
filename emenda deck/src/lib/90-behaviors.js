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

document.addEventListener('submit',e=>{
  const f=e.target.closest('#demoForm');
  if(!f) return;
  e.preventDefault();
  const g=n=>{const el=f.elements[n];return el?String(el.value||'').trim():'';};
  const lines=[
    'Name: '+g('name'),
    'Organization: '+g('org'),
    'Email: '+g('email'),
    'Industry: '+g('industry'),
    'Foreign workers on site: '+g('size'),
    'Preferred language: '+g('lang'),
    '',
    'Which part of the day breaks first:',
    g('problem'),
    '',
    '— sent from the EMENDA product microsite'
  ];
  const subject='EMENDA demo request — '+(g('org')||'(organization)');
  window.location.href='mailto:hello@emenda.tech?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(lines.join('\n'));
});

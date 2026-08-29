/* ============================================================
   ROUTES
   ============================================================ */
const V16_ROUTES={
  'pillars':'pillars',
  'build-evidence':'buildEvidence',
  'deployment':'deployment',
  'comparison':'comparison',
  'roadmap':'roadmap'
};
PILLARS.forEach(p=>{ V16_ROUTES['pillar/'+p.slug]='pillar_'+p.slug; });
INDUSTRIES.forEach(x=>{ V16_ROUTES['industry/'+x.slug]='industry_'+x.slug; });

Object.assign(ROUTE_TO_PAGE,V16_ROUTES);
Object.keys(V16_ROUTES).forEach(r=>{ PAGE_TO_ROUTE[V16_ROUTES[r]]=r; });

/* nav family highlighting for the new pages */
Object.assign(V16_NAV_FAMILY,{
  pillars:'product', buildEvidence:'resources', deployment:'platform',
  comparison:'company', roadmap:'resources'
});
PILLARS.forEach(p=>{ V16_NAV_FAMILY['pillar_'+p.slug]='product'; });
INDUSTRIES.forEach(x=>{ V16_NAV_FAMILY['industry_'+x.slug]='industries'; });

/* extend the existing nav highlighter rather than duplicating its map */
const _setActiveNavBase=setActiveNav;
setActiveNav=function(page){
  const fam=V16_NAV_FAMILY[page];
  if(!fam) return _setActiveNavBase(page);
  document.querySelectorAll('.nav-link[data-page]').forEach(a=>{
    a.classList.toggle('active',a.dataset.page===fam);
  });
};

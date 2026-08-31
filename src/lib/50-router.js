/* ============================================================ SINGLE-FILE, MULTI-VIEW ROUTER ============================================================ */
const app=document.getElementById('app');

const ROUTE_TO_PAGE={
  '':'home',
  'home':'home',
  'product':'product',
  'feature-catalog':'featureCatalog',
  'follow-up-lifecycle':'followupLifecycle',
  'modules':'modulesDetail',
  'solutions':'solutions',
  'for-workers':'solutionsWorker',
  'for-managers':'solutionsManager',
  'for-organizations':'solutionsOrg',
  'industries':'industries',
  'platform':'platform',
  'emenda-assistant':'platformAssistant',
  'architecture':'platformArchitecture',
  'integration-data':'integrationData',
  'security-privacy':'platformSecurity',
  'resources':'resources',
  'implementation':'implementation',
  'faq':'faq',
  'company':'company',
  'business-model':'businessModel',
  'market-positioning':'marketPositioning'
};

const PAGE_TO_ROUTE={
  home:'home',
  product:'product',
  productOverview:'product',
  featureCatalog:'feature-catalog',
  followupLifecycle:'follow-up-lifecycle',
  modulesDetail:'modules',
  solutions:'solutions',
  solutionsWorker:'for-workers',
  solutionsManager:'for-managers',
  solutionsOrg:'for-organizations',
  industries:'industries',
  platform:'platform',
  platformAssistant:'emenda-assistant',
  platformArchitecture:'architecture',
  integrationData:'integration-data',
  platformSecurity:'security-privacy',
  resources:'resources',
  implementation:'implementation',
  faq:'faq',
  company:'company',
  businessModel:'business-model',
  marketPositioning:'market-positioning'
};

function currentRoute(){
  return (window.location.hash||'#/home').replace(/^#\/?/,'').split('?')[0] || 'home';
}

function currentPage(){
  return ROUTE_TO_PAGE[currentRoute()] || 'home';
}

function goPage(page){
  const route=PAGE_TO_ROUTE[page]||'home';
  const target='#/'+route;
  if(window.location.hash===target){
    render();
  }else{
    window.location.hash=target;
  }
}

function setActiveNav(page){
  const family=({
    productOverview:'product',
    featureCatalog:'product',
    followupLifecycle:'product',
    modulesDetail:'product',
    solutionsWorker:'solutions',
    solutionsManager:'solutions',
    solutionsOrg:'solutions',
    platformAssistant:'platform',
    platformArchitecture:'platform',
    integrationData:'platform',
    platformSecurity:'platform',
    implementation:'resources',
    faq:'resources',
    businessModel:'company',
    marketPositioning:'company'
  })[page]||page;
  document.querySelectorAll('.nav-link[data-page]').forEach(a=>{
    a.classList.toggle('active',a.dataset.page===family);
  });
}

function render(){
  const page=currentPage();
  try{
    app.innerHTML=(PAGES[page]||PAGES.home)();
    setActiveNav(page);
    window.scrollTo({top:0,behavior:'instant'});
    attachPageBehaviors(page);
    observeReveals();
    applyLanguage(document.body);
  }catch(err){
    console.error('EMENDA page render failed:',err);
    app.innerHTML=`<section class="phero"><div class="wrap">
      <span class="eyebrow">EMENDA</span>
      <h1>Page could not be rendered.</h1>
      <p>Please reopen Home. The error has been logged in the browser console.</p>
      <div class="hero-cta"><a class="btn btn-p btn-lg" href="#/home">Back to Home</a></div>
    </div></section>`;
  }
}

window.addEventListener('hashchange',()=>{
  render();
  closeMobile();
});

/* Buttons still open different page views; only one view exists on screen at a time. */
document.addEventListener('click',e=>{
  const t=e.target.closest('[data-page]');
  if(t){
    const page=t.dataset.page;
    if(PAGE_TO_ROUTE[page]){
      e.preventDefault();
      goPage(page);
      closeMobile();
      return;
    }
  }

  const n=e.target.closest('[data-nav]');
  if(n){
    const href=n.getAttribute('href')||'';
    if(href.startsWith('#/')) closeMobile();
  }
});

/* ============================================================ PER-PAGE BEHAVIORS ============================================================ */
function attachPageBehaviors(page){
  // ecosystem diagram (home)
  const eco=document.getElementById('ecoHome');
  if(eco){
    const sats=[['Worker','Clarity & support'],['Manager','Visibility & decisions'],['Company Admin','Operational control & evidence'],['Super Admin','Platform governance'],['Knowledge','Operational data'],['AI Assistance','Context & action']];
    const R=40;
    const pts=sats.map((s,i)=>{const a=(-90+i*60)*Math.PI/180;return{x:50+R*Math.cos(a),y:50+R*Math.sin(a)};});
    eco.innerHTML=`<svg class="lines" viewBox="0 0 100 100" preserveAspectRatio="none">${pts.map(p=>`<line x1="50" y1="50" x2="${p.x}" y2="${p.y}"/>`).join('')}</svg>
      <div class="hub"><b>EMENDA</b><span>connected layer</span></div>
      ${sats.map((s,i)=>`<div class="sat" style="left:${pts[i].x}%;top:${pts[i].y}%"><b>${s[0]}</b><span>${s[1]}</span></div>`).join('')}`;
  }
  // role tabs (solutions)
  const tabs=document.getElementById('roleTabs');
  if(tabs){
    tabs.querySelectorAll('.role-tab').forEach(btn=>btn.addEventListener('click',()=>{
      tabs.querySelectorAll('.role-tab').forEach(b=>b.classList.remove('on'));btn.classList.add('on');
      document.querySelectorAll('.role-panel').forEach(p=>p.classList.toggle('on',p.dataset.role===btn.dataset.role));
    }));
  }
  // faq
  document.querySelectorAll('.faq-q').forEach(q=>q.addEventListener('click',()=>q.parentElement.classList.toggle('open')));
}

/* ============================================================ REVEAL ON SCROLL ============================================================ */
let io;
function observeReveals(){
  if(io)io.disconnect();
  const els=document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('in'));return;}
  io=new IntersectionObserver(ent=>ent.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}}),{threshold:.12,rootMargin:'0px 0px -40px 0px'});
  els.forEach(e=>io.observe(e));
}

/* ============================================================ MOBILE MENU ============================================================ */
const mm=document.getElementById('mobileMenu');
document.getElementById('burger').addEventListener('click',()=>mm.classList.toggle('open'));
function closeMobile(){mm.classList.remove('open');}

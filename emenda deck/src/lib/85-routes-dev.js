/* ============================================================
   DEV ROUTES
   Registered exactly like the client routes — mode changes which
   navigation is shown, never which routes resolve.
   ============================================================ */
const DEV_ROUTES = {
  'dev':              'devOverview',
  'dev/documents':    'devDocuments',
  'dev/requirements': 'devRequirements',
  'dev/frontend':     'devFrontend',
  'dev/parity':       'devParity',
  'dev/testing':      'devTesting',
  'dev/portal':       'devPortal',

  /* one page per source document, digested from the file itself */
  'dev/doc/feature-catalog':  'devDocFeatureCatalog',
  'dev/doc/mvp-requirements': 'devDocMvpRequirements',
  'dev/doc/ai-agent':         'devDocAiAgent',
  'dev/doc/business':         'devDocBusiness',
  'dev/doc/competition':      'devDocCompetition',
  'dev/doc/data-platform':    'devDocDataPlatform',
};

Object.assign(ROUTE_TO_PAGE, DEV_ROUTES);
Object.keys(DEV_ROUTES).forEach((r) => { PAGE_TO_ROUTE[DEV_ROUTES[r]] = r; });

/* Header highlighting: sub-pages light up the group they belong to. */
Object.assign(V16_NAV_FAMILY, {
  devOverview:     'devOverview',
  devDocuments:    'devDocuments',
  devRequirements: 'devDocuments',
  devFrontend:     'devFrontend',
  devParity:       'devFrontend',
  devTesting:      'devFrontend',
  devPortal:       'devPortal',

  devDocFeatureCatalog:  'devDocuments',
  devDocMvpRequirements: 'devDocuments',
  devDocAiAgent:         'devDocuments',
  devDocBusiness:        'devDocuments',
  devDocCompetition:     'devDocuments',
  devDocDataPlatform:    'devDocuments',
});

/* One-time: slice the monolithic index.html into src/ and emit the build manifest.
   Layered page definitions (V7 -> V16) are flattened into one definition per page,
   which is safe because every wrapper was a pure append: PAGES.x = () => _base() + `...`. */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

/* The original file is CRLF; normalise to LF so the split sources are clean text
   and a stray \r never survives as a blank line inside a flattened template. */
const SRC = readFileSync('_build/index.pre-refactor.html', 'utf8').split('\r\n').join('\n');
const L = SRC.split('\n');
const slice = (from, to) => L.slice(from - 1, to).join('\n').replace(/\s+$/, '');
const put = (rel, body) => {
  const p = join('src', rel);
  mkdirSync(dirname(p), { recursive: true });
  writeFileSync(p, body.replace(/\s+$/, '') + '\n', 'utf8');
  return rel;
};

/* ---------------- styles ---------------- */
const STYLES = [
  ['00-tokens-base.css',        12,  35],
  ['10-nav.css',                36,  77],
  ['20-page-system.css',        78, 102],
  ['30-hero.css',              103, 150],
  ['40-grids-cards.css',       151, 323],
  ['50-mobile-showcase.css',   324, 365],
  ['60-responsive.css',        366, 398],
  ['70-deep-content.css',      399, 445],
  ['80-figma-preview.css',     446, 466],
  ['81-figma-screens.css',     467, 581],
  ['90-information-arch.css',  582, 644],
  ['91-detail-system.css',     645, 664],
];
for (const [f, a, b] of STYLES) put('styles/' + f, slice(a, b));
put('styles/92-figma-direct-fix.css', slice(668, 678));
put('styles/93-deep-pages.css',       slice(682, 941));

/* ---------------- shell ---------------- */
put('shell/00-head.html',        slice(1, 10));
put('shell/10-nav.html',         slice(946, 1023));
put('shell/20-mobile-menu.html', slice(1025, 1046));
put('shell/30-main.html',        slice(1048, 1048));
put('shell/40-footer.html',      slice(1050, 1080));

/* ---------------- lib ---------------- */
const LIB = [
  ['00-icons.js',           1083, 1109],
  ['10-fragments.js',       1110, 1142],
  ['20-pages-init.js',      1143, 1152],
  ['40-i18n-engine.js',     2885, 3312],
  ['50-router.js',          3313, 3491],
  ['60-v16-helpers.js',     3492, 3507],
  ['61-data-pillars.js',    3508, 3813],
  ['62-data-industries.js', 4184, 4258],
  ['63-data-showcase.js',   4424, 4488],
  ['64-worker-sections.js', 3900, 3911],
  ['80-routes.js',          4600, 4634],
  ['90-behaviors.js',       4635, 4673],
  ['99-boot.js',            4674, 4683],
];
for (const [f, a, b] of LIB) put('lib/' + f, slice(a, b));

/* copy helpers: L / statusBadge / detailedCTA live in the V8 block, sourcePanel in V15 */
put('lib/30-copy-helpers.js', slice(2018, 2032) + '\n\n' + slice(2761, 2763));

/* page generators: pillar + industry detail factories and the pre-render data rebuild */
put('lib/70-page-generators.js',
  slice(3849, 3899) + '\n\n' + slice(4259, 4302) + '\n\n' + slice(4489, 4497));

/* ---------------- pages: flatten the layer chain ---------------- */
const ANCHORS = [1154,1324,1325,1402,1403,1435,1436,1459,1460,1527,1528,1562,1618,1652,1653,1686,
  1720,1751,1752,1780,1877,1906,1907,1955,1956,2008,2009,2018,2033,2034,2035,2080,2081,2082,2113,
  2114,2115,2150,2151,2152,2177,2178,2179,2206,2207,2208,2235,2236,2237,2262,2263,2264,2287,2288,
  2289,2315,2316,2317,2352,2353,2354,2381,2382,2383,2405,2406,2407,2440,2441,2488,2489,2490,2498,
  2499,2551,2594,2631,2677,2725,2748,2749,2761,2762,2764,2765,2779,2780,2812,2813,2835,2836,2858,
  2859,2871,2872,2885,3814,3815,3849,3900,3903,3912,4024,4027,4099,4102,4184,4303,4306,4358,4361,
  4424,4499,4500,4600];

/* start line -> end line, ending just before the next top-level construct */
const endOf = (start) => {
  const next = ANCHORS.find(a => a > start);
  return (next ?? 4684) - 1;
};

/* Strip "PAGES.x=()=>`" or "PAGES.x=()=>_base()+`" from the head of a chunk and the
   closing backtick-semicolon from its tail, leaving only the template body. */
const HEAD = /^PAGES\.\w+\s*=\s*\(\)\s*=>\s*(_\w+\(\)\s*\+\s*)?`/;
const bodyOf = (start) => {
  const raw = slice(start, endOf(start)).split('\n');
  const i = raw.findIndex((l) => HEAD.test(l));
  if (i === -1) throw new Error('no page definition at line ' + start);
  raw[i] = raw[i].replace(HEAD, '');
  const out = raw.slice(i);
  let last = out.length - 1;
  while (last > 0 && out[last].trim() === '') last--;
  if (!/`;\s*$/.test(out[last])) throw new Error('unterminated template at line ' + start);
  out[last] = out[last].replace(/`;\s*$/, '');
  /* Drop only the newline that followed the opening backtick — a layer that began
     with a deliberate blank line must keep it, or its markup shifts by a character. */
  return out.slice(0, last + 1).join('\n').replace(/^\n/, '').replace(/\s+$/, '');
};

/* name -> route, file, layer start lines.  Dead definitions are simply absent:
   productOverview (1528) and demo (2009) are unroutable, company (1956) is fully
   replaced at 2441, and the home patch at 2490 is a no-op whose two regexes match
   nothing in the generated markup. */
const PAGES = [
  ['home',                 'home',                [1154, 2035, 2749, 2765, 4500]],
  ['product',              'product',             [1325, 2082, 2780]],
  ['solutions',            'solutions',           [1403, 2872]],
  ['industries',           'industries',          [1436, 2264]],
  ['platform',             'platform',            [1460, 2289]],
  ['followupLifecycle',    'follow-up-lifecycle', [1562, 2115, 2836]],
  ['modulesDetail',        'modules',             [1618, 2152, 2859]],
  ['solutionsWorker',      'for-workers',         [1653, 2179]],
  ['solutionsManager',     'for-managers',        [1686, 2208]],
  ['solutionsOrg',         'for-organizations',   [1720, 2237]],
  ['platformAssistant',    'emenda-assistant',    [1752, 2317]],
  ['platformArchitecture', 'architecture',        [1780, 2354]],
  ['platformSecurity',     'security-privacy',    [1877, 2383]],
  ['resources',            'resources',           [1907, 2407]],
  ['company',              'company',             [2441]],
  ['featureCatalog',       'feature-catalog',     [2499, 2813]],
  ['integrationData',      'integration-data',    [2551]],
  ['implementation',       'implementation',      [2594]],
  ['businessModel',        'business-model',      [2631]],
  ['marketPositioning',    'market-positioning',  [2677]],
  ['faq',                  'faq',                 [2725]],
  ['pillars',              'pillars',             [3815]],
  ['buildEvidence',        'build-evidence',      [3912]],
  ['deployment',           'deployment',          [4027]],
  ['comparison',           'comparison',          [4102]],
  ['roadmap',              'roadmap',             [4306]],
  ['requestDemo',          'request-demo',        [4361]],
];

const pageFiles = [];
for (const [name, route, layers] of PAGES) {
  /* One newline between layers, matching what `_base() + "\n<section..."` produced,
     so the flattened page emits byte-identical markup to the original chain. */
  const merged = layers.map(bodyOf).join('\n');
  const plural = layers.length > 1 ? 's' : '';
  const header = `/* ${route}  —  PAGES.${name}\n   Merged from ${layers.length} original layer${plural} (line${plural} ${layers.join(', ')}). */`;
  pageFiles.push(put(`pages/client/${route}.js`, `${header}\nPAGES.${name}=()=>\`\n${merged}\`;`));
}

/* ---------------- manifest ---------------- */
const manifest = {
  styles: STYLES.map((s) => 'styles/' + s[0]),
  stylesTagged: [
    { id: 'figma-direct-image-fix', file: 'styles/92-figma-direct-fix.css' },
    { id: 'deep-pages',             file: 'styles/93-deep-pages.css' },
  ],
  shell: ['shell/10-nav.html', 'shell/20-mobile-menu.html', 'shell/30-main.html', 'shell/40-footer.html'],
  script: [
    'lib/00-icons.js', 'lib/10-fragments.js', 'lib/20-pages-init.js', 'lib/30-copy-helpers.js',
    'lib/40-i18n-engine.js', 'lib/50-router.js', 'lib/60-v16-helpers.js', 'lib/61-data-pillars.js',
    'lib/62-data-industries.js', 'lib/63-data-showcase.js', 'lib/64-worker-sections.js',
    ...pageFiles,
    'lib/70-page-generators.js', 'lib/80-routes.js', 'lib/90-behaviors.js', 'lib/99-boot.js',
  ],
};
writeFileSync('src/manifest.json', JSON.stringify(manifest, null, 2) + '\n', 'utf8');
console.log(`pages ${pageFiles.length} · styles ${manifest.styles.length + 2} · script parts ${manifest.script.length}`);

import { readFileSync } from 'node:fs';

const lines = readFileSync('_build/index.pre-refactor.html', 'utf8').split('\n');
const scriptStart = lines.findIndex(l => l.trim() === '<script>');
const scriptEnd = lines.findIndex(l => l.trim() === '</script>');

// Track template-literal nesting by backtick parity so that HTML lines inside
// a template are never mistaken for a top-level statement.
let inTemplate = false;
const anchors = [];
for (let i = scriptStart + 1; i < scriptEnd; i++) {
  const line = lines[i];
  if (!inTemplate && /^[A-Za-z_$/]/.test(line)) {
    anchors.push({ line: i + 1, text: line.slice(0, 96) });
  }
  const ticks = (line.match(/`/g) || []).length;
  if (ticks % 2 === 1) inTemplate = !inTemplate;
}

console.log(`script body: ${scriptStart + 2}..${scriptEnd}`);
console.log(`top-level constructs: ${anchors.length}\n`);
for (const a of anchors) console.log(String(a.line).padStart(5), a.text);

/* Assemble src/ into the single-file index.html.
   The deck ships as one self-contained file that opens over file://, so the build
   is a concatenation in manifest order — no bundler, no dependencies, no imports. */
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const read = (rel) => readFileSync(join('src', rel), 'utf8').replace(/\s+$/, '');
const manifest = JSON.parse(readFileSync('src/manifest.json', 'utf8'));

const banner = (label) => `/* ${'='.repeat(8)} ${label} ${'='.repeat(Math.max(2, 64 - label.length))} */`;

const styleBlock = [
  '<style>',
  manifest.styles.map(read).join('\n\n'),
  '</style>',
  ...manifest.stylesTagged.flatMap(({ id, file }) => ['', `<style id="${id}">`, read(file), '</style>']),
].join('\n');

const scriptBlock = [
  '<script>',
  manifest.script.map((f) => `${banner(f)}\n${read(f)}`).join('\n\n'),
  '</script>',
].join('\n');

const html = [
  read('shell/00-head.html'),
  styleBlock,
  '</head>',
  '<body>',
  '',
  ...manifest.shell.map((f) => read(f) + '\n'),
  scriptBlock,
  '</body>',
  '</html>',
].join('\n');

writeFileSync('index.html', html, 'utf8');
const kb = (Buffer.byteLength(html) / 1024).toFixed(0);
console.log(`built index.html · ${kb} KB · ${html.split('\n').length} lines · ${manifest.script.length} script parts`);

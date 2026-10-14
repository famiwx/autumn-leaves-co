import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const base = 'C:/Users/WINDOW 10/Downloads/stitch_autumn_extract/stitch_autumn_leaves_co_fashion';
const outDir = 'C:/Users/WINDOW 10/Documents/Qoder/2026-10-15/2b08e2da/images';
mkdirSync(outDir, { recursive: true });

const files = [
  join(base, 'home_autumn_leaves_co./code.html'),
  join(base, 'about_autumn_leaves_co./code.html'),
  join(base, 'contact_autumn_leaves_co./code.html'),
];

// Unique URLs in first-appearance order across home -> about -> contact
const names = [
  // home
  'logo', 'avatar',
  'hero-main', 'hero-detail',
  'product-turtleneck', 'product-cardigan', 'product-henley', 'product-flannel',
  'mood-forest', 'mood-outfit', 'mood-porch', 'mood-denim',
  'story-loom', 'journal-cardigan', 'journal-cassette', 'journal-magazine',
  // about
  'about-hero-forest', 'about-shears', 'about-tailgate', 'about-highway',
  'pillar-modesty', 'pillar-fibers', 'pillar-colors',
  'anatomy-cable', 'atelier-knitter', 'founder-elena', 'portrait-maren',
  // contact
  'showroom', 'still-yarn', 'still-tailoring', 'still-porch',
];

const seen = new Set();
const ordered = [];
for (const f of files) {
  const html = readFileSync(f, 'utf8');
  const urls = html.match(/https:\/\/lh3\.googleusercontent\.com\/[A-Za-z0-9_\-]+/g) || [];
  for (const u of urls) {
    if (!seen.has(u)) {
      seen.add(u);
      ordered.push(u);
    }
  }
}

console.log(`Found ${ordered.length} unique URLs; expected ${names.length}`);
if (ordered.length !== names.length) {
  ordered.forEach((u, i) => console.log(i, u.slice(0, 80)));
  process.exit(1);
}

function detectExt(buf) {
  if (buf[0] === 0xff && buf[1] === 0xd8) return 'jpg';
  if (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) return 'png';
  if (buf.slice(0, 4).toString() === 'RIFF' && buf.slice(8, 12).toString() === 'WEBP') return 'webp';
  if (buf[0] === 0x47 && buf[1] === 0x49 && buf[2] === 0x46) return 'gif';
  return 'jpg';
}

const manifest = [];
for (let i = 0; i < ordered.length; i++) {
  const name = names[i];
  if (existsSync(join(outDir, `${name}.jpg`))) {
    console.log(`skip ${name} (exists)`);
    continue;
  }
  try {
    const res = await fetch(ordered[i], { redirect: 'follow' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 1000) throw new Error(`too small: ${buf.length} bytes`);
    const ext = detectExt(buf);
    const file = `${name}.${ext}`;
    writeFileSync(join(outDir, file), buf);
    manifest.push(`${file}\t${(buf.length / 1024).toFixed(0)} KB`);
    console.log(`ok   ${file}  ${(buf.length / 1024).toFixed(0)} KB`);
  } catch (e) {
    console.error(`FAIL ${name}: ${e.message}`);
    process.exitCode = 1;
  }
}
writeFileSync(join(outDir, 'manifest.txt'), manifest.join('\n'));
console.log('done');

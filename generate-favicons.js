import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svgPath = path.resolve('public/favicon.svg');
const svgBuffer = fs.readFileSync(svgPath);

async function generate() {
  console.log('Generating PNG and ICO favicons for Google Search & Web Standards...');

  // 48x48 PNG (Google Search standard)
  await sharp(svgBuffer)
    .resize(48, 48)
    .png()
    .toFile('public/favicon-48x48.png');
  console.log('Created public/favicon-48x48.png');

  // 96x96 PNG
  await sharp(svgBuffer)
    .resize(96, 96)
    .png()
    .toFile('public/favicon-96x96.png');
  console.log('Created public/favicon-96x96.png');

  // 180x180 Apple Touch Icon
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile('public/apple-touch-icon.png');
  console.log('Created public/apple-touch-icon.png');

  // 192x192 PNG (Android/PWA)
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile('public/favicon-192x192.png');
  console.log('Created public/favicon-192x192.png');

  // 48x48 favicon.ico fallback
  await sharp(svgBuffer)
    .resize(48, 48)
    .png()
    .toFile('public/favicon.ico');
  console.log('Created public/favicon.ico');

  console.log('All favicons generated successfully!');
}

generate().catch(err => console.error(err));

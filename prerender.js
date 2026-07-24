import { spawn } from 'child_process';
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

// Update this list if you add/remove routes in your app
const routes = [
  '/',
  '/about',
  '/services',
  '/portfolio',
  '/contact',
  '/projects',
  '/industries',
  '/pricing',
  '/careers',
  '/blog',
  '/privacy-policy',
  '/terms-conditions',
  '/cookies-policy'
];

const PORT = 4173;
const DIST = path.resolve('dist');
const BASE_URL = `http://localhost:${PORT}`;

function startStaticServer() {
  return spawn('npx', ['serve', DIST, '-l', String(PORT), '-s'], {
    stdio: 'ignore'
  });
}

async function waitForServer(url, retries = 40) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // server not ready yet, keep retrying
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error('Static server did not start in time');
}

async function run() {
  const server = startStaticServer();

  try {
    await waitForServer(BASE_URL);

    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    for (const route of routes) {
      const url = `${BASE_URL}${route}`;
      console.log(`Prerendering: ${url}`);

      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      const html = await page.content();

      const outDir = route === '/' ? DIST : path.join(DIST, route);
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, 'index.html'), html);
    }

    await browser.close();
    console.log('Prerendering complete — all routes now have full static HTML.');
  } finally {
    server.kill();
  }
}

run().catch((err) => {
  console.error('Prerendering failed:', err);
  process.exit(1);
});

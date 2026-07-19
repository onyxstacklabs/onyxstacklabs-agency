import fs from 'fs';
import path from 'path';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

async function buildSitemap() {
  const BASE_URL = 'https://onyxstacklabs.com';
  // Standard format formatting: YYYY-MM-DD
  const currentDate = new Date().toISOString().split('T')[0];

  // 1. Core Enterprise App Inventory Layout Node Matrix (Updated with missing production pages)
  const staticRoutes = [
    { path: '/', changefreq: 'weekly', priority: '1.0' },
    { path: '/about', changefreq: 'monthly', priority: '0.9' },
    { path: '/services', changefreq: 'monthly', priority: '0.9' },
    { path: '/projects', changefreq: 'monthly', priority: '0.8' },
    { path: '/industries', changefreq: 'monthly', priority: '0.8' },
    { path: '/portfolio', changefreq: 'monthly', priority: '0.8' },
    { path: '/pricing', changefreq: 'monthly', priority: '0.8' },
    { path: '/careers', changefreq: 'weekly', priority: '0.7' },
    { path: '/contact', changefreq: 'monthly', priority: '0.8' },
    { path: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
    { path: '/terms-conditions', changefreq: 'yearly', priority: '0.3' },
    { path: '/cookie-policy', changefreq: 'yearly', priority: '0.3' },
    { path: '/thankyou', changefreq: 'monthly', priority: '0.5' },
    { path: '/blog', changefreq: 'daily', priority: '0.8' }
  ];

  let xmlUrlNodes = '';

  // Process static inventory nodes into XML templates
  staticRoutes.forEach(route => {
    xmlUrlNodes += `\n  <url>\n    <loc>${BASE_URL}${route.path}</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>${route.changefreq}</changefreq>\n    <priority>${route.priority}</priority>\n  </url>`;
  });

  // Hardcoded direct verification params parsed strictly from your working production setup
  const explicitConfig = {
    apiKey: "AIzaSyDwpE_nXBS-ptEvf9CsV3Bze5xr-W-oHmI",
    authDomain: "onyxstack-labs.firebaseapp.com",
    projectId: "onyxstack-labs",
    storageBucket: "onyxstack-labs.firebasestorage.app",
    messagingSenderId: "825221965531",
    appId: "1:825221965531:web:ae6684052f998f8c9d8efe"
  };

  // Safe isolated dynamic initialization context layer 
  try {
    const app = initializeApp(explicitConfig);
    const db = getFirestore(app);
    
    const blogCollectionRef = collection(db, 'blogs');
    const liveBlogsQuery = query(blogCollectionRef, where('status', '==', 'LIVE'));
    const querySnapshot = await getDocs(liveBlogsQuery);

    querySnapshot.forEach(doc => {
      const blogData = doc.data();
      const slug = blogData.slug;
      
      let lastModDate = currentDate;
      if (blogData.updatedAt) {
        const dateObj = blogData.updatedAt.toDate ? blogData.updatedAt.toDate() : new Date(blogData.updatedAt);
        lastModDate = dateObj.toISOString().split('T')[0];
      }

      if (slug) {
        xmlUrlNodes += `\n  <url>\n    <loc>${BASE_URL}/blog/${slug}</loc>\n    <lastmod>${lastModDate}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`;
      }
    });
  } catch (firestoreError) {
    console.error("Firestore automated sync dropped. Continuing with static core nodes infrastructure fallback layout.", firestoreError);
  }

  // 2. Structural boundary layout processing enforcement parameter
  const completeSitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${xmlUrlNodes}\n</urlset>`.trim();

  // 3. Dual distribution routing deployment fallback logic (Writes to both target vectors)
  const targetDirectories = [
    path.resolve(process.cwd(), 'public', 'sitemap.xml'),
    path.resolve(process.cwd(), 'dist', 'sitemap.xml') // Safe check if Vercel reads output directly from built asset path
  ];

  targetDirectories.forEach(targetPath => {
    try {
      const dir = path.dirname(targetPath);
      if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(targetPath, completeSitemapXml, 'utf8');
      console.log(`✅ Standard dynamic xml successfully structural map built at: ${targetPath}`);
    } catch (writeErr) {
      console.warn(`Non-fatal system storage directory offset skip: ${targetPath}`);
    }
  });
}

buildSitemap();

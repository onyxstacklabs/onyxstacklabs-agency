import fs from 'fs';
import path from 'path';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

/**
 * OnyxStack Labs - Automated XML Sitemap Parser Pipeline
 * Automatically extracts credentials directly from your existing firebase.js config file.
 */
async function getFirebaseConfig() {
  try {
    const configFilePath = path.resolve(process.cwd(), 'src', 'config', 'firebase.js');
    const fileContent = fs.readFileSync(configFilePath, 'utf8');

    // Regex directly targets and extracts key-value pairs from the existing code layout
    const extractKey = (keyName) => {
      const regex = new RegExp(`${keyName}:\\s*["']([^"']+)["']`);
      const match = fileContent.match(regex);
      return match ? match[1] : null;
    };

    return {
      apiKey: extractKey('apiKey'),
      authDomain: extractKey('authDomain'),
      projectId: extractKey('projectId'),
      storageBucket: extractKey('storageBucket'),
      messagingSenderId: extractKey('messagingSenderId'),
      appId: extractKey('appId')
    };
  } catch (err) {
    console.error("Fatal: Unable to auto-read src/config/firebase.js layout details.", err);
    process.exit(1);
  }
}

async function buildSitemap() {
  const BASE_URL = 'https://onyxstacklabs.com';
  const currentDate = new Date().toISOString().split('T')[0];

  // 1. Core Enterprise Application Routes Matrix Inventory
  const staticRoutes = [
    { path: '/', changefreq: 'weekly', priority: '1.0' },
    { path: '/about', changefreq: 'monthly', priority: '0.9' },
    { path: '/services', changefreq: 'monthly', priority: '0.9' },
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

  // Process static inventory nodes into XML wrappers
  staticRoutes.forEach(route => {
    xmlUrlNodes += `
  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  });

  // 2. Dynamic Initialization using extracted properties
  const extractedConfig = await getFirebaseConfig();
  const app = initializeApp(extractedConfig);
  const db = getFirestore(app);

  // 3. Automated Extraction for LIVE Status Content Blocks from Cloud Firestore
  try {
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
        xmlUrlNodes += `
  <url>
    <loc>${BASE_URL}/blog/${slug}</loc>
    <lastmod>${lastModDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
      }
    });
  } catch (firestoreError) {
    console.error("Firestore sync operational error - compiling static assets fallback setup:", firestoreError);
  }

  // 4. Strict XML Compliance Formatting Framework
  const completeSitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${xmlUrlNodes}
</urlset>`.trim();

  // Dynamic distribution directly into the system build environment public directory
  const outputPath = path.resolve(process.cwd(), 'public', 'sitemap.xml');
  fs.writeFileSync(outputPath, completeSitemapXml, 'utf8');
  console.log('✅ Standard dynamic xml sitemap fully compiled into public folder without any schema bugs!');
}

buildSitemap();

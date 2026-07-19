import fs from 'fs';
import path from 'path';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

// TODO: Apne project ke actual Firebase config credentials yahan paste karein
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function buildSitemap() {
  const BASE_URL = 'https://onyxstacklabs.com';
  const currentDate = new Date().toISOString().split('T')[0];

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

  // 1. Static Routes Add Karein
  staticRoutes.forEach(route => {
    xmlUrlNodes += `
  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  });

  // 2. Firestore se LIVE Blogs Fetch Karein
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
  } catch (e) {
    console.error("Firestore fetch failed, components fallback to static only:", e);
  }

  const completeSitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${xmlUrlNodes}
</urlset>`.trim();

  // Vite/React ke public folder mein sitemap write karna taaki Vercel direct deploy kar sakay
  const outputPath = path.resolve(process.cwd(), 'public', 'sitemap.xml');
  fs.writeFileSync(outputPath, completeSitemapXml, 'utf8');
  console.log('✅ Standard XML Sitemap successfully generated in public folder!');
}

buildSitemap();

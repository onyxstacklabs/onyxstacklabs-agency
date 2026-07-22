import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Custom plugin: converts Vite's auto-injected render-blocking CSS <link>
// into a non-blocking preload+swap pattern (no visual change, no FOUC).
// Only affects the production build's index.html — no effect in dev mode.
function asyncCssPlugin() {
  return {
    name: 'async-css-plugin',
    transformIndexHtml(html) {
      return html.replace(
        /<link rel="stylesheet"([^>]*?)\s+href="([^"]+\.css)"([^>]*)>/g,
        (match, before, href, after) => {
          const extra = `${before || ''}${after || ''}`.trim();
          const attrs = extra ? ` ${extra}` : '';
          return (
            `<link rel="preload" as="style"${attrs} href="${href}" onload="this.onload=null;this.rel='stylesheet'">` +
            `<noscript><link rel="stylesheet"${attrs} href="${href}"></noscript>`
          );
        }
      );
    }
  };
}

// Production Build Optimization Matrix Engine for Maximum SEO Loading Speed Metrics
export default defineConfig({
  plugins: [react(), asyncCssPlugin()],
  build: {
    outDir: 'dist',
    minify: 'terser', 
    sourcemap: false, 
    terserOptions: {
      compress: {
        drop_console: true, // Drops console messages to reduce core JavaScript payload size
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        // Splits vendor code by usage pattern instead of one large shared chunk,
        // so routes only download the libraries they actually need and browsers
        // can cache stable vendor code independently from app code.
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-router-dom') || id.includes('/react/') || id.includes('/react-dom/')) {
              return 'react-vendor';
            }
            if (id.includes('framer-motion')) {
              return 'motion-vendor';
            }
            if (id.includes('firebase')) {
              return 'firebase-vendor';
            }
            if (id.includes('lucide-react')) {
              return 'icons-vendor';
            }
            return 'vendor';
          }
        }
      }
    }
  }
});

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
        /<link rel="stylesheet" crossorigin(?:\s+([^>]*))?\s+href="([^"]+\.css)">/g,
        (match, extraAttrs, href) => {
          const attrs = extraAttrs ? ` ${extraAttrs}` : '';
          return (
            `<link rel="preload" as="style" crossorigin${attrs} href="${href}" onload="this.onload=null;this.rel='stylesheet'">` +
            `<noscript><link rel="stylesheet" crossorigin href="${href}"></noscript>`
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
        // Balances cache persistence with minimal initial payload delivery
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  }
});

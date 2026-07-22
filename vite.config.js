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
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  }
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Production Build Optimization Matrix Engine for Maximum SEO Loading Speed Metrics
export default defineConfig({
  plugins: [react()],
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

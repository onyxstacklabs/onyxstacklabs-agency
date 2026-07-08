// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Production Build Matrix Optimization Engine
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Enforcing strict absolute resolution mappings for root modules
      '@firebase': path.resolve(__dirname, './firebase'),
    },
  },
  build: {
    outDir: 'dist',
    minify: 'terser', // Premium minification logic for low latency
    sourcemap: false, // Turn off for source security in production pipelines
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          firebase: ['firebase/app', 'firebase/firestore'] // Splitting core dependencies for rapid loading metrics
        }
      }
    }
  }
});

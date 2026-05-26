import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: './',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        // world-atlas 2.0.2 has no main/exports in package.json, so Vite/Rollup
        // can't resolve it automatically. Alias the specific files used directly.
        'world-atlas/countries-110m.json': path.resolve(__dirname, 'node_modules/world-atlas/countries-110m.json'),
        'world-atlas/countries-50m.json': path.resolve(__dirname, 'node_modules/world-atlas/countries-50m.json'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify — file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    build: {
      target: 'esnext',
      minify: 'esbuild',
      cssMinify: true,
      assetsInlineLimit: 4096,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
            'motion': ['motion'],
            'map': ['react-simple-maps', 'd3-geo'],
          },
        },
      },
      reportCompressedSize: true,
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom', 'motion', 'lucide-react'],
    },
  };
});

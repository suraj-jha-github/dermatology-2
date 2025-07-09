import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'build', // Keep CRA's default build output directory
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries into separate chunks
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'ui-libs': ['@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
          'carousel-libs': ['react-slick', 'slick-carousel', 'embla-carousel-react', 'embla-carousel-autoplay', 'react-alice-carousel', 'react-multi-carousel', 'keen-slider', 'swiper'],
          'icons': ['@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons', '@fortawesome/free-brands-svg-icons', '@fortawesome/react-fontawesome', 'react-icons']
        }
      }
    }
  },
  css:{
    devSourcemap: true, // Enable CSS source maps in development
  },
  server: {
    port: 3000, // Use the same port as CRA
    open: true, // Automatically open browser
  },
}) 
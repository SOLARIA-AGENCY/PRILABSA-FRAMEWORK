import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enterprise production optimizations
    target: 'esnext',
    minify: true, // Use default minifier
    sourcemap: false, // Security: disable source maps in production
    rollupOptions: {
      output: {
        // Security: obscure chunk names
        chunkFileNames: 'assets/c-[hash].js',
        entryFileNames: 'assets/e-[hash].js',
        assetFileNames: 'assets/a-[hash].[ext]',
        // Code splitting optimization
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom']
        }
      }
    },
    // Performance optimizations
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096
  },
  server: {
    // Development security
    headers: {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    },
    // HTTPS in development (optional)
    // https: true,
  },
  preview: {
    // Preview server security
    headers: {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    }
  },
  // Performance optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['@testing-library/react']
  },
  // Security: environment variables
  envPrefix: 'VITE_',
  // CSS optimization
  css: {
    devSourcemap: false // Security: disable CSS source maps
  }
})

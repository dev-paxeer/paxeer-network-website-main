import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      }
    },
    minify: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
    },
  },
  plugins: [
    tailwindcss(),
    react(),
  ],
  server: {
    port: 3000,
    open: true
  }
})

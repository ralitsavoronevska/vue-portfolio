import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from "@tailwindcss/vite";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [vue(), vueDevTools(), tailwindcss(),
  ViteImageOptimizer({
    test: /\.(jpe?g|pngwebp|svg)$/i,  // Match your image types
    include: ['src/assets', 'src/assets/images', 'src/assets/projects', 'src/assets/icons'],  // Use string path to src folder (or use an array of strings)
    png: { quality: 80 },
    webp: { lossless: true },  
    svg: { multipass: true },         
    includePublic: true  
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})

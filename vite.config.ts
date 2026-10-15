import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig(({ command }) => ({
  plugins: [
    vue(),
    ...(command !== 'build' ? [vueDevTools()] : []),
    tailwindcss(),
    ViteImageOptimizer({
      test: /\.(jpe?g|pngwebp|svg)$/i,
      include: ['src/assets', 'src/assets/images', 'src/assets/projects', 'src/assets/icons'],
      png: { quality: 80 },
      webp: { lossless: true },
      svg: { multipass: true },
      includePublic: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/vue')) return 'vue';
          if (id.includes('node_modules/vue3-carousel')) return 'vue3-carousel';
        },
      },
    },
  },
}))

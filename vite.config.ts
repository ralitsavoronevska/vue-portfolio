import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: element => element.startsWith('iconify-icon')
      }
    }
  }), tailwindcss(),],
  resolve: { alias: { '@': '/src' } },
  assetsInclude: ['**/*.svg'],
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: element => element.startsWith('iconify-icon')
      }
    }
  }), vueDevTools(), tailwindcss(),],
  resolve: { alias: { '@': '/src' } },
  assetsInclude: ['**/*.svg'],
})

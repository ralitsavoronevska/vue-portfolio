import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [vue(), vueDevTools(), tailwindcss(),],
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      enabled: true,
      reporter: ['text', 'html', 'lcov'],
      exclude: ['src/main.ts', 'src/App.vue', '**/*.d.ts'],
      reportsDirectory: './coverage',
      include: ['src/**/*.{ts,vue}'],
    },
  },
  resolve: { alias: { '@': '/src' } },
  assetsInclude: ['**/*.svg'],
})

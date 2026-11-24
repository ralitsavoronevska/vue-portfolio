import { fileURLToPath } from "node:url";
import { mergeConfig, defineConfig, configDefaults } from "vitest/config";
import viteConfig from "./vite.config.ts";

export default defineConfig((configEnv) =>
  mergeConfig(
    typeof viteConfig === "function"
      ? viteConfig(configEnv)
      : viteConfig,
    defineConfig({
      test: {
        environment: "happy-dom",
        exclude: [...configDefaults.exclude, "e2e/**"],
        root: fileURLToPath(new URL("./", import.meta.url)),
        globals: true,
        coverage: {
          enabled: true,
          reporter: ["text", "html", "lcov"],
          exclude: ["src/main.ts", "src/App.vue", "**/*.d.ts"],
          reportsDirectory: "./coverage",
          include: ["src/**/*.{ts,vue}"],
        },
      },
      resolve: {
        alias: {
          "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
      },
      assetsInclude: ["**/*.svg"],
    }),
  ),
);
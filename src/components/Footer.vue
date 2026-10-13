<template>
  <footer>
    <p class="footer-brand">
      <a
        href="https://ralitsavoronevska.com/"
        rel="noopener"
      >
        &lt;{{ author }}/&gt;
      </a>
      <span>© {{ year }}</span>
    </p>

    <p class="footer-copy">
      <span class="footer-tech-group">
        <span class="footer-tech-label">Built with</span>
        <span class="footer-tech-icons" aria-label="Portfolio tech stack">
          <img
            v-for="tech in techStack"
            :key="tech.file_name"
            :src="getTechIcon(tech.file_name)"
            :alt="tech.name"
            class="footer-tech-icon"
            loading="lazy"
          />
        </span>
      </span>
    </p>
  </footer>
</template>

<script setup lang="ts">
import { usePortfolioData } from "@/composables/usePortfolioData";

const { author, personalProjects } = usePortfolioData();
defineOptions({ name: "AppFooter" });
const year = new Date().getFullYear();

const techStack =
  personalProjects.find((project) => project.title === "Vue.js 3 Portfolio")
    ?.techStack ?? [];

const icons = import.meta.glob("@/assets/icons/*.svg", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const getTechIcon = (fileName: string) => {
  const path = `/src/assets/icons/${fileName}.svg`;
  return icons[path] ?? "";
};
</script>

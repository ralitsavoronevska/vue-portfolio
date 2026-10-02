<template>
  <footer>
    <p>
      <a
        href="https://ralitsavoronevska.com/"
        rel="noopener"
      >
        &lt;{{ author }}/&gt;
      </a>
      <span>© {{ year }}</span>
      <span>{{ footerText }}</span>
    </p>
  </footer>
</template>

<script setup lang="ts">
import { usePortfolioData } from "@/composables/usePortfolioData";
const { author, footerText } = usePortfolioData();
defineOptions({ name: "AppFooter" });
const year = new Date().getFullYear();
</script>

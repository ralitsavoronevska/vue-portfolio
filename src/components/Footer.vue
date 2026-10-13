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

    <p class="footer-copy">{{ footerText }}</p>
  </footer>
</template>

<script setup lang="ts">
import { usePortfolioData } from "@/composables/usePortfolioData";
const { author, footerText } = usePortfolioData();
defineOptions({ name: "AppFooter" });
const year = new Date().getFullYear();
</script>

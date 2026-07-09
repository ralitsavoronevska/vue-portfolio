<template>
  <footer>
    <p>
      <a
        href="https://ralitsavoronevska.github.io/modern-portfolio/"
        target="_blank"
        rel="noopener"
      >
        &lt;Ralitsa Voronevska/&gt;
      </a>
      <span>© {{ year }}</span>
    </p>
  </footer>
</template>

<script setup lang="ts">
defineOptions({ name: "AppFooter" });
const year = new Date().getFullYear();
</script>

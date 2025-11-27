<template>
  <footer>
    <p class="gradient-text">
      <a 
      href="https://ralitsavoronevska.github.io/modern-portfolio/"
        target="_blank"
        rel="noopener"
        class="gradient-text"
      >
        &lt;Ralitsa Voronevska/&gt;
      </a>
      <span>© {{ year }}</span>
    </p>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
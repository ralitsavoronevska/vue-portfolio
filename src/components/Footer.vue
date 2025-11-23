<template>
  <footer
    class="h-15 py-3 flex justify-center items-center shadow-3xl backdrop-blur-2xl"
  >
    <p class="m-0 text-lg lg:text-2xl font-bold bg-linear-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent text-center">
      <a 
      href="https://ralitsavoronevska.github.io/modern-portfolio/"
        target="_blank"
        rel="noopener"
        class="bg-linear-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent font-bold no-underline"
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
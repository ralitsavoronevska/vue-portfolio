<template>
  <footer
    class="important-el h-[60px] py-3 text-center"
  >
    <p class="m-0 text-lg lg:text-2xl font-bold gradient bg-clip-text text-transparent text-center">
      <a
        href="https://ralitsavoronevska.github.io/modern-portfolio/"
        target="_blank"
        rel="noopener"
        class="gradient bg-clip-text text-transparent font-bold no-underline"
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

<style scoped>
.important-el {
  background: rgba(30, 22, 33, .85);
  box-shadow: .1875rem .1875rem .75rem rgba(248, 99, 189, .25); /* 3px 3px 12px */
}
</style>
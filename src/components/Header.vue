<template>
  <!-- start of Header -->
  <header
    class="fixed inset-x-0 top-0 flex justify-between items-flex items-center h-21 z-20
           shadow-3xl backdrop-blur-2xl"
  >

    <!-- start of Logo -->
    <a href="#" aria-label="Home page" class="block">
      <div
        class="logo w-20 h-21 bg-[url('/assets/logo.png')] bg-cover bg-center flex items-center justify-center bg-no-repeat
               scale-[0.7059] transition-transform duration-300 ease-in-out
               hover:scale-75"
      ></div>
    </a>
    <!-- end of Logo -->

    <!-- start of Navigation -->
    <nav class="flex">
      <ul class="flex items-center justify-center gap-4 md:gap-12 mr-4">
        <li v-for="item in navItems" :key="item.href">
          <a
            :href="item.href"
            class="text-xl font-medium transition-colors hover:text-indigo-500"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </nav>
    <!-- end of Navigation -->

  </header>
  <!-- end of Header -->
</template>

<script setup lang="ts">
const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
</script>
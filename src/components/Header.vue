<template>
  <!-- start of Header -->
  <header>

    <!-- start of Logo -->
    <a href="#" aria-label="Home page">
      <div class="logo"></div>
    </a>
    <!-- end of Logo -->

    <!-- start of Navigation -->
    <nav>
      <ul>
        <li v-for="item in navItems" :key="item.href">
          <a
            :href="item.href"
            class=""
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
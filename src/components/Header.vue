<template>
  <!-- start of Header -->
  <header 
    ref="headerRef" 
    @keydown.esc="handleEscapeKey">
    <!-- start of Logo -->
    <a class="logo-link" href="#" aria-label="Home page">
      <div class="logo" :style="{ backgroundImage: `url(${logo})` }"></div>
    </a>
    <!-- end of Logo -->

    <!-- start of Mobile Navigation Toggle -->
    <button
      ref="navToggle"
      class="nav-toggle"
      :class="{ 'nav-toggle--open': isMenuOpen }"
      type="button"
      :aria-label="isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
      aria-controls="main-navigation"
      :aria-expanded="isMenuOpen"
      @click="toggleMenu"
    >
      <span class="nav-toggle__line"></span>
      <span class="nav-toggle__line"></span>
      <span class="nav-toggle__line"></span>
    </button>
    <!-- end of Mobile Navigation Toggle -->

    <!-- start of Navigation -->
    <nav
      id="main-navigation"
      class="main-navigation"
      :class="{ 'main-navigation--open': isMenuOpen }"
    >
      <ul>
        <li v-for="item in navItems" :key="item.href">
          <a :href="item.href" @click="closeMenu">
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
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import logo from "@/assets/logo.png";

defineOptions({ name: "AppHeader" });

const isMenuOpen = ref(false);

const navToggle = ref<HTMLButtonElement | null>(null);
const headerRef = ref<HTMLElement | null>(null); 

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleEscapeKey = async () => {
  if (!isMenuOpen.value) return;

  isMenuOpen.value = false;

  await nextTick();
  navToggle.value?.focus();
}

const handleClickOutside = (event: MouseEvent) => { 
  if (!isMenuOpen.value) return;

  const target = event.target as Node;

  if (!headerRef.value?.contains(target)) {
    closeMenu();
  }
}

const handleResize = () => {
  if (window.innerWidth >= 768 && isMenuOpen.value) {
    closeMenu();
  }
};

onMounted(() => { 
  document.addEventListener('click', handleClickOutside);
  window.addEventListener('resize', handleResize);
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
@reference "../assets/css/main.css";

/* ========================================
   Header
======================================== */

header {
  @apply fixed inset-x-0 top-0 z-20 flex h-21 items-center justify-between
         shadow-3xl backdrop-blur-2xl;
}

.logo-link {
  @apply flex h-20 w-20 items-center justify-center outline-none;
}

.logo {
  @apply flex h-21 w-20 scale-[0.7059] items-center justify-center
         rounded-xl border-2 border-transparent bg-cover bg-center bg-no-repeat
         transition-transform duration-300 ease-in-out hover:scale-75;
}

.logo-link:focus-visible {
  @apply outline-none ring-0;
}

.logo-link:focus-visible .logo {
  border-color: var(--color-brand-pink);
  box-shadow: var(--shadow-brand-glow);
}

header nav {
  @apply flex;
}

header nav ul {
  @apply mr-4 flex items-center justify-center md:space-x-12;
}

header nav li {
  @apply flex w-full items-center justify-center p-4 text-center;
}

header nav a {
  @apply w-full text-lg font-medium transition-colors
         hover:text-brand-indigo md:text-xl;
}

/* ========================================
   Mobile Navigation Toggle
======================================== */

.nav-toggle {
  @apply hidden h-11 w-11 cursor-pointer rounded-xl border
         border-transparent bg-transparent p-2.5;
}

.nav-toggle__line {
  @apply block h-0.5 self-end rounded-full bg-brand-pink;
  transform-origin: center;

  transition:
    width 250ms ease,
    transform 250ms ease,
    opacity 200ms ease;
}

.nav-toggle__line:nth-child(1) {
  width: 100%;
}

.nav-toggle__line:nth-child(2) {
  width: 75%;
}

.nav-toggle__line:nth-child(3) {
  width: 50%;
}

/* Hamburger → X */

.nav-toggle--open .nav-toggle__line:nth-child(1) {
  width: 100%;
  transform: translateY(7px) rotate(45deg);
}

.nav-toggle--open .nav-toggle__line:nth-child(2) {
  width: 100%;
  opacity: 0;
  transform: scaleX(0);
}

.nav-toggle--open .nav-toggle__line:nth-child(3) {
  width: 100%;
  transform: translateY(-8px) rotate(-45deg);
}

/* ========================================
   Mobile Navigation
======================================== */

@media (max-width: 767px) {
  .nav-toggle {
    @apply ml-auto mr-4 flex flex-col justify-center gap-[0.35rem]
           text-brand-pink;
  }

  .nav-toggle:hover {
    border-color: var(--color-brand-pink);
    box-shadow: var(--shadow-brand-glow);
  }

  .nav-toggle:focus-visible {
    border-color: var(--color-brand-pink);
    outline: 2px solid var(--color-brand-pink);
    outline-offset: 3px;
    box-shadow: var(--shadow-3xl);
  }

  .main-navigation {
    @apply absolute inset-x-0 top-full z-100 hidden
           border-y backdrop-blur-2xl;

    background: var(--color-surface-dark);
    border-color: var(--color-brand-glow);
    box-shadow: 0 10px 24px var(--color-brand-glow);
  }

  .main-navigation--open {
    @apply block;
  }

  .main-navigation ul {
    @apply m-0 flex list-none flex-col items-center p-0;
  }

  .main-navigation li:not(:last-child) {
    border-bottom: 1px solid var(--color-brand-glow);
  }

  .main-navigation a {
    @apply inline-block text-white no-underline transition-colors;
  }

  .main-navigation a:hover {
    color: var(--color-brand-pink);
    text-shadow: 0 0 8px var(--color-brand-glow);
  }

  .main-navigation a:focus-visible {
    @apply rounded-sm;
    color: var(--color-brand-pink);
    outline: 2px solid var(--color-brand-pink);
    outline-offset: 5px;
  }
}

/* ========================================
   Reduced Motion
======================================== */

@media (prefers-reduced-motion: reduce) {
  .nav-toggle__line,
  .main-navigation a {
    transition: none;
  }
}
</style>
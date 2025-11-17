<template>
  <main>

    <!-- Fixed background and overlay -->
    <div class="bg-container fixed top-0 left-0 w-full h-screen -z-2 will-change-transform bg-cover bg-center bg-no-repeat bg-fixed bg-[url('/assets/images/full-bg.webp')]"></div>
    <div class="overlay fixed top-0 left-0 w-full h-screen -z-1"></div>

    <div class="content-wrapper relative z-1 min-h-screen">

      <!-- ScrollToTop Button -->
      <ScrollToTop />

      <!-- Header -->
      <Header />

      <!-- Hero Section -->
      <Hero />

      <!-- About Me Section -->
      <AboutMe />

      <!-- Projects Section -->
      <ProjectsList />

      <!-- Contact Me Section -->
      <ContactMe />

      <!-- Footer -->
      <Footer />
    </div>  

  </main>
</template>

<script setup lang="ts">
import ScrollToTop from './components/ScrollToTop.vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import AboutMe from './components/AboutMe.vue'
import ProjectsList from './components/ProjectsList.vue'
import ContactMe from './components/ContactMe.vue'
import Footer from './components/Footer.vue'
</script>
<template>
  <main>

    <!-- Fixed background and overlay -->
    <div class="background-container"></div>
    <div class="overlay"></div>

    <div class="content-wrapper">

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
      <section id="contact" class="py-20 px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-8">Contact Me</h2>
        <p class="text-lg mb-8">I'd love if you reach out to me. Even if it's to say: "Hey!"</p>
        <a id="profile-link" href="https://github.com/ralitsavoronevska" target="_blank" class="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition">
          GitHub Profile
        </a>
        <p class="mt-6 text-sm">Varna, Bulgaria</p>
      </section>

    </div>  
  </main>


</template>

<script setup lang="ts">
import ScrollToTop from './components/ScrollToTop.vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import AboutMe from './components/AboutMe.vue'
import ProjectsList from './components/ProjectsList.vue'
</script>
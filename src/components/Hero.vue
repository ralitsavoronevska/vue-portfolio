<template>
  <!-- start of Hero Section -->
  <section id="welcome-section" class="hero-section flex items-center justify-center w-full min-h-screen flex-col pt-20 pb-20 scroll-mt-20">

    <!-- start of hero-and-socials -->
    <div class="hero-and-socials flex flex-col">

      <!-- Hero Image -->
      <HeroImage />

      <!-- start of name-and-info -->
      <div class="name-and-info text-flex items-center justify-center mt-8">
        <h1 class="display-1 leading-[1.2] font-bold mb-2">Ralitsa <span class="bg-linear-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">Voronevska</span></h1>

        <!-- Typewriter effect -->
        <Typewriter text="Mid Front-End Developer" />

      </div>  
      <!-- end of name-and-info -->

    </div>
    <!-- end of hero-and-socials -->

    <!-- start of social-links -->
    <div class="flex items-center justify-center gap-6 mt-6 md:mb-5 lg:mb-5">
      <!-- Social Links -->
      <Links :links="heroSocialLinks"/>
    </div>
    <!-- end of social-links -->  

  </section>
  <!-- end of Hero Section -->
</template>

<script setup lang="ts">
import HeroImage from './HeroImage.vue'
import Links from './Links.vue'
import Typewriter from './Typewriter.vue'
import { usePortfolioData } from '@/composables/usePortfolioData'
const { heroSocialLinks } = usePortfolioData()
</script>

<style scoped>
#welcome-section {
  .hero-and-socials {
    margin-top: 3.35rem; /* 53.6px */
    @media (min-width: 768px) {
      margin-top: 8.5rem; /* 136px */
    }
    @media (min-width: 1200px) {
      margin-top: 3.35rem; /* 53.6px */
    }
  }
}
</style>
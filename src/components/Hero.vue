<template>
  <!-- start of Hero Section -->
  <section id="welcome-section" class="hero-section center w-full min-h-screen flex-col">

    <!-- start of hero-and-socials -->
    <div class="hero-and-socials flex flex-col">

      <!-- Hero Image -->
      <HeroImage />

      <!-- start of name-and-info -->
      <div class="name-and-info text-center mt-8">
        <h1 class="display-1 leading-[1.2] font-bold mb-2">Ralitsa <span class="gradient-text">Voronevska</span></h1>

        <!-- Typewriter effect -->
        <Typewriter text="Mid Front-End Developer" />

      </div>  
      <!-- end of name-and-info -->

    </div>
    <!-- end of hero-and-socials -->

    <!-- start of social-links -->
    <div class="center gap-6 mt-6 md:mb-5 lg:mb-5">
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
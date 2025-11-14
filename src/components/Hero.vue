<template>

  <!-- Hero Content -->
  <section id="welcome-section" class="hero-section center w-full min-h-screen flex-col">
    <div class="hero-and-socials flex flex-col">

      <!-- Hero Image -->
      <HeroImage />

      <!-- Name + Info -->
      <div class="name-and-info text-center mt-8">
        <h1 class="display-1 leading-[1.2] font-bold mb-2">Ralitsa <span class="gradient-text">Voronevska</span></h1>

        <!-- Typewriter effect -->
        <Typewriter text="Mid Front-End Developer" />

      </div>  
    </div>

    <!-- start of social-links -->
    <div class="center gap-6 mt-6 md:mb-5 lg:mb-5">
      <!-- Social Links -->
      <Links :links="heroSocialLinks"/>
    </div>
    <!-- end of social-links -->  

  </section>
</template>

<script setup lang="ts">
import HeroImage from './HeroImage.vue'
import Links from './Links.vue'
import Typewriter from './Typewriter.vue'
import { usePortfolioData } from '@/composables/usePortfolioData'

const { heroSocialLinks } = usePortfolioData()
</script>
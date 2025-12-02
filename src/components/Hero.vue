<template>
  <!-- start of Hero Section -->
  <section id="welcome-section" class="hero">

    <!-- start of hero-and-socials -->
    <div class="hero-and-socials">

      <!-- Hero Image -->
      <HeroImage />

      <!-- start of name-and-info -->
      <div class="name-and-info">
        <h1>Ralitsa <span class="gradient-text">Voronevska</span></h1>
         <h2>
          The
          <span class="gradient-text">
            {{ displayedText }}
          </span>
        </h2>

      </div>  
      <!-- end of name-and-info -->

    </div>
    <!-- end of hero-and-socials -->

    <!-- start of social-icons -->
    <div class="social-icons">
      <SocialIcons :icons="heroSocialIcons" />
    </div>
    <!-- end of social-icons -->  

  </section>
  <!-- end of Hero Section -->
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeroImage from './HeroImage.vue'
import SocialIcons from './SocialIcons.vue'
import { usePortfolioData } from '@/composables/usePortfolioData'
const { heroSocialIcons } = usePortfolioData()

const displayedText = ref('Mid Front-end Developer')
</script>
<template>
  <!-- start of Contact Me Section -->
  <section id="contact" class="contact-me py-20 px-6 text-center">

    <!-- start of headings -->
    <h2 class="display-2 leading-[1.2] font-bold mb-2">Contact <span class="gradient-text">Me</span></h2>
    <p class="sm-heading mt-2 mb-4">
      I'd love if you reach out to me. Even if it's to say: <span class="gradient-text">"Hey!"</span>
      <br>
      Don't hesitate! Drop me a line and I’ll reply to you <span class="gradient-text">ASAP</span>!
    </p>

    <p class="sm-heading center mb-0">
      <img :src="`assets/icons/map-marker.svg`" class="w-8 h-8" alt="Map Marker icon" loading="lazy">
      <span class="gradient-text ms-2">Varna, Bulgaria</span>
    </p>
    <!-- end of headings -->

    <!-- start of social-icons -->
    <div class="social-links center flex-wrap gap-10 mt-5">
      <!-- Social Links -->
      <Links :links="contactSocialLinks" />
    </div>
  </section>
  <!-- end of Contact Me Section -->
</template>

<script setup lang="ts">
import Links from './Links.vue'
import { usePortfolioData } from '@/composables/usePortfolioData'
const { contactSocialLinks } = usePortfolioData()
</script>
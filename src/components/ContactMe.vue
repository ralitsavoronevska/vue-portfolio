<template>
  <!-- start of Contact Me Section -->
  <section id="contact" class="contact-me">

    <!-- start of headings -->
    <h2>Contact <span class="gradient-text">Me</span></h2>
    <p class="contact-me-text">
      I'd love if you reach out to me. Even if it's to say: <span class="gradient-text">"Hey!"</span>
      <br>
      Don't hesitate! Drop me a line and I’ll reply to you <span class="gradient-text">ASAP</span>!
    </p>

    <p class="location">
      <img :src="`assets/icons/map-marker.svg`" class="w-8 h-8" alt="Map Marker icon" loading="lazy">
      <span class="gradient-text">Varna, Bulgaria</span>
    </p>
    <!-- end of headings -->

    <!-- start of social-icons -->
    <div class="social-icons">
      <SocialIcons :icons="contactSocialIcons" />
    </div>
    <!-- end of social-icons -->

  </section>
  <!-- end of Contact Me Section -->
</template>

<script setup lang="ts">
import SocialIcons from './SocialIcons.vue'
import { usePortfolioData } from '@/composables/usePortfolioData'
const { contactSocialIcons } = usePortfolioData()
</script>
<template>
  <!-- start of Contact Me Section -->
  <section id="contact" class="contact-me flex flex-col text-center mx-3 pt-20 pb-20 scroll-mt-40">

    <!-- start of headings -->
    <h2 class="text-4xl md:text-5xl mb-4">Contact <span class="bg-linear-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">Me</span></h2>
    <p class="text-2xl md:text-3xl lg:text-4xl mt-4 mb-10">
      I'd love if you reach out to me. Even if it's to say: <span class="bg-linear-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">"Hey!"</span>
      <br>
      Don't hesitate! Drop me a line and I’ll reply to you <span class="bg-linear-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">ASAP</span>!
    </p>

    <p class="text-2xl md:text-3xl lg:text-4xl flex items-center justify-center mb-0">
      <img :src="`assets/icons/map-marker.svg`" class="w-8 h-8" alt="Map Marker icon" loading="lazy">
      <span class="bg-linear-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent ms-2">Varna, Bulgaria</span>
    </p>
    <!-- end of headings -->

    <!-- start of social-icons -->
    <div class="social-links flex items-center justify-center flex-wrap gap-[50px] mt-10">
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
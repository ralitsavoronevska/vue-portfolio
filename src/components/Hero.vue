<template>
  <!-- start of Hero Section -->
  <section id="hero" class="hero">
    <!-- start of hero-and-socials -->
    <div class="hero-and-socials">
      <!-- Hero Image -->
      <HeroImage />

      <!-- start of name-and-info -->
      <div class="name-and-info">
        <h1>
          {{ author.split(" ")[0] }}
          <span class="gradient-text">{{ author.split(" ").slice(1).join(" ") }}</span>
        </h1>
        <h2>{{ heroSubtitle }}</h2>
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
defineOptions({ name: "AppHero" });
import HeroImage from "./HeroImage.vue";
import SocialIcons from "./SocialIcons.vue";
import { usePortfolioData } from "@/composables/usePortfolioData";
const { author, heroSubtitle, heroSocialIcons } = usePortfolioData();
</script>

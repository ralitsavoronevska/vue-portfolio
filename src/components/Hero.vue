<template>
  <!-- start of Hero Section -->
  <section ref="sectionRef" id="hero" class="hero">
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

    <!-- start of CTA Buttons: 2 on a flex row -->
    <div class="btns-container">
      <a
        href="#projects"
        :class="[revealClasses, 'btn-styles']"
        :style="isVisible ? revealStyle(900) : undefined"
      >
        {{ viewProjectsLabel }}
      </a>
      <a
        href="https://ralitsavoronevska.com/assets/Ralitsa-Voronevska-Frontend-Developer-CV.pdf"
        rel="noopener"
        download="Ralitsa-Voronevska-Frontend-Developer-CV.pdf"
        :class="[revealClasses, 'btn-styles']"
        :style="isVisible ? revealStyle(1000) : undefined"
      >
        {{ downloadResumeLabel }}
      </a>
    </div>
    <!-- end of CTA Buttons -->
  </section>
  <!-- end of Hero Section -->
</template>

<script setup lang="ts">
defineOptions({ name: "AppHero" });
import HeroImage from "./HeroImage.vue";
import SocialIcons from "./SocialIcons.vue";
import { usePortfolioData } from "@/composables/usePortfolioData";
import { useReveal } from "@/composables/useReveal";
import { useTemplateRef } from "vue";

const sectionRef = useTemplateRef<HTMLElement>("sectionRef");
const { isVisible, revealClasses, revealStyle } = useReveal(sectionRef);

const {
  author,
  heroSubtitle,
  heroSocialIcons,
  viewProjectsLabel,
  downloadResumeLabel,
} = usePortfolioData();


</script>

<script setup lang="ts">
import { usePortfolioData } from "@/composables/usePortfolioData";
import { useReveal } from "@/composables/useReveal";
import { useTemplateRef } from "vue";
import HeroImage from "./HeroImage.vue";

const {
  aboutMeTitle,
  aboutMeTitleHighlight,
  aboutMeSubtitle,
  aboutMeDescription,
  highlights,
} = usePortfolioData();

const sectionRef = useTemplateRef<HTMLElement>("sectionRef");
const { isVisible, revealClasses, revealStyle } = useReveal(sectionRef);
</script>

<template>
  <!-- start of About Section -->
  <section ref="sectionRef" id="about" class="about-me">
    <!-- headings -->
    <h2
      :class="revealClasses"
      :style="isVisible ? revealStyle(100) : undefined"
    >
      {{ aboutMeTitle }} <span class="gradient-text">{{ aboutMeTitleHighlight }}</span>
    </h2>
    <h3
      :class="revealClasses"
      :style="isVisible ? revealStyle(200) : undefined"
    >
      {{ aboutMeSubtitle }}
    </h3>

    <!-- start of Hero: stacked + centered on mobile, side-by-side from sm: up -->
    <div class="hero-and-description">
      <div
        :class="revealClasses"
        :style="isVisible ? revealStyle(300) : undefined"
      >
        <HeroImage />
      </div>

      <div class="about-me-description-container">
        <p
          class="about-me-description-text"
          :class="revealClasses"
          :style="isVisible ? revealStyle(400) : undefined"
        >
          {{ aboutMeDescription }}
        </p>
      </div>
    </div>
    <!-- end of Hero -->

    <!-- start of Highlight Cards: 1 col on mobile, 2 on tablet, 3 from md: up -->
    <div class="highlights-container">
      <div
        v-for="(item, index) in highlights"
        :key="item.label"
        class="highlight-card"
        :class="revealClasses"
        :style="isVisible ? revealStyle(600 + index * 100) : undefined"
      >
        <p class="highlight-card-header">
          <span aria-hidden="true" class="highlight-card-icon">{{
            item.icon
          }}</span>
          <span class="highlight-card-label">{{ item.label }}</span>
        </p>
        <p class="highlight-card-text">{{ item.text }}</p>
      </div>
    </div>
    <!-- end of Highlight Cards -->
  </section>
  <!-- end of About Section -->
</template>

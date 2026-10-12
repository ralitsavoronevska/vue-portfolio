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
  skills,
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

    <!-- start of Header: stacked + centered on mobile, side-by-side from sm: up -->
    <div class="hero-and-skills">
      <div
        :class="revealClasses"
        :style="isVisible ? revealStyle(300) : undefined"
      >
        <HeroImage />
      </div>

      <div class="skills-container">
        <p
          class="skills-container-text"
          :class="revealClasses"
          :style="isVisible ? revealStyle(400) : undefined"
        >
          {{ aboutMeDescription }}
        </p>

        <div
          class="skills-container-skills"
          :class="revealClasses"
          :style="isVisible ? revealStyle(500) : undefined"
        >
          <span v-for="skill in skills" :key="skill" class="skill-pill">
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
    <!-- end of Header -->

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
          <span class="highligh-card-label">{{ item.label }}</span>
        </p>
        <p class="highlight-card-text">{{ item.text }}</p>
      </div>
    </div>
    <!-- end of Highlight Cards -->
  </section>
  <!-- end of About Section -->
</template>

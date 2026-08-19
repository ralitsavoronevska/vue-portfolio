<script setup lang="ts">
import { computed, useTemplateRef } from "vue";
import HeroImage from "./HeroImage.vue";
import { usePortfolioData } from "@/composables/usePortfolioData";
import { useInView } from "@/composables/useInView";

const { aboutMeSubtitle, aboutMeDescription, skills, highlights } =
  usePortfolioData();

const sectionRef = useTemplateRef<HTMLElement>("sectionRef");
const { isVisible } = useInView(sectionRef);

const revealClasses = computed(() => ({
  "transition-all duration-700 ease-out": true,
  "opacity-100 translate-y-0": isVisible.value,
  "opacity-0 translate-y-8": !isVisible.value,
}));

const revealStyle = (delay: number) => ({
  transitionDelay: `${delay}ms`,
});
</script>

<template>
  <!-- start of About Section -->
  <section ref="sectionRef" id="about" class="about-me">
    <!-- headings -->
    <h2
      :class="revealClasses"
      :style="isVisible ? revealStyle(100) : undefined"
    >
      About <span class="gradient-text">Me</span>
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
          <span aria-hidden="true" class="highlight-icon gradient-text">{{
            item.icon
          }}</span>
          <span class="font-bold">{{ item.label }}</span>
        </p>
        <p class="highlight-card-text">{{ item.text }}</p>
      </div>
    </div>
    <!-- end of Highlight Cards -->

    <!-- start of CTA Buttons: 2 on a flex row -->
    <div class="btns-container">
      <a
        href="#projects"
        role="button"
        aria-label="View my Projects"
        :class="revealClasses"
        :style="isVisible ? revealStyle(900) : undefined"
      >
        <button class="btn-styles" type="button">View Projects</button>
      </a>
      <a
        href="https://ralitsavoronevska.com/assets/Ralitsa-Voronevska-CV.pdf"
        target="_blank"
        rel="noopener"
        download="Ralitsa-Voronevska-CV.pdf"
        role="button"
        aria-label="Download my Resume"
        :class="revealClasses"
        :style="isVisible ? revealStyle(1000) : undefined"
      >
        <button class="btn-styles" type="button">Download Resume</button>
      </a>
    </div>
    <!-- end of CTA Buttons -->
  </section>
  <!-- end of About Section -->
</template>

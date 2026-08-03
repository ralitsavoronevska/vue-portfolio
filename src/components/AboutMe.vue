<script setup lang="ts">
import HeroImage from "./HeroImage.vue";
import { usePortfolioData } from "@/composables/usePortfolioData";

const { aboutMeSubtitle, aboutMeDescription, skills, highlights } =
  usePortfolioData();
</script>

<template>
  <!-- start of About Section -->
  <section id="about" class="about-me">
    <!-- headings -->
    <h2>About <span class="gradient-text">Me</span></h2>
    <h3>{{ aboutMeSubtitle }}</h3>

    <!-- Header: stacked + centered on mobile, side-by-side from sm: up -->
    <div class="hero-and-skills">
      <HeroImage />

      <div class="rounded-lg w-full flex-1 shadow-3xl bg-slate-950/75 p-4">
        <p class="mb-6 leading-relaxed text-lg sm:leading-relaxed">
          {{ aboutMeDescription }}
        </p>

        <div class="flex flex-wrap justify-center gap-1.5 sm:justify-start">
          <span
            v-for="skill in skills"
            :key="skill"
            class="rounded-md px-2.5 py-1 text-xs dark:bg-indigo-500 whitespace-nowrap"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>

    <!-- Cards: 1 col on mobile, 2 on tablet, 3 from md: up -->
    <div class="highlights-container">
      <div v-for="item in highlights" :key="item.label" class="highlight-card">
        <p class="highlight-card-header">
          <span aria-hidden="true">{{ item.icon }}</span>
          {{ item.label }}
        </p>
        <p class="highlight-card-text">{{ item.text }}</p>
      </div>
    </div>

    <div class="btns-container">
      <a href="#projects" role="button" aria-label="View my Projects">
        <button class="btn-styles" type="button">View Projects</button>
      </a>
      <a
        href="https://ralitsavoronevska.com/assets/Ralitsa-Voronevska-CV.pdf"
        target="_blank"
        rel="noopener"
        download="Ralitsa-Voronevska-CV.pdf"
        role="button"
        aria-label="Download my Resume"
      >
        <button class="btn-styles" type="button">Download Resume</button>
      </a>
    </div>
  </section>
</template>

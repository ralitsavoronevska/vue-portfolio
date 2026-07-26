<script setup lang="ts">
import HeroImage from "./HeroImage.vue";

// Skill pills — swap/reorder as your stack evolves
const skills = ["Vue 3", "Nuxt v4", "TypeScript", "Pinia", "Tailwind v4"];

// Feature cards — label + one-line description, no more
const highlights = [
  {
    icon: "⚡",
    label: "Performance",
    text: "Faster load times through code-splitting, lazy loading, and smart caching",
  },
  {
    icon: "✨",
    label: "AI-assisted workflow",
    text: "Integrating AI platforms to speed up delivery without compromising code quality",
  },
  {
    icon: "{ }",
    label: "Code quality",
    text: "SOLID principles, design patterns, best practices, clean, and well-documented code",
  },
];
</script>

<template>
  <!-- start of About Section -->
  <section
    id="about"
    class="about-me mx-auto max-w-6xl px-4 py-8 text-slate-900 sm:px-6 md:py-12 lg:px-8 dark:text-slate-100"
  >
    <!-- headings -->
    <h2>About <span class="gradient-text">Me</span></h2>
    <h3>Hi, I'm Ralitsa Voronevska!</h3>

    <!-- Header: stacked + centered on mobile, side-by-side from sm: up -->
    <div
      class="mb-6 flex flex-col items-center gap-4 text-center sm:mb-8 sm:flex-row sm:items-start sm:gap-8 sm:text-left"
    >
      <HeroImage class="object-cover" />

      <div class="rounded-lg w-full flex-1 shadow-3xl bg-slate-950/75 p-4">
        <p class="mb-6 leading-relaxed text-lg sm:leading-relaxed">
          Front-end developer with 6 years of experience building performant,
          scalable, and fully responsive web solutions with a mobile-first
          approach. I focus on writing clean, maintainable code that serves both
          user needs and business goals — and I adapt quickly across different
          codebases and team structures. Since early 2026, I’ve been working on
          refreshing my basic Python skills.
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
    <div class="mb-6 grid grid-cols-1 gap-3 md:grid-cols-3">
      <div
        v-for="item in highlights"
        :key="item.label"
        class="rounded-lg shadow-3xl bg-slate-950/75 p-4"
      >
        <p
          class="mb-1.5 flex items-center gap-1.5 text-xs text-slate-500 sm:text-[13px] dark:text-slate-400"
        >
          <span aria-hidden="true">{{ item.icon }}</span>
          {{ item.label }}
        </p>
        <p class="text-sm leading-relaxed">{{ item.text }}</p>
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

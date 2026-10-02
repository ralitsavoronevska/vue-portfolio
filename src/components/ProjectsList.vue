<template>
  <section id="projects" class="projects">
    <h2>
      {{ projectsTitle }} <span class="gradient-text">{{ projectsTitleHighlight }}</span>
    </h2>

    <p class="projects-section-subtitle">
      {{ projectsSubtitle }}
    </p>

    <section class="project-group">
      <h3>
        <span class="gradient-text">{{ professionalTitle }}</span>
        {{ professionalTitleSuffix }}
      </h3>

      <p class="projects-group-subtitle">
        {{ professionalProjectsSubtitle }}
      </p>

      <ProjectCarousel :projects="professionalProjects" />
    </section>

    <section class="project-group">
      <h3>
        {{ personalTitle }} <span class="gradient-text">{{ personalTitleHighlight }}</span>
        {{ personalTitleSuffix }}
      </h3>

      <p class="projects-group-subtitle">
        {{ personalProjectsSubtitle }}
      </p>

      <ProjectCarousel :projects="personalProjects" />
    </section>
  </section>
</template>

<script setup lang="ts">
import ProjectCarousel from "./ProjectCardCarousel.vue";
import { usePortfolioData } from "@/composables/usePortfolioData";

const {
  projectsTitle,
  projectsTitleHighlight,
  projectsSubtitle,
  professionalTitle,
  professionalTitleSuffix,
  professionalProjectsSubtitle,
  personalTitle,
  personalTitleHighlight,
  personalTitleSuffix,
  personalProjectsSubtitle,
  professionalProjects,
  personalProjects,
} = usePortfolioData();
</script>
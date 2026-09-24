<template>
  <section id="projects" class="projects">
    <h2>
      Selected <span class="gradient-text">Work</span>
    </h2>

    <p class="projects-section-subtitle">
      {{ projectsSubtitle }}
    </p>

    <section class="project-group">
      <h3>
        <span class="gradient-text">Professional</span> Work
      </h3>

      <p class="projects-group-subtitle">
        {{ professionalProjectsSubtitle }} 
      </p>

      <ProjectCarousel :projects="professionalProjects" />
    </section>

    <section class="project-group">
      <h3>
        Selected <span class="gradient-text">Personal</span>
        Projects
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

const { projectsSubtitle, professionalProjectsSubtitle, personalProjectsSubtitle, professionalProjects, personalProjects } = usePortfolioData();
</script>
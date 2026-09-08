<template>
  <section id="projects" class="projects">
    <h2>Selected <span class="gradient-text">Work</span></h2>
    <p class="projects-section-subtitle">{{ projectsSubtitle }}</p>

    <section class="project-group">
      <h3><span class="gradient-text">Professional</span> Work</h3>
      <p class="projects-group-subtitle">
        Projects developed in a professional environment, focused on real
        business requirements and production-ready frontend solutions.
      </p>

      <div class="cards-grid">
        <ProjectCard
          v-for="(project, index) in professionalProjects"
          :key="project.title"
          :image="project.image || ''"
          :title="project.title || ''"
          :description="project.description || ''"
          :icons="project.links || []"
          :techDescription="project.techDescription || ''"
          :techStack="project.techStack"
          :index="index"
        />
      </div>
    </section>

    <section class="project-group">
      <h3>Selected <span class="gradient-text">Personal</span> Projects</h3>
      <p class="projects-group-subtitle">
        Independent projects exploring frontend architecture, APIs, interactive
        interfaces, and modern development practices.
      </p>

      <div class="cards-grid">
        <ProjectCard
          v-for="(project, index) in personalProjects"
          :key="project.title"
          :image="project.image || ''"
          :title="project.title || ''"
          :description="project.description || ''"
          :icons="project.links || []"
          :techDescription="project.techDescription || ''"
          :techStack="project.techStack"
          :index="index"
        />
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import ProjectCard from "./ProjectCard.vue";
import { usePortfolioData } from "@/composables/usePortfolioData";

const { projectsSubtitle, projects } = usePortfolioData();

const professionalProjects = computed(() =>
  projects.filter((project) => project.category === "professional"),
);

const personalProjects = computed(() =>
  projects.filter((project) => project.category === "personal"),
);
</script>

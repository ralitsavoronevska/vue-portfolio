<template>
  <section id="projects" class="projects">
    <h2>My <span class="gradient-text">Projects</span></h2>
    <h3>{{ projectsSubtitle }}</h3>
    <div class="cards-grid">
      <ProjectCard
        v-for="(project, index) in projects"
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
</template>

<script setup lang="ts">
import ProjectCard from "./ProjectCard.vue";
import { usePortfolioData } from "@/composables/usePortfolioData";

const { projectsSubtitle, projects } = usePortfolioData();
</script>

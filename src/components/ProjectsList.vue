<template>
  <section id="projects" class="projects">
    <h2>My <span class="gradient-text">Projects</span></h2>
    <h3>
      My <span class="gradient-text">latest</span> projects built with
      <span class="gradient-text">cutting-edge technologies!</span>
    </h3>
    <div ref="sectionRef" class="cards-grid">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.title"
        :image="project.image || ''"
        :title="project.title || ''"
        :description="project.description || ''"
        :icons="project.links || []"
        :techStack="project.techStack"
        :index="index"
        :isVisible="isVisible"
        class="group"
        :class="[
          isVisible
            ? `opacity-100 translate-y-0 delay-${(index + 1) * 100}`
            : 'opacity-0 translate-y-8',
          'transition-all duration-700 ease-out',
        ]"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useTemplateRef } from "vue";
import ProjectCard from "./ProjectCard.vue";
import { usePortfolioData } from "@/composables/usePortfolioData";
import { useInView } from "@/composables/useInView";

const sectionRef = useTemplateRef<HTMLDivElement>("sectionRef");
const { isVisible } = useInView(sectionRef);

const { projects } = usePortfolioData();
</script>

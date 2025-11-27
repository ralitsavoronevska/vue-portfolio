<template>
  <section
    id="projects"
    class="projects"
  >
    <h2>My <span class="gradient-text">Projects</span></h2>
    <h3>
      My <span class="gradient-text">latest</span> projects built with <span class="gradient-text">cutting-edge technologies!</span>
    </h3>
    <div ref="sectionRef" class="cards-grid">
      <ProjectCard
        v-for="(project, index) in typedProjects"
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
          'transition-all duration-700 ease-out'
        ]" />
    </div>  
  </section>  
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ProjectCard from './ProjectCard.vue'
import { usePortfolioData } from '@/composables/usePortfolioData'
import { useInView } from '@/composables/useInView';
const { sectionRef, isVisible } = useInView()

type Tech = { name: string; file_name: string };
type ProjectLink = {
  name: string;
  url: string;
  file_name: string;
};

type Project = {
  image?: string;
  title?: string;
  description?: string;
  links?: ProjectLink[];
  techStack: Tech[];
};

const { projects } = usePortfolioData();

const typedProjects = computed<Project[]>(() =>
  (projects.value || []).map((p: any) => ({
    ...p,
    techStack: (p?.techStack || []).map((t: any) => {
      if (t && typeof t === 'object') {
        return { name: String(t.name ?? ''), file_name: String(t.file_name ?? '') };
      }
      // if the tech item is a string or other primitive, put it in name and leave file_name empty
      return { name: String(t ?? ''), file_name: '' };
    }),
    links: (p?.links || []).map((l: any) => {
      if (l && typeof l === 'object') {
        return {
          name: String(l.name ?? ''),
          url: String(l.url ?? ''),
          file_name: String(l.file_name ?? ''),
        };
      }
      return { name: String(l ?? ''), url: '', file_name: '' };
    }),
  }))
);
</script>
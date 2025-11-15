<template>
  <section
    ref="sectionRef"
    id="projects"
    class="projects-section flex flex-col text-center relative mx-3 py-16"
  >
    <h2 class="display-2 leading-[1.2] mb-2">
      My <span class="gradient-text">Projects</span>
    </h2>
    <h3 class="sm-heading mt-2 mb-4">
      My <span class="gradient-text">FCC</span> Responsive Web Design Certification Projects
    </h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <ProjectCard
        v-for="(project, index) in typedProjects"
        :key="project.title"
        :image="project.image || ''"
        :title="project.title || ''"
        :description="project.description || ''"
        :links="project.links || []"
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
import { computed, ref, onMounted } from 'vue';
import ProjectCard from './ProjectCard.vue';
import { usePortfolioData } from '@/composables/usePortfolioData';

type Tech = { name: string; svg: string };
type ProjectLink = {
  name: string;
  url: string;
  svg: string;
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
        return { name: String(t.name ?? ''), svg: String(t.svg ?? '') };
      }
      // if the tech item is a string or other primitive, put it in name and leave svg empty
      return { name: String(t ?? ''), svg: '' };
    }),
    links: (p?.links || []).map((l: any) => {
      if (l && typeof l === 'object') {
        return {
          name: String(l.name ?? ''),
          url: String(l.url ?? ''),
          svg: String(l.svg ?? ''),
        };
      }
      return { name: String(l ?? ''), url: '', svg: '' };
    }),
  }))
);

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

// Scroll trigger
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (entry?.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.1 }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})
</script>
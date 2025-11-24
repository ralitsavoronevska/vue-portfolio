<template>
  <section
    ref="sectionRef"
    id="projects"
    class="projects-section flex flex-col items-center justify-center text-center relative mx-3 pt-20 pb-20 scroll-mt-40"
  >
    <h2 class="text-4xl md:text-5xl mb-4">My <span class="bg-linear-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">Projects</span></h2>
    <h3 class="text-2xl md:text-3xl lg:text-4xl mt-4 mb-6">
      My <span class="bg-linear-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">latest</span> projects built with <span class="bg-linear-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">cutting-edge technologies!</span>
    </h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
import { computed, ref, onMounted } from 'vue';
import ProjectCard from './ProjectCard.vue';
import { usePortfolioData } from '@/composables/usePortfolioData';

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
      // if the tech item is a string or other primitive, put it in name and leave svg empty
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

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

// Scroll trigger
onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry?.isIntersecting) isVisible.value = true
  })
  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})
</script>
<template>
  <section id="projects" class="projects">
    <h2>My <span class="gradient-text">Projects</span></h2>
    <h3>
      My <span class="gradient-text">latest</span> projects built with
      <span class="gradient-text">cutting-edge technologies!</span>
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
          'transition-all duration-700 ease-out',
        ]"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, useTemplateRef } from "vue";
import ProjectCard from "./ProjectCard.vue";
import { usePortfolioData } from "@/composables/usePortfolioData";
import { useInView } from "@/composables/useInView";

const sectionRef = useTemplateRef<HTMLDivElement>("sectionRef");
const { isVisible } = useInView(sectionRef);

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
  (projects.value || []).map((p: unknown) => {
    const obj = p as Record<string, unknown>;
    const rawTech = (obj?.techStack ?? []) as unknown[];
    const rawLinks = (obj?.links ?? []) as unknown[];

    return {
      image: String(obj.image ?? ""),
      title: String(obj.title ?? ""),
      description: String(obj.description ?? ""),
      techStack: rawTech.map((t: unknown) => {
        if (t && typeof t === "object") {
          const tt = t as Record<string, unknown>;
          return {
            name: String(tt.name ?? ""),
            file_name: String(tt.file_name ?? ""),
          };
        }
        return { name: String(t ?? ""), file_name: "" };
      }) as Tech[],
      links: rawLinks.map((l: unknown) => {
        if (l && typeof l === "object") {
          const ll = l as Record<string, unknown>;
          return {
            name: String(ll.name ?? ""),
            url: String(ll.url ?? ""),
            file_name: String(ll.file_name ?? ""),
          };
        }
        return { name: String(l ?? ""), url: "", file_name: "" };
      }) as ProjectLink[],
    } as Project;
  }),
);
</script>

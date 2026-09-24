<template>
  <!-- start of Project Card -->
  <article
    ref="cardRef"
    class="group transition-all duration-700 ease-out"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    :style="isVisible ? { transitionDelay: `${(index + 1) * 100}ms` } : {}"
  >
    <div class="card">
      <!-- Project Image -->
      <img
        :src="projectImage(image)"
        :alt="description"
        :class="projectImageClass(image, title)"
        loading="lazy"
      />

      <div class="card-body">
        <!-- Title -->
        <h4 class="card-title gradient-text">{{ title }}</h4>

        <!-- Description -->
        <p class="card-desc">{{ description }}</p>

        <!-- Tech Description -->
        <p class="card-tech-desc">{{ techDescription }}</p>

        <!-- start of glow-icons -->
        <div
          class="glow-icons"
          :class="
              techStack.length === 7
                ? 'gap-1.5 md:gap-1.75 lg:gap-2.5'
                : techStack.length === 5
                  ? 'gap-3.5 md:gap-4.5 lg:gap-6'
                  : 'gap-3.5 md:gap-4 lg:gap-4.5'
            "
        >
          <!-- Glow Icons -->
          <GlowIcons
            v-for="(tech, i) in techStack"
            :key="tech.name"
            :tech="tech"
            :index="i"
            :iconSizes="`w-9.5 h-9.5 rounded-xl`"
            :imgSizes="`w-9.5 h-9.5 rounded-xl`"
            :isVisible="isVisible"
          />
        </div>
        <!-- end of glow-icons -->

        <!-- start of social-links -->
        <div class="social-icons">
          <SocialIcons :icons="icons" :aria="title" />
        </div>
        <!-- end of social-links -->
      </div>
    </div>
  </article>
  <!-- end of Project Card -->
</template>

<script setup lang="ts">
import commingSoonImg from "@/assets/projects/coming-soon.webp";
import SocialIcons from "./SocialIcons.vue";
import GlowIcons from "./GlowIcons.vue";
import { useInView } from "@/composables/useInView";
import { useTemplateRef } from "vue";

import type { Project } from '@/data/portfolio'

const props = defineProps<{
  project?: Project;
  index?: number;
}>();

const cardRef = useTemplateRef<HTMLDivElement>("cardRef");
const { isVisible } = useInView(cardRef);

// safe locals for template usage
const index = props.index ?? 0;
const project = props.project ?? { image: '', title: '', description: '', techDescription: '', techStack: [], links: [] } as Project;
const image = project.image ?? "";
const techStack = project.techStack ?? [];
const icons = project.links ?? [];
const title = project.title ?? "";
const description = project.description ?? "";
const techDescription = project.techDescription ?? "";

const projectImage = (image: string) => (image ? image : commingSoonImg);

  const projectImageClass = (image: string, title: string) => {
    const imageTitle = title.toLowerCase().replace(/\s+/g, "-");
    return image ? `card-img card-img-${imageTitle}` : "card-img coming-soon-img";
  }
</script>

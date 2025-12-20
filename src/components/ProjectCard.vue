<template>
  <!-- start of Project Card -->
  <article
    class="group"
    :class="[
      isVisible
        ? `opacity-100 translate-y-0 delay-${(index + 1) * 100}`
        : 'opacity-0 translate-y-8',
      'transition-all duration-700 ease-out',
    ]"
  >
    <div class="card">
      <!-- Project Image -->
      <img
        :src="projectImage(image)"
        :alt="description"
        class="card-img"
        loading="lazy"
      />

      <div class="card-body">
        <!-- Title -->
        <h4 class="card-title gradient-text">{{ title }}</h4>

        <!-- Description -->
        <p class="card-desc">{{ description }}</p>

        <!-- start of glow-icons -->
        <div
          ref="sectionRef"
          class="glow-icons"
          :class="techStack.length > 5 ? 'gap-2' : 'gap-3'"
        >
          <!-- Glow Icons -->
          <GlowIcons
            v-for="(tech, i) in techStack"
            :key="tech.name"
            :tech="tech"
            :index="i"
            :iconSizes="`w-11 h-11 rounded-xl`"
            :imgSizes="`w-11 h-11 rounded-xl`"
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
import SocialIcons from "./SocialIcons.vue";
import GlowIcons from "./GlowIcons.vue";
import { useInView } from "@/composables/useInView";

const props = defineProps<{
  image?: string;
  title?: string;
  description?: string;
  icons?: Array<{ name: string; url: string; file_name: string }>;
  techStack?: Array<{ name: string; file_name: string }>;
  index?: number;
}>();

const { sectionRef, isVisible } = useInView();

// safe locals for template usage
const index = props.index ?? 0;
const image = props.image ?? "";
const techStack = props.techStack ?? [];
const icons = props.icons ?? [];
const title = props.title ?? "";
const description = props.description ?? "";

const projectImage = (image: string) =>
  image ? image : "src/assets/projects/coming-soon.webp";
</script>

<script setup lang="ts">
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
import "vue3-carousel/carousel.css";

import ProjectCard from "./ProjectCard.vue";
import type { Project } from "@/data/portfolio";

defineProps<{
  projects: Project[];
}>();

const carouselConfig = {
  itemsToShow: 1,
  itemsToScroll: 1,
  gap: 0,
  snapAlign: "center" as const,
  wrapAround: false,
  touchDrag: true,
  mouseDrag: true,
  preventExcessiveDragging: true,

  breakpoints: {
    768: {
      itemsToShow: 2,
      gap: 24,
      snapAlign: "start" as const,
    },
    1280: {
      itemsToShow: 3,
      gap: 24,
      snapAlign: "start" as const,
    },
  },
};
</script>

<template>
  <Carousel v-bind="carouselConfig" class="project-carousel">
    <Slide
      v-for="(project, index) in projects"
      :key="project.title"
      class="cards-grid"
    >
      <div class="project-carousel__card-wrapper">
        <ProjectCard :project="project" :index="index" />
      </div>
    </Slide>

    <template #addons>
      <div class="project-carousel__controls">
        <Navigation />
        <Pagination paginate-by-items-to-show />
      </div>
    </template>
  </Carousel>
</template>

<style scoped>
@reference "../assets/css/main.css";

/* ========================================
   Project Carousel
======================================== */

.project-carousel {
  @apply w-full min-w-0 max-w-full lg:mx-auto lg:max-w-225 xl:max-w-300;
}

.project-carousel__card-wrapper {
  @apply box-border w-full min-w-0 px-2 py-3;
}

.project-carousel__card-wrapper > * {
  @apply w-full min-w-0;
}

/* ========================================
   Carousel Controls
======================================== */

.project-carousel__controls {
  @apply relative mt-5 flex min-h-11 items-center justify-center
         gap-32 xl:hidden;
}

/* ========================================
   Previous / Next Buttons
======================================== */

.project-carousel__controls :deep(.carousel__prev),
.project-carousel__controls :deep(.carousel__next) {
  @apply static m-0 h-10 w-10 shrink-0 rounded-full border
         bg-[#ccc] text-brand-indigo;

  border-color: var(--color-brand-indigo);
  transform: none;

  box-shadow:
    0 0 12px var(--color-brand-glow),
    inset 0 0 8px var(--color-indigo-glow);

  transition:
    color 200ms ease,
    border-color 200ms ease,
    background 200ms ease,
    box-shadow 200ms ease,
    transform 200ms ease;
}

/* Order: previous → pagination → next */

.project-carousel__controls :deep(.carousel__prev) {
  @apply order-1;
}

.project-carousel__controls :deep(.carousel__next) {
  @apply order-3;
}

/* ========================================
   Arrow Icons
======================================== */

.project-carousel__controls :deep(.carousel__icon) {
  @apply h-5 w-5;
}

/* ========================================
   Arrow Hover
======================================== */

.project-carousel__controls :deep(.carousel__prev:hover:not(:disabled)),
.project-carousel__controls :deep(.carousel__next:hover:not(:disabled)) {
  @apply -translate-y-0.5 bg-white text-brand-indigo;

  border-color: var(--color-brand-indigo);

  box-shadow:
    0 0 18px var(--color-pink-glow-strong),
    0 0 30px var(--color-indigo-glow);
}

/* ========================================
   Keyboard Focus
======================================== */

.project-carousel__controls :deep(.carousel__prev:focus-visible),
.project-carousel__controls :deep(.carousel__next:focus-visible),
.project-carousel__controls :deep(.carousel__pagination-button:focus-visible) {
  outline: 2px solid var(--color-brand-glow);
  outline-offset: 3px;
}

/* ========================================
   Disabled Arrows
======================================== */

.project-carousel__controls :deep(.carousel__prev:disabled),
.project-carousel__controls :deep(.carousel__next:disabled) {
  @apply cursor-default opacity-35 shadow-none;
}

/* ========================================
   Pagination
======================================== */

.project-carousel__controls :deep(.carousel__pagination) {
  @apply order-2 m-0 flex items-center gap-[0.4rem] px-1;
}

.project-carousel__controls :deep(.carousel__pagination-button) {
  @apply relative h-[0.55rem] w-[0.55rem] rounded-full border-0
         bg-white p-0;

  transition:
    width 200ms ease,
    background 200ms ease,
    box-shadow 200ms ease,
    transform 200ms ease;
}

/* ========================================
   Active Pagination
======================================== */

.project-carousel__controls
  :deep(.carousel__pagination-button--active) {
  @apply w-6 bg-linear-to-r from-pink-500 to-indigo-500;

  box-shadow: var(--shadow-3xl);
}

/* ========================================
   Pagination Hover
======================================== */

.project-carousel__controls
  :deep(
    .carousel__pagination-button:hover:not(
      .carousel__pagination-button--active
    )
  ) {
  @apply scale-115 bg-brand-pink;

  box-shadow: var(--shadow-3xl);
}

/* ========================================
   Reduced Motion
======================================== */

@media (prefers-reduced-motion: reduce) {
  .project-carousel__controls :deep(.carousel__prev),
  .project-carousel__controls :deep(.carousel__next),
  .project-carousel__controls :deep(.carousel__pagination-button) {
    transition: none;
  }
}
</style>
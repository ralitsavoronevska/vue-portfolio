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
.project-carousel {
  width: 100%;
  min-width: 0;
  max-width: 100%;
}

.project-carousel__card-wrapper {
  width: 100%;
  min-width: 0;
  padding: 0.75rem 0.5rem;
  box-sizing: border-box;
}

.project-carousel__card-wrapper > * {
  width: 100%;
  min-width: 0;
}

/* Carousel controls */

.project-carousel__controls {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;
  margin-top: 1.25rem;
  min-height: 2.75rem;
}

/* Previous / Next */

.project-carousel__controls :deep(.carousel__prev),
.project-carousel__controls :deep(.carousel__next) {
  position: static;
  order: initial;
  transform: none;

  width: 2.5rem;
  height: 2.5rem;
  margin: 0;
  flex-shrink: 0;

  border: 1px solid #615fff;
  border-radius: 9999px;

  color: #615fff;

  background: #ccc;

  box-shadow:
    0 0 12px oklch(71.8% 0.202 349.761 / 0.25),
    inset 0 0 8px rgb(97 95 255 / 12%);

  transition:
    color 200ms ease,
    border-color 200ms ease,
    background 200ms ease,
    box-shadow 200ms ease,
    transform 200ms ease;
}

/* Order: previous → pagination → next */

.project-carousel__controls :deep(.carousel__prev) {
  order: 1;
}

.project-carousel__controls :deep(.carousel__pagination) {
  order: 2;

  display: flex;
  align-items: center;
  gap: 0.4rem;

  margin: 0;
  padding: 0 0.25rem;
}

.project-carousel__controls :deep(.carousel__next) {
  order: 3;
}

/* Arrow icons */

.project-carousel__controls :deep(.carousel__icon) {
  width: 1.25rem;
  height: 1.25rem;
}

/* Arrow hover */

.project-carousel__controls :deep(.carousel__prev:hover:not(:disabled)),
.project-carousel__controls :deep(.carousel__next:hover:not(:disabled)) {
  color: #615fff;
  border-color: #615fff;

  background: white;

  box-shadow:
    0 0 18px rgb(217 70 239 / 32%),
    0 0 30px rgb(99 102 241 / 12%);

  transform: translateY(-2px);
}

/* Keyboard focus */

.project-carousel__controls :deep(.carousel__prev:focus-visible),
.project-carousel__controls :deep(.carousel__next:focus-visible),
.project-carousel__controls :deep(.carousel__pagination-button:focus-visible) {
  outline: 2px solid oklch(71.8% 0.202 349.761 / 0.25);
  outline-offset: 3px;
}

/* Disabled arrows */

.project-carousel__controls :deep(.carousel__prev:disabled),
.project-carousel__controls :deep(.carousel__next:disabled) {
  opacity: 0.35;
  cursor: default;
  box-shadow: none;
}

/* Pagination */

.project-carousel__controls :deep(.carousel__pagination-button) {
  position: relative;

  width: 0.55rem;
  height: 0.55rem;
  padding: 0;

  border: 0;
  border-radius: 9999px;

  background: white;

  transition:
    width 200ms ease,
    background 200ms ease,
    box-shadow 200ms ease,
    transform 200ms ease;
}

/* Active pagination */

.project-carousel__controls
  :deep(.carousel__pagination-button--active) {
  width: 1.5rem;

  background: linear-gradient(to right, oklch(0.656 0.241 354.308) 0%, oklch(0.585 0.233 277.117) 100%);

  box-shadow: 3px 3px 12px oklch(71.8% 0.202 349.761 / 0.25);
}

/* Pagination hover */

.project-carousel__controls
  :deep(
    .carousel__pagination-button:hover:not(
      .carousel__pagination-button--active
    )
  ) {
  background: #f6339a;
  box-shadow: 3px 3px 12px oklch(71.8% 0.202 349.761 / 0.25);
  transform: scale(1.15);
}

/* Desktop: all projects are visible */

@media (min-width: 1024px) {
  .project-carousel {
    max-width: 900px;
    margin-inline: auto;
  }
}

@media (min-width: 1280px) {
  .project-carousel {
    max-width: 1200px;
    margin-inline: auto;
  }

  .project-carousel__controls {
    display: none;
  }
}
</style>
<template>
  <div
    class="glow-box group"
    :class="[
      isVisible
        ? `opacity-100 scale-100 translate-y-0 delay-${(index + 1) * 100}`
        : 'opacity-0 scale-75 translate-y-4',
      'transition-all duration-500 ease-out',
      boxSizes,
    ]"
    tabindex="0"
    role="img"
    :aria-label="`${tech.name} Logo`"
  >
    <div class="glow-icon" :class="`${iconSizes}`">
      <img
        :src="iconSrc"
        :alt="`${tech.name} Logo`"
        class="glow-img text-3xl p-2"
        :class="`${imgSizes}`"
        loading="lazy"
      />
    </div>

    <!-- start of tooltip -->
    <span
      class="tooltip group-hover/tech:opacity-100 group-hover/tech:visible group-hover/tech:translate-y-0 group-focus/tech:opacity-100 group-focus/tech:visible group-focus/tech:translate-y-0"
    >
      {{ tech.name }}
    </span>
    <!-- end of tooltip -->
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

// Pre-load all icons at build time (executed once, not per instance)
const icons = import.meta.glob("@/assets/icons/*.svg", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const { tech, index, boxSizes, iconSizes, imgSizes, isVisible } = defineProps<{
  tech: { name: string; file_name: string };
  index: number;
  boxSizes?: string;
  iconSizes: string;
  imgSizes: string;
  isVisible: boolean;
}>();

// Compute src (ensure the computed returns a string)
const iconSrc = computed<string>(() => {
  const path = `/src/assets/icons/${tech.file_name}.svg`;
  return icons[path] ?? "";
});
</script>

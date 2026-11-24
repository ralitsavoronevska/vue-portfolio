<template>
  <div
    class="glow-box group/tech transition-all duration-500 ease-out
      motion-reduce:opacity-100 motion-reduce:scale-100
      motion-reduce:translate-y-0 motion-reduce:transition-none
      focus-visible:outline-2 focus-visible:outline-offset-4
      focus-visible:outline-pink-400"
    :class="[
      isVisible
        ? 'opacity-100 scale-100 translate-y-0'
        : 'opacity-0 scale-75 translate-y-4',
      boxSizes,
    ]"
    :style="
      isVisible
        ? { transitionDelay: `${(index + 1) * 100}ms` }
        : undefined
    "
    tabindex="0"
    role="img"
    :aria-label="`${tech.name} Logo`"
  >
    <div class="glow-icon" :class="iconSizes">
      <img
        :src="iconSrc"
        :alt="`${tech.name} Logo`"
        class="glow-img text-3xl p-2"
        :class="imgSizes"
        loading="lazy"
      />
    </div>

    <!-- start of tooltip -->
    <span
      class="tooltip
        group-hover/tech:opacity-100
        group-hover/tech:visible
        group-hover/tech:translate-y-0
        group-focus/tech:opacity-100
        group-focus/tech:visible
        group-focus/tech:translate-y-0
        motion-reduce:translate-y-0
        motion-reduce:transition-none"
    >
      {{ tech.name }}
    </span>
    <!-- end of tooltip -->
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

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

const iconSrc = computed<string>(() => {
  const path = `/src/assets/icons/${tech.file_name}.svg`;
  return icons[path] ?? "";
});
</script>
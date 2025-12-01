<template>
  <div
    class="glow-box group"
    :class="[
      isVisible
        ? `opacity-100 scale-100 translate-y-0 delay-${(index + 1) * 100}`
        : 'opacity-0 scale-75 translate-y-4',
      'transition-all duration-500 ease-out'
    , boxSizes]"
    tabindex="0"
    role="img"
    :aria-label="`${tech.name} Logo`"
  >
    <div
      class="glow-icon"      
      :class="`${iconSizes}`"          
    >
      <iconify-icon :icon="iconifyIcon" inline class="glow-img p-2" width="1.875rem" height="1.875rem"></iconify-icon>
    </div>

    <!-- start of tooltip -->
    <span
      class="tooltip 
      group-hover/tech:opacity-100 group-hover/tech:visible group-hover/tech:translate-y-0 
      group-focus/tech:opacity-100 group-focus/tech:visible group-focus/tech:translate-y-0"
    >
      {{ tech.name }}
    </span>
    <!-- end of tooltip -->

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  tech: { name: string; file_name: string };
  index: number;
  boxSizes?: string;
  iconSizes: string;
  isVisible: boolean;
}>()

const iconifyIcon = computed(() => {
  if (props.tech.file_name === 'pinia') {
    return `logos:${props.tech.file_name}`
  } else if (props.tech.file_name === 'gulp' || props.tech.file_name === 'express') {
    return `simple-icons:${props.tech.file_name}`
  } else {
    return `devicon:${props.tech.file_name}`
  }
})

</script>
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
      <img
        :src="`/assets/icons/${tech.file_name}.svg`"
        :alt="`${tech.name} Logo`"
        class="glow-img" 
        :class="`${imgSizes}`"
        loading="lazy"
      />
    </div>

    <!-- start of tooltip -->
    <span
      class="tooltip 
      group-hover/tech:opacity-100 group-hover/tech:visible group-hover/tech:translate-y-0 
      group-focus/tech:opacity-100 group-focus/tech:visible group-focus/tech:translate-y-0"
    >
      {{ tech.name }}
      <span
        class="tooltip-arrow"
      ></span>
    </span>
    <!-- end of tooltip -->

  </div>
</template>

<script setup lang="ts">
defineProps<{
  tech: { name: string; file_name: string };
  index: number;
  boxSizes?: string;
  iconSizes: string;
  imgSizes: string
  isVisible: boolean;
}>()
</script>
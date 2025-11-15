<template>
  <div
    class="group/tech relative center glow-icon cursor-pointer"
    :class="[
      isVisible
        ? `opacity-100 scale-100 translate-y-0 delay-${(index + 1) * 100}`
        : 'opacity-0 scale-75 translate-y-4',
      'transition-all duration-500 ease-out'
    ]"
    tabindex="0"
    role="img"
    :aria-label="`${tech.name} Logo`"
  >
    <div
      class="glow-box-parent center
              bg-white/10 backdrop-blur-sm
              shadow-[0_0_5px_var(--dark-overlay),0_0_10px_var(--dark-overlay)]
              animate-pulse hover:animate-none
              transition-all duration-300
              hover:shadow-[0_0_10px_var(--text-color)]
              hover:scale-110"        
    >
      <img
        :src="`/assets/icons/${tech.svg}.svg`"
        :alt="`${tech.name} Logo`"
        class="w-6 h-6 md:w-7 md:h-7 lg:w-9 lg:h-9"
        loading="lazy"
      />
    </div>

    <!-- start of tooltip -->
    <span
      class="tooltip pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2
              bg-black text-white text-xs px-2 py-1 rounded-xl
              opacity-0 invisible translate-y-2
              group-hover/tech:opacity-100 group-hover/tech:visible group-hover/tech:translate-y-0
              group-focus/tech:opacity-100 group-focus/tech:visible group-focus/tech:translate-y-0
              transition-all duration-300 z-10 whitespace-nowrap"
    >
      {{ tech.name }}
      <span
        class="absolute bottom-[-7px] left-1/2 -translate-x-1/2
                w-0 h-0 border-4 border-transparent border-t-black"
      ></span>
    </span>
    <!-- end of tooltip -->

  </div>
</template>

<script setup lang="ts">
defineProps<{
  tech: { name: string; svg: string };
  index: number;
  isVisible: boolean;
}>()
</script>

<style scoped>
/* Custom CSS for 3D tilt + pulse */
.glow-box-parent {
  transform-style: preserve-3d;
  transition: transform 0.3s ease;
}

.group {
  &:hover, &:focus {
    .glow-box-parent {
      transform: perspective(1000px) rotateX(10deg) rotateY(10deg) scale(1.1);
    }
  }
}

@keyframes pulse-custom {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.animate-pulse-custom {
  animation: pulse-custom 2s infinite;
}

.tooltip {
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border: 5px solid transparent;
    border-top-color: black;
  }
}
</style>
<template>
  <div
    class="group/tech relative flex items-center justify-center glow-box cursor-pointer"
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
      class="glow-icon flex items-center justify-center
              bg-white/10 backdrop-blur-sm
              animate-pulse hover:animate-none
              transition-all duration-300
              hover:shadow-[0_0_10px_rgba(255,255,255,1)]
              hover:scale-110"      
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
  tech: { name: string; file_name: string };
  index: number;
  boxSizes?: string;
  iconSizes: string;
  imgSizes: string
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
<template>
  <!-- start of Project Card -->
  <article
    class="group"
    :class="[
      isVisible
        ? `opacity-100 translate-y-0 delay-${(index + 1) * 100}`
        : 'opacity-0 translate-y-8',
      'transition-all duration-700 ease-out'
    ]"
  >
    <div
      class="card bg-slate-950/75 rounded-3xl p-4 
              shadow-3xl transition-all duration-300
              hover:scale-[1.02] hover:-translate-y-1"
    >
      <!-- Project Image -->
      <img
        :src="projectImage(image)"
        :alt="description"
        class="w-full h-70 md:h-80 object-cover rounded-2xl mb-6"
        loading="lazy"
      />

      <div class="space-y-4">

        <!-- Title -->
        <h4 class="text-2xl font-bold bg-linear-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">{{ title }}</h4>

        <!-- Description -->
        <p class="font-semibold text-lg">{{ description }}</p>

        <!-- start of glow-icons -->
        <div ref="iconsRef" class="glow-icons flex items-center justify-center flex-wrap gap-4">
          <!-- Glow Icons -->
          <GlowIcon v-for="(tech, i) in techStack"
            :key="tech.name"
            :tech="tech"
            :index="i"
            :iconSizes="`w-11 h-11 rounded-3xl`"
            :imgSizes="`w-6 h-6 md:w-7 md:h-7`"
            :isVisible="isVisible"
            />
        </div>
        <!-- end of glow-icons -->  
        
        <!-- start of social-links -->
        <div class="flex items-center justify-center gap-10 p-3">
          <SocialIcons :icons="icons" :aria="title" />
        </div>
        <!-- end of social-links -->

      </div>
    </div>

  </article>    
  <!-- end of Project Card -->
</template>

<script setup lang="ts">
import SocialIcons from './SocialIcons.vue'
import GlowIcon from './GlowIcon.vue';

defineProps<{
  image: string
  title: string
  description: string
  icons: Array<{ name: string; url: string; file_name: string }>
  techStack: Array<{ name: string; file_name: string }>
  index: number
  isVisible: boolean
}>()

const projectImage = (image: string) => image ? image : '/assets/projects/coming-soon.webp';
</script>
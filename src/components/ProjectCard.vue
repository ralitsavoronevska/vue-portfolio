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
      class="card important-el rounded-3xl p-4 
              shadow-lg hover:shadow-2xl transition-all duration-300
              hover:scale-[1.02] hover:-translate-y-1
              focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
    >
      <!-- Project Image -->
      <img
        :src="projectImage(image)"
        :alt="description"
        class="w-full h-85 object-cover rounded-2xl mb-4"
        loading="lazy"
      />

      <div class="space-y-4">

        <!-- Title -->
        <h4 class="text-2xl font-bold gradient-text">{{ title }}</h4>

        <!-- Description -->
        <p class="font-semibold text-lg">{{ description }}</p>

        <!-- start of glow-icons -->
        <div ref="iconsRef" class="glow-icons flex justify-center flex-wrap" :class="techStack.length > 5 ? 'gap-2' : 'gap-3'">
          <!-- Glow Icons -->
          <GlowIcon v-for="(tech, i) in techStack"
            :key="tech.name"
            :tech="tech"
            :index="i"
            :isVisible="isVisible"
            />
        </div>
        <!-- end of glow-icons -->  
        
        <!-- start of social-links -->
        <div class="center gap-5 p-3">
          <!-- Social Links -->
          <Links :links="links" :aria="title" />
        </div>
        <!-- end of social-links -->

      </div>
    </div>

  </article>    
  <!-- end of Project Card -->
</template>

<script setup lang="ts">
import Links from './Links.vue'
import GlowIcon from './GlowIcon.vue';

defineProps<{
  image: string
  title: string
  description: string
  links: Array<{ name: string; url: string; svg: string }>
  techStack: Array<{ name: string; svg: string }>
  index: number
  isVisible: boolean
}>()

const projectImage = (image: string) => image ? image : '/assets/projects/coming-soon.webp';

</script>

<style scoped>
.important-el {
  background: rgba(30, 22, 33, .85);
  box-shadow: .1875rem .1875rem .75rem rgba(248, 99, 189, .25); /* 3px 3px 12px */
}

.card {
  &:hover {
    box-shadow: 0 .4375rem 3.125rem .625rem #ffffff44; /* 0 7px 50px 10px */
    transform: scale(1.015);
  }
  .card-img-top {
    height: calc(100% - 6.8rem);
    object-fit: cover;
  }
}
</style>
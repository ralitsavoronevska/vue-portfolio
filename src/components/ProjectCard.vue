<template>
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
      class="card rounded-3xl p-4 important-el backdrop-blur-sm
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

        <!-- Tech Stack (Glow Icons) -->
        <div class="flex justify-center gap-3 flex-wrap" ref="iconsRef">
          <div
            v-for="tech in techStack"
            :key="tech.name"
            class="group/tech relative"
            tabindex="0"
          >
            <div
              class="w-10 h-10 rounded-3xl flex items-center justify-center
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
                class="w-6 h-6"
                loading="lazy"
              />
            </div>
            <span
              class="tooltip pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2
                      bg-gray-900 text-white text-xs px-2 py-1 rounded-xl
                      opacity-0 invisible translate-y-2
                      group-hover/tech:opacity-100 group-hover/tech:visible group-hover/tech:translate-y-0
                      group-focus/tech:opacity-100 group-focus/tech:visible group-focus/tech:translate-y-0
                      transition-all duration-300 z-10 whitespace-nowrap"
            >
              {{ tech.name }}
              <span
                class="absolute bottom-[-7px] left-1/2 -translate-x-1/2
                        w-0 h-0 border-4 border-transparent border-t-gray-900"
              ></span>
            </span>
          </div>
        </div>

        <!-- Links -->
        <div class="center gap-5 p-3">
          <Links :links="links" :aria="title" />
        </div>
      </div>
    </div>
  </article>    
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Links from './Links.vue'

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


const iconsRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (entry?.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.3 }
  )

  if (iconsRef.value) observer.observe(iconsRef.value)
})
</script>

<style scoped>
.important-el {
  background: rgba(30, 22, 33, .85);
  box-shadow: .1875rem .1875rem .75rem rgba(248, 99, 189, .25); /* 3px 3px 12px */
}

.card-img-top {
  height: calc(100% - 6.8rem);
}
</style>
<template>
  <div
    class="scroll-to-top"
    :data-active="visible"
    @click="scrollToTop"
    v-if="visible"
  >
    <img src="/assets/icons/home-btn.svg" class="w-8 h-8" alt="Scroll to Top" loading="lazy" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)
let ticking = false

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const update = () => {
  visible.value = window.scrollY > 500
  ticking = false
}

let onScroll: () => void

onMounted(() => {
  onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(update)
      ticking = true
    }
  }
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
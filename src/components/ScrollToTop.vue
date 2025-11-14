<template>
  <div class="scrollToTop w-16 h-16 fixed center rounded-full cursor-pointer transition-discrete z-1000" v-if="visible" :class="{ active: visible }"
      @click="scrollToTop">
    <img src="../assets/icons/home-btn.svg" alt="Scroll to Top" 
      class="w-10 h-10"
    >
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
  visible.value = window.scrollY > 400
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

<style scoped>
.scrollToTop {
  bottom: 50rem; /* 800px */
  right: 1.25rem; /* 20px */
  background-color: var(--color-purple);
  visibility: hidden;
  opacity: 0;
  transform: translateY(30%);
  transition: .5s;
  box-shadow: 0 .625rem 3.125rem .625rem rgba(255, 255, 255, .35); /* 0 16px 50px 16px */
  &.active { 
    visibility: visible; 
    opacity: 1; 
    bottom: 10%; 
  }
  &:hover, &:focus { 
    background-image: linear-gradient(90deg, var(--color-pink), var(--color-purple) 75%);
  }
}
</style>
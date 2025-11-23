<template>
  <div
    class="flex items-center justify-center fixed bottom-[800px] right-5 w-16 h-16 rounded-full cursor-pointer z-1000
           bg-indigo-500 opacity-0 invisible translate-y-[30%] 
           transition-all duration-500 ease-out shadow-[0_16px_50px_16px_rgba(255,255,255,0.35)]
           hover:bg-linear-90 hover:from-pink-500 hover:to-indigo-550 hover:to-75%
           focus:bg-linear-90 focus:from-pink-500 focus:to-indigo-550 focus:to-75%
           data-[active=true]:visible data-[active=true]:opacity-100 data-[active=true]:bottom-[10%]"
    :data-active="visible"
    @click="scrollToTop"
    v-if="visible"
  >
    <img src="/assets/icons/home-btn.svg" class="w-10 h-10" alt="Scroll to Top" loading="lazy" />
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
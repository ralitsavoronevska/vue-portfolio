<template>
  <div
    class="fixed bottom-[800px] right-5 w-16 h-16 rounded-full cursor-pointer z-1000
           bg-purple opacity-0 invisible translate-y-[30%] 
           transition-all duration-500 ease-out shadow-[0_16px_50px_16px_rgba(255,255,255,0.35)]
           hover:bg-linear-to-r hover:from-pink hover:to-purple
           focus:bg-linear-to-r focus:from-pink focus:to-purple
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
<template>
  <h2 class="sm-heading info leading-[1.2] font-bold text-left mb-6 pl-4 md:pl-[68px] lg:pl-[100px]">
    The <span ref="typedEl" class="typed-text gradient-text"></span>
    <span class="cursor animate-pulse">|</span>
  </h2>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTypewriter } from '../composables/useTypewriter'

const typedEl = ref<HTMLElement | null>(null)

const texts = [
  'Mid Front-end Dev',
  'Technical Recruiter',
  'Project Manager',
  'Survey Programmer',
  'Psychologist',
] as const

useTypewriter(typedEl, { texts, pause: 3000 })
</script>

<style scoped>
.cursor {
  opacity: 0;
  color: var(--purple);
  animation: blink 1s step-end infinite;
}
@keyframes blink {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}
</style>
<template>
  <h2 class="sm-heading info leading-[1.2] font-bold text-left mb-6 pl-4 md:pl-17 lg:pl-25">
    The
    <span ref="typedEl" class="typed-text bg-linear-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent inline-block min-w-[12ch]">
      {{ displayedText }}
    </span>
  </h2>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const typedEl = ref<HTMLElement | null>(null)
const displayedText = ref('')

const texts = [
  'Mid Front-end Dev',
  'Technical Recruiter',
  'Project Manager',
  'Survey Programmer',
  'Psychologist',
] as const

let index = 0
let char = 0
let isErasing = false
let timeoutId: number | null = null

const typeSpeed = 120
const eraseSpeed = 80
const pause = 2800

const type = () => {
  const current = texts[index] ?? ''

  if (!isErasing && char < current.length) {
    char++
    displayedText.value = current.slice(0, char)
    timeoutId = window.setTimeout(type, typeSpeed)
  } 
  else if (!isErasing && char === current.length) {
    timeoutId = window.setTimeout(() => {
      isErasing = true
      type()
    }, pause)
  } 
  else if (isErasing && char > 0) {
    char--
    displayedText.value = current.slice(0, char)
    timeoutId = window.setTimeout(type, eraseSpeed)
  } 
  else if (isErasing && char === 0) {
    isErasing = false
    index = (index + 1) % texts.length
    timeoutId = window.setTimeout(type, typeSpeed + 200)
  }
}

onMounted(() => {
  if (typedEl.value) {
    displayedText.value = ' '
    type()
  }
})

onUnmounted(() => {
  if (timeoutId) clearTimeout(timeoutId)
})
</script>
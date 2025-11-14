<template>
  <div>
    <div v-if="isRaw" v-html="svg"></div>
    <img v-else :src="svg" alt="icon" class="svg-img" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  svg: string
}>()

const isRaw = computed(() => {
  try {
    return props.svg.trim().startsWith('<')
  } catch (e) {
    return false
  }
})
</script>
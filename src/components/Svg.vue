<template>
  <div>
    <div v-html="svg"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  svg: string
}>()
</script>
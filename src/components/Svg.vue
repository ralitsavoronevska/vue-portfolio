<template>
  <div v-html="svg"></div>
</template>

<script setup lang="ts">
defineProps<{
  svg: string
}>()
</script>
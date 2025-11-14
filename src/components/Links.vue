<template>
  <a 
    v-for="link in links"
    :key="link.name"
    :href="link.url || '#'" 
    :target="getTarget(link)" 
    rel="noopener" 
    :aria-label="getAriaLabel(link)">
    <Svg :svg="link.svg" />
  </a>
</template>

<script setup lang="ts">
import Svg from './Svg.vue'

const props = defineProps<{
  links: Array<{
    name: string
    url: string
    svg: string
  }>
  aria?: string
}>()

const getTarget = (link: { name: string; url: string; svg: string }) => {
  return link.url !== '' ? '_blank' : '_self'
}

const getAriaLabel = (link: { name: string; url: string; svg: string }) => {
  if (props.aria) {
    if (link.name.toLowerCase() === 'live') {
      return `Visit my ${props.aria} Project's ${link.name} Preview`
    } else {
      return `View my ${props.aria} Project in ${link.name}`
    }
  }
  return `Visit my ${link.name} Profile`
}
</script>
<template>
  <a 
    v-for="icon in icons"
    :key="icon.file_name"
    :href="icon.url || '#'" 
    :target="getTarget(icon)" 
    rel="noopener noreferrer" 
    class="social-link rounded-full"
    :aria-label="getAriaLabel(icon)">
    <img :src="getSrc(icon)" class="social-icon" data-testid="social-icon" :alt="getAriaLabel(icon)" loading="lazy" />
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  icons: Array<{
    name: string
    url: string
    file_name: string
  }>
  aria?: string
}>()

const getTarget = (icon: { url: string }) => {
  return icon.url !== '' ? '_blank' : '_self'
}

const getAriaLabel = (icon: { name: string; file_name: string }) => {
  if (props.aria) {
    if (icon.file_name === 'live') {
      return `Visit my ${props.aria} Project's ${icon.name} Preview`
    } else {
      return `View my ${props.aria} Project in ${icon.name}`
    }
  } else if (icon.file_name === 'email') {
    return `Let's connect! Send me an email!`
  }
  return `Visit my ${icon.name} Profile`
}

const getSrc = (icon: { file_name: string }) => {
  return `/assets/icons/social-icons/${icon.file_name}.svg`
}
</script>

<script lang="ts">
export default {
  name: 'SocialIcons'  
}
</script>
// src/composables/usePortfolioData.ts
import { ref } from 'vue'
import { HERO_SOCIAL_LINKS, CONTACT_SOCIAL_LINKS, type SocialIcon, TECH_STACK, type Tech,  PROJECTS, type Project } from '@/data/portfolio'

export function usePortfolioData() {
  const heroSocialIcons = ref<SocialIcon[]>(HERO_SOCIAL_LINKS)
  const contactSocialIcons = ref<SocialIcon[]>(CONTACT_SOCIAL_LINKS)
  const techStack = ref<Tech[]>(TECH_STACK)
  const projects = ref<Project[]>(PROJECTS)

  return {
    heroSocialIcons: heroSocialIcons,
    contactSocialIcons: contactSocialIcons,
    techStack: techStack,
    projects: projects,
  }
}
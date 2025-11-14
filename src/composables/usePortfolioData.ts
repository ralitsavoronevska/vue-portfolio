// src/composables/usePortfolioData.ts
import { ref } from 'vue'
import { SOCIAL_LINKS, HERO_SOCIAL_LINKS, type SocialLink, TECH_STACK, type Tech,  PROJECTS, type Project } from '@/data/portfolio'

export function usePortfolioData() {
  const heroSocialLinks = ref<SocialLink[]>(HERO_SOCIAL_LINKS)
  const socialLinks = ref<SocialLink[]>(SOCIAL_LINKS)
  const techStack = ref<Tech[]>(TECH_STACK)
  const projects = ref<Project[]>(PROJECTS)

  return {
    heroSocialLinks: heroSocialLinks,
    socialLinks: socialLinks,
    techStack: techStack,
    projects: projects,
  }
}
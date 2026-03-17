// src/composables/usePortfolioData.ts
import {
  HERO_SOCIAL_LINKS,
  CONTACT_SOCIAL_LINKS,
  type SocialIcon,
  TECH_STACK,
  type Tech,
  PROJECTS,
  type Project,
} from "@/data/portfolio";

export function usePortfolioData() {
  return {
    heroSocialIcons: HERO_SOCIAL_LINKS as SocialIcon[],
    contactSocialIcons: CONTACT_SOCIAL_LINKS as SocialIcon[],
    techStack: TECH_STACK as Tech[],
    projects: PROJECTS as Project[],
  };
}

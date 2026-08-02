// src/composables/usePortfolioData.ts
import {
  PAGES_CONTENT,
  SKILLS,
  HIGHLIGHTS,
  type Highlight,
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
    heroSubtitle: PAGES_CONTENT.hero_subtitle,
    heroSocialIcons: HERO_SOCIAL_LINKS as SocialIcon[],
    aboutMeSubtitle: PAGES_CONTENT.about_me_subtitle,
    aboutMeDescription: PAGES_CONTENT.about_me_description,
    skills: SKILLS as string[],
    highlights: HIGHLIGHTS as Highlight[],
    projectsSubtitle: PAGES_CONTENT.projects_subtitle,
    techStack: TECH_STACK as Tech[],
    projects: PROJECTS as Project[],
    contactSocialIcons: CONTACT_SOCIAL_LINKS as SocialIcon[],
  };
}

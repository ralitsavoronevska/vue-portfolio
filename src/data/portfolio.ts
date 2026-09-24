import maptyAppImage from "@/assets/projects/mapty-app.webp";
import restApiImage from "@/assets/projects/rest-api-with-nodejs.webp";
import vuePortfolioImage from "@/assets/projects/vue-portfolio.webp";
import zendeskPulseImage from "@/assets/projects/zd-pulse.webp";
import elevationMarketingImage from "@/assets/projects/elevation-marketing.webp";
import maximaCxImage from "@/assets/projects/maxima-cx.webp";

export interface SocialIcon {
  name: string;
  url: string;
  file_name: string;
}

export interface Highlight {
  icon: string;
  label: string;
  text: string;
}

export interface Tech {
  name: string;
  file_name: string;
}

export interface Project {
  image: string;
  title: string;
  description: string;
  techDescription: string;
  techStack: Tech[];
  links: SocialIcon[];
}

export const PAGES_CONTENT = {
  hero_subtitle: "Vue.js Frontend Developer",
  about_me_subtitle: "Hi, I'm Ralitsa Voronevska!",
  about_me_description: `Frontend Developer with 6+ years of professional experience building scalable, responsive web applications with Vue and JavaScript/TypeScript.

  I specialize in Vue 3 (Composition API) and TypeScript, with experience in frontend architecture, REST APIs, state management, authentication, testing, performance and accessibility.

  I focus on clean, maintainable solutions that balance technical quality, user experience and business requirements.

  Based in Varna, Bulgaria — open to remote opportunities.`,
  projects_subtitle:
    "A selection of professional and personal projects showcasing my work with Vue, TypeScript, Nuxt, APIs, and modern frontend development.",
  professional_projects_subtitle: "Projects developed in a professional environment, focused on real business requirements and production-ready frontend solutions.",
  personal_projects_subtitle: "Projects developed independently, showcasing creativity, experimentation, and personal growth in frontend development.",
};

export const HERO_SOCIAL_LINKS: SocialIcon[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/ralitsavoronevska",
    file_name: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/ralitsavoronevska",
    file_name: "github",
  },
  {
    name: "CodePen",
    url: "https://codepen.io/ralitsavoronevska",
    file_name: "codepen",
  },
];

export const CONTACT_SOCIAL_LINKS: SocialIcon[] = [
  ...HERO_SOCIAL_LINKS,
  {
    name: "Telegram",
    url: "https://t.me/ralitsavoronevska",
    file_name: "telegram",
  },
  { name: "Email", url: "mailto:r.voronevska@gmail.com", file_name: "email" },
];

export const SKILLS: string[] = [
  "Vue 3",
  "Vite",
  "Vitest",
  "TypeScript",
  "JavaScript",
  "Nuxt 4",
  "Pinia",
  "Tailwind 4",
];

export const HIGHLIGHTS: Highlight[] = [
  {
    icon: "⚡",
    label: "Performance",
    text: "Performance-conscious interfaces, responsive UI and efficient frontend architecture",
  },
  {
    icon: "✨",
    label: "Code Quality",
    text: "Reusable components, testing and clean, maintainable TypeScript/Javascript/Vue code",
  },
  {
    icon: "🪄",
    label: "Product Engineering",
    text: "REST APIs, authentication, state management and end-to-end feature delivery",
  },
];

export const TECH_STACK: Tech[] = [
  { name: "Tailwind CSS", file_name: "tailwind-css" },
  { name: "JavaScript", file_name: "javascript" },
  { name: "Vue.js", file_name: "vue-js" },
  { name: "Nuxt.js", file_name: "nuxt-js" },
  { name: "TypeScript", file_name: "typescript" },
  { name: "Pinia", file_name: "pinia" },
  { name: "Vite.js", file_name: "vite-js" },
  { name: "Vitest", file_name: "vitest" },
  { name: "PostMan", file_name: "postman" },
  { name: "FireBase", file_name: "firebase" },
  { name: "MongoDB", file_name: "mongo-db" },
  { name: "Mongoose", file_name: "mongoose" },
  { name: "Express.js", file_name: "express-js" },
  { name: "Node.js", file_name: "node-js" },
  { name: "Nodemon", file_name: "nodemon" },
];

export const PROFESSIONAL_PROJECTS: Project[] = [
  {
    image: zendeskPulseImage,
    title: "Zendesk Pulse",
    description: "Internal Zendesk Management UI",
    techDescription: "Data-Driven UI · Reusable Components · API Integration",
    techStack: [
      { name: "Vue.js", file_name: "vue-js" },
      { name: "Vite.js", file_name: "vite-js" },
      { name: "Vitest", file_name: "vitest" },
      { name: "JavaScript", file_name: "javascript" },
      { name: "Pinia", file_name: "pinia" },
      { name: "Tailwind CSS", file_name: "tailwind-css" },
      { name: "FireBase", file_name: "firebase" },
    ],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/ralitsavoronevska/zd-pulse/",
        file_name: "github",
      },
      { name: "CodePen", url: "", file_name: "grayCodePen" },
      {
        name: "Live",
        url: "https://ralitsavoronevska.github.io/zd-pulse/",
        file_name: "live",
      },
    ],
  },
  {
    image: elevationMarketingImage,
    title: "Elevation Marketing",
    description: "Modern Marketing Agency Website",
    techDescription: "Responsive UI · Component Architecture · Custom Styling",
    techStack: [
      { name: "Nuxt.js", file_name: "nuxt-js" },
      { name: "Vue.js", file_name: "vue-js" },
      { name: "Vite.js", file_name: "vite-js" },
      { name: "TypeScript", file_name: "typescript" },
      { name: "Tailwind CSS", file_name: "tailwind-css" },
    ],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/ralitsavoronevska/elevation-marketing/",
        file_name: "github",
      },
      { name: "CodePen", url: "", file_name: "grayCodePen" },
      {
        name: "Live",
        url: "https://ralitsavoronevska.github.io/elevation-marketing/",
        file_name: "live",
      },
    ],
  },
  {
    image: maximaCxImage,
    title: "Maxima CX",
    description: "Customer Support Agency Website",
    techDescription: "Responsive UI · Reusable Components · Custom Styling",
    techStack: [
      { name: "Nuxt.js", file_name: "nuxt-js" },
      { name: "Vue.js", file_name: "vue-js" },
      { name: "Vite.js", file_name: "vite-js" },
      { name: "TypeScript", file_name: "typescript" },
      { name: "Tailwind CSS", file_name: "tailwind-css" },
    ],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/ralitsavoronevska/maxima-cx/",
        file_name: "github",
      },
      { name: "CodePen", url: "", file_name: "grayCodePen" },
      {
        name: "Live",
        url: "https://ralitsavoronevska.github.io/maxima-cx/",
        file_name: "live",
      },
    ],
  },
];

export const PERSONAL_PROJECTS: Project[] = [
  {
    image: vuePortfolioImage,
    title: "Vue.js 3 Portfolio",
    description: "Original, built from scratch",
    techDescription: "Responsive UI · Reusable Components · Interactive Effects",
    techStack: [
      { name: "Vue.js", file_name: "vue-js" },
      { name: "Vite.js", file_name: "vite-js" },
      { name: "Vitest", file_name: "vitest" },
      { name: "TypeScript", file_name: "typescript" },
      { name: "Pinia", file_name: "pinia" },
      { name: "Tailwind CSS", file_name: "tailwind-css" },
    ],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/ralitsavoronevska/vue-portfolio/",
        file_name: "github",
      },
      {
        name: "CodePen",
        url: "https://codepen.io/ralitsavoronevska/pen/KOdQJZ/",
        file_name: "codepen",
      },
      {
        name: "Live",
        url: "https://ralitsavoronevska.com/",
        file_name: "live",
      },
    ],
  },
  {
    image: restApiImage,
    title: "Secure Node.js REST API",
    description: "RESTful API with Authentication",
    techDescription: "Multer + Morgan + JWT + Bcrypt",
    techStack: [
      { name: "Node.js", file_name: "node-js" },
      { name: "Express.js", file_name: "express-js" },
      { name: "MongoDB", file_name: "mongo-db" },
      { name: "Mongoose", file_name: "mongoose" },
      { name: "Nodemon", file_name: "nodemon" },
      { name: "PostMan", file_name: "postman" },
    ],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/ralitsavoronevska/rest-api-with-nodejs/",
        file_name: "github",
      },
      { name: "CodePen", url: "", file_name: "grayCodePen" },
      { name: "Live", url: "", file_name: "grayLive" },
    ],
  },
  {
    image: maptyAppImage,
    title: "Mapty App",
    description: "Map your Workout Activities",
    techDescription: "Interactive Maps · Geolocation · Running and Cycling Tracking",
    techStack: [
      { name: "Vue.js", file_name: "vue-js" },
      { name: "Vite.js", file_name: "vite-js" },
      { name: "Vitest", file_name: "vitest" },
      { name: "TypeScript", file_name: "typescript" },
      { name: "Pinia", file_name: "pinia" },
      { name: "Tailwind CSS", file_name: "tailwind-css" },
    ],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/ralitsavoronevska/mapty-app/",
        file_name: "github",
      },
      { name: "CodePen", url: "", file_name: "grayCodePen" },
      {
        name: "Live",
        url: "https://ralitsavoronevska.github.io/mapty-app/",
        file_name: "live",
      },
    ],
  },
];


import monsterSlayerImage from "@/assets/projects/monster-slayer-game.webp";
import maptyAppImage from "@/assets/projects/mapty-app.webp";
import pigGameImage from "@/assets/projects/pig-game.webp";
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
  hero_subtitle: "Vue.js Front-end Developer",
  about_me_subtitle: "Hi, I'm Ralitsa Voronevska!",
  about_me_description: `Front-end developer with 6 years of experience building performant, scalable, and fully responsive web solutions 
  with a mobile-first approach in mind. I am focused on solutions that serve both user needs and business objectives. I adapt quickly
  across differing codebase conventions and team structures. Since early 2026, I’ve been working on refreshing my basic Python skills.`,
  projects_subtitle: "My latest projects built with cutting-edge technologies!",
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
  "Nuxt v4",
  "Pinia",
  "Tailwind v4",
];

export const HIGHLIGHTS: Highlight[] = [
  {
    icon: "⚡",
    label: "Performance",
    text: "Faster load times through code-splitting, lazy loading, and smart caching",
  },
  {
    icon: "✨",
    label: "AI-assisted workflow",
    text: "Integrating AI platforms to speed up delivery without compromising code quality",
  },
  {
    icon: "{ }",
    label: "Code quality",
    text: "SOLID principles, design patterns, best practices, clean, and well-documented code",
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

export const PROJECTS: Project[] = [
  {
    image: vuePortfolioImage,
    title: "Vue.js 3 Portfolio",
    description: "Original, built from scratch",
    techDescription: "Modern Matrix-like Themed Portfolio",
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
    techDescription: "OpenStreetMap + Leaflet.js",
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
  {
    image: monsterSlayerImage,
    title: "Monster Slayer Game",
    description: "Give the Monster A Memorable Lesson",
    techDescription: "Battle sounds powered by Howler.js",
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
        url: "https://github.com/ralitsavoronevska/monster-slayer-game/",
        file_name: "github",
      },
      {
        name: "CodePen",
        url: "https://codepen.io/ralitsavoronevska/pen/gbPyXbV/",
        file_name: "codepen",
      },
      {
        name: "Live",
        url: "https://ralitsavoronevska.github.io/monster-slayer-game/",
        file_name: "live",
      },
    ],
  },
  {
    image: pigGameImage,
    title: "Pig Game",
    description: "A Single Dice Game for two players",
    techDescription: "Game sounds are powered by Howler.js",
    techStack: [
      { name: "Vue.js", file_name: "vue-js" },
      { name: "Vite.js", file_name: "vite-js" },
      { name: "Vitest", file_name: "vitest" },
      { name: "TypeScript", file_name: "typescript" },
      { name: "Tailwind CSS", file_name: "tailwind-css" },
    ],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/ralitsavoronevska/pig-game/",
        file_name: "github",
      },
      {
        name: "CodePen",
        url: "https://codepen.io/ralitsavoronevska/pen/MYyqdXe/",
        file_name: "codepen",
      },
      {
        name: "Live",
        url: "https://ralitsavoronevska.github.io/pig-game/",
        file_name: "live",
      },
    ],
  },
  {
    image: zendeskPulseImage,
    title: "Zendesk Pulse",
    description: "Modern PrimeVue UI for Zendesk",
    techDescription: "JWT + Postman + Swagger + Prism",
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
    techDescription: "Custom branding, theme and visuals",
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
    techDescription: "Brand identity, theme and content",
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
  // {
  //   image: "",
  //   title: "Forkify App",
  //   description: "Cooking Recipes App",
  //   techStack: [
  //     { name: "Vue.js", file_name: "vue-js" },
  //     { name: "Vite.js", file_name: "vite-js" },
  //     { name: "TypeScript", file_name: "typescript" },
  //     { name: "Tailwind CSS", file_name: "tailwind-css" },
  //     { name: "Pinia", file_name: "pinia" },
  //   ],
  //   links: [
  //     { name: "GitHub", url: "", file_name: "github" },
  //     { name: "CodePen", url: "", file_name: "codepen" },
  //     { name: "Live", url: "", file_name: "live" },
  //   ],
  // },
  // {
  //   image: "",
  //   title: "Find a Coach App",
  //   description: "Find or Register as a Coach",
  //   techStack: [
  //     { name: "Vue.js", file_name: "vue-js" },
  //     { name: "Vite.js", file_name: "vite-js" },
  //     { name: "TypeScript", file_name: "typescript" },
  //     { name: "Tailwind CSS", file_name: "tailwind-css" },
  //     { name: "Pinia", file_name: "pinia" },
  //     { name: "PostMan", file_name: "postman" },
  //     { name: "FireBase", file_name: "firebase" },
  //   ],
  //   links: [
  //     { name: "GitHub", url: "", file_name: "github" },
  //     { name: "CodePen", url: "", file_name: "codepen" },
  //     { name: "Live", url: "", file_name: "live" },
  //   ],
  // },
  // {
  //   image: "",
  //   title: "WooNuxt Store",
  //   description: "Headless E-Commerce",
  //   techStack: [
  //     { name: "Nuxt.js", file_name: "nuxt" },
  //     { name: "Vue.js", file_name: "vue-js" },
  //     { name: "TypeScript", file_name: "typescript" },
  //     { name: "Tailwind CSS", file_name: "tailwind-css" },
  //     { name: "Pinia", file_name: "pinia" },
  //     { name: "PostMan", file_name: "postman" },
  //     { name: "MongoDB", file_name: "mongo-db" },
  //   ],
  //   links: [
  //     { name: "GitHub", url: "", file_name: "github" },
  //     { name: "CodePen", url: "", file_name: "codepen" },
  //     { name: "Live", url: "", file_name: "live" },
  //   ],
  // },
];

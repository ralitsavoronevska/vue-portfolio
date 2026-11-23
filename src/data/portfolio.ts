import maptyAppImage from "@/assets/projects/mapty-app.webp";
import restApiImage from "@/assets/projects/rest-api-with-nodejs.webp";
import zendeskPulseImage from "@/assets/projects/zd-pulse.webp";
import elevationMarketingImage from "@/assets/projects/elevation-marketing.webp";
import maximaCxImage from "@/assets/projects/maxima-cx.webp";
import professionalWorkExperienceImage from "@/assets/certificates/professional-work-experience-lsa.webp";
import programmingBasicsImage from "@/assets/certificates/programming-basics-python.webp";
import aspireCertificateImage from "@/assets/certificates/aspire-ai-masterclass.webp";
import vueCertificateImage from "@/assets/certificates/vue-complete-guide.webp";
import javascriptCourseImage from "@/assets/certificates/javascript-complete-course.webp";
import javascriptWeirdPartsImage from "@/assets/certificates/javascript-weird-parts.webp";
import comingSoonImage from "@/assets/certificates/coming-soon.webp";


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

export interface TechSkillGroup {
  title: string;
  skills: string[];
}

export type CertificationStatus = "completed" | "in-progress" | "planned";

export interface Certification
{
  image?: string;
  title: string;
  description?: string;
  issuer: string;
  status: CertificationStatus;
  year?: number;
  type?: "certification" | "internship",
  credentialUrl?: string;
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
  author: "Ralitsa Voronevska",
  hero_subtitle: "Vue.js Frontend Developer",
  about_me_title: "About",
  about_me_title_highlight: "Me",
  about_me_subtitle: "Hi, I'm Ralitsa Voronevska!",
  about_me_description: `Frontend Developer with 6+ years of professional experience building scalable, responsive web applications with Vue and JavaScript/TypeScript.

  I specialize in Vue 3 (Composition API) and TypeScript, with experience in frontend architecture, REST APIs, state management, authentication, testing, performance and accessibility.

  I focus on clean, maintainable solutions that balance technical quality, user experience and business requirements.

  I'm particularly interested in modern frontend architecture, performance optimization, and building scalable, accessible web applications. I enjoy exploring new technologies and continuously improving my engineering skills.

  Based in Sofia, Bulgaria — open to remote opportunities.`,
  tech_skills_title: "Technical",
  tech_skills_title_highlight: "Skills",
  tech_skills_subtitle: "Technologies from professional work, hands-on projects, and ongoing learning.",
  tech_skills_core_title: "Core Expertise",
  tech_skills_core_description: "Professional experience & hands-on project skills",
  tech_skills_previous_title: "Previous Experience",
  tech_skills_previous_description: "Technologies from previous roles",
  tech_skills_interests_title: "Exploring & Interested In",
  tech_skills_interests_description: "Technologies I'm interested in learning and exploring further",
  certifications_title: "Certifications",
  certifications_title_highlight: "& Learning",
  certifications_subtitle: "Professional certifications, ongoing education, and future learning goals.",
  projects_title: "Selected",
  projects_title_highlight: "Work",
  projects_subtitle: "A selection of professional and personal projects showcasing my work with Vue, TypeScript, Nuxt, APIs, and modern frontend development.",
  professional_title: "Professional",
  professional_title_suffix: "Work",
  professional_projects_subtitle: "Projects developed in a professional environment, focused on real business requirements and production-ready frontend solutions.",
  personal_title: "Selected",
  personal_title_highlight: "Personal",
  personal_title_suffix: "Projects",
  personal_projects_subtitle: "Projects developed independently, showcasing creativity, experimentation, and personal growth in frontend development.",
  contact_title: "Contact",
  contact_title_highlight: "Me",
  contact_text: 'I\'d love if you reach out to me. Even if it\'s to say: <span class="gradient-text">"Hey!"</span><br />Don\'t hesitate! Drop me a line and I’ll reply to you <span class="gradient-text">ASAP</span>!',
  contact_location: "Sofia, Bulgaria",
  view_projects: "View Projects",
  download_resume: "Download Resume",
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

export const HIGHLIGHTS: Highlight[] = [
  {
    icon: "⚡",
    label: "Performance",
    text: "Performance-conscious interfaces, responsive UI and efficient frontend architecture",
  },
  {
    icon: "✨",
    label: "Code Quality",
    text: "Reusable components, testing and clean, maintainable Vue and Javascript/TypeScript code",
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

export const TECH_SKILL_GROUPS: TechSkillGroup[] = [
  {
    title: "Languages & Web Fundamentals",
    skills: [
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Frameworks & State Management",
    skills: [
      "Vue 2",
      "Vue 3",
      "Nuxt 4",
      "Pinia",
      "Vue Router 5",
    ],
  },
  {
    title: "Full-Stack & Data",
    skills: [
      "React",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "JWT Authentication",
      "RBAC",
      "Recharts",
      "shadcn/ui",
    ],
  },
  {
    title: "Styling & UI",
    skills: [
      "Tailwind CSS 4",
      "Bootstrap",
      "SCSS",
    ],
  },
  {
    title: "Tooling, Testing & APIs",
    skills: [
      "Git",
      "Vite",
      "Vitest",
      "REST APIs",
      "Axios",
      "Firebase",
      "Postman",
      "Swagger",
      "Prism"
    ],
  },
];

export const PREVIOUS_TECH_SKILLS: TechSkillGroup[] = [
  {
    title: "Previous Experience",
    skills: [
      "jQuery",
      "Backbone.js",
      "Vuex",
      "XML",
    ],
  },
];

export const TECH_INTEREST_GROUPS: TechSkillGroup[] = [
  {
    title: "Frameworks & Languages",
    skills: ["Astro"],
  },
  {
    title: "Vue Ecosystem",
    skills: [
      "Nuxt UI",
      "Pinia Colada",
      "Unplugin Vue Router",
      "Quasar",
      "Vuetify",
      "shadcn-vue",
    ],
  },
  {
    title: "UI Libraries",
    skills: [
      "Material UI (MUI)",
      "daisyUI",
    ],
  },
  {
    title: "APIs & Testing",
    skills: ["GraphQL", "Jest", "Playwright"],
  },
];


export const CERTIFICATIONS: Certification[] = [
  // Completed training
  {
    title: "Developer (software - Web) Internship",
    issuer: "London Success Academy",
    status: "completed",
    year: 2026,
    image: professionalWorkExperienceImage,
  },
  {
    title: "Programming Basics (Python)",
    issuer: "Software University",
    status: "completed",
    year: 2026,
    image: programmingBasicsImage,
  },
  {
    title: "Enter the World of AI",
    issuer: "Aspire Bulgaria Foundation",
    status: "completed",
    year: 2026,
    image: aspireCertificateImage,
  },
  {
    title: "Vue – The Complete Guide (incl. Router & Composition API)",
    issuer: "Udemy",
    status: "completed",
    year: 2025,
    image: vueCertificateImage,
  },
  {
    title: "The Complete JavaScript Course",
    issuer: "Udemy",
    status: "completed",
    year: 2023,
    image: javascriptCourseImage,
  },
  {
    title: "JavaScript – Understanding the Weird Parts",
    issuer: "Udemy",
    status: "completed",
    year: 2021,
    image: javascriptWeirdPartsImage,
  },

  // Currently pursuing
  {
    title: "Mid Frontend Vue.js Developer Certification",
    issuer: "certificates.dev",
    status: "in-progress",
    image: comingSoonImage,
  },
  {
    title: "C Programming In Windows (intermediate) Certification",
    issuer: "DragonZap",
    status: "in-progress",
    image: comingSoonImage,
  },
  {
    title: "Mid TypeScript Developer Certification",
    issuer: "certificates.dev",
    status: "in-progress",
    image: comingSoonImage,
  },

  // Learning roadmap
  {
    title: "Mastering Nuxt 2025 Certification",
    issuer: "Mastering Nuxt",
    status: "planned",
  },
  {
    title: "Mastering Pinia Certification",
    issuer: "Mastering Pinia",
    status: "planned",
  },
  // {
  //   title: "Certified Full-Stack Developer Curriculum",
  //   issuer: "freeCodeCamp",
  //   status: "planned",
  //   description: "Long-term goal involving completion of the required curriculum.",
  // },
  {
    title: "Junior React Developer Certification",
    issuer: "Vue School",
    status: "planned",
  },
  {
    title: "React – The Complete Guide (incl. Next.js, Redux)",
    issuer: "Udemy",
    status: "planned",
  },
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
      {
        name: "Live Link",
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
      {
        name: "Live Link",
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
      {
        name: "Live Link",
        url: "https://ralitsavoronevska.github.io/maxima-cx/",
        file_name: "live",
      },
    ],
  },
];

export const PERSONAL_PROJECTS: Project[] = [
  {
    image: restApiImage,
    title: "Secure Node.js REST API",
    description: "RESTful API with Authentication",
    techDescription: "API Architecture · Authentication · File Upload Handling",
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
      {
        name: "Live Link",
        url: "",
        file_name: "grayLive"
      },
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
      {
        name: "Live Link",
        url: "https://ralitsavoronevska.github.io/mapty-app/",
        file_name: "live",
      },
    ],
  },
  {
    image: "",
    title: "Call Analytics Dashboard",
    description: "Full-Stack Telecom Analytics",
    techDescription: "React Dashboard · FastAPI Backend · PostgreSQL · JWT/RBAC",
    techStack: [
      { name: "React.js", file_name: "react-js" },
      { name: "Vite.js", file_name: "vite-js" },
      { name: "TypeScript", file_name: "typescript" },
      { name: "Tailwind CSS", file_name: "tailwind-css" },
      { name: "Python", file_name: "python" },
      { name: "FastAPI", file_name: "fastapi" },
      { name: "PostgreSQL", file_name: "postgresql" },
      // { name: "Swagger", file_name: "swagger" },
    ],
    links: [
      {
        name: "GitHub Frontend",
        url: "https://github.com/ralitsavoronevska/call-analytics-dashboard",
        file_name: "github",
      },
      {
        name: "GitHub Backend",
        url: "https://github.com/ralitsavoronevska/call-analytics-backend",
        file_name: "github",
      },
      {
        name: "Live Link",
        url: "https://call-analytics-dashboard-xi.vercel.app/",
        file_name: "live",
      },
    ],
  },
];
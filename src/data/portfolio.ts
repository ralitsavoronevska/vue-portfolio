export interface SocialIcon {
  name: string
  url: string
  file_name: string       
}

export interface Tech {
  name: string
  file_name: string 
}

export interface Project {
  image: string
  title: string
  description: string
  techStack: object[]
  links: object[]
}

export const HERO_SOCIAL_LINKS: SocialIcon[] = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/ralitsavoronevska', file_name: 'linkedin' },
  { name: 'GitHub', url: 'https://github.com/ralitsavoronevska', file_name: 'github' },
  { name: 'CodePen', url: 'https://codepen.io/ralitsavoronevska', file_name: 'codepen' },
]

export const CONTACT_SOCIAL_LINKS: SocialIcon[] = [
  ...HERO_SOCIAL_LINKS,
  { name: 'Discord', url: 'https://discordapp.com/users/1425751105060732959', file_name: 'discord' },
  { name: 'Telegram', url: 'https://t.me/ralitsavoronevska', file_name: 'telegram' },
  { name: 'Email', url: 'mailto:r.voronevska@gmail.com', file_name: 'email' },
]

export const TECH_STACK: Tech[] = [
  { name: 'HTML5', file_name: 'html5' },
  { name: 'CSS3', file_name: 'css3' },
  { name: 'Bootstrap', file_name: 'bootstrap' },
  { name: 'SASS', file_name: 'sass' },
  { name: 'Tailwind CSS', file_name: 'tailwind-css' },
  { name: 'JavaScript', file_name: 'javascript' },
  { name: 'jQuery', file_name: 'jquery' },
  { name: 'Git', file_name: 'git' },
  { name: 'Gulp', file_name: 'gulp' },
  { name: 'Vue.js', file_name: 'vue-js' },
  { name: 'TypeScript', file_name: 'typescript' },
  { name: 'Pinia', file_name: 'pinia' },
  { name: 'Vite.js', file_name: 'vite-js' },
  { name: 'Vitest', file_name: 'vitest' },
  { name: 'PostMan', file_name: 'postman' },
  { name: 'FireBase', file_name: 'firebase' },
  { name: 'Netlify', file_name: 'netlify' },
  { name: 'PhotoShop', file_name: 'photoshop' },
 ]

export const PROJECTS: Project[] = [
  {
    image: '/assets/projects/vue-portfolio.webp',
    title: 'Vue.js Portfolio',
    description: 'My Modern Vue.js Portfolio',
    techStack: [
      { name: 'Vue.js', file_name: 'vue-js' },
      { name: 'Vite.js', file_name: 'vite-js' },
      { name: 'Vitest', file_name: 'vitest' },
      { name: 'TypeScript', file_name: 'typescript' },
      { name: 'Tailwind CSS', file_name: 'tailwind-css' },
    ],
    links: [
      { name: 'GitHub', url: 'https://github.com/ralitsavoronevska/vue-portfolio/', file_name: 'github' },
      { name: 'CodePen', url: 'https://codepen.io/ralitsavoronevska/pen/KOdQJZ/', file_name: 'codepen' },
      { name: 'Live', url: 'https://ralitsavoronevska.com/', file_name: 'live' },
    ]
  },
  {
    image: '/assets/projects/rest-api-with-nodejs.webp',
    title: 'Node.js REST API',
    description: 'Simple Shop RESTful API',
    techStack: [
      { name: 'Node.js', file_name: 'node-js' },
      { name: 'Express.js', file_name: 'express-js' },
      { name: 'MongoDB', file_name: 'mongo-db' },
      { name: 'Mongoose', file_name: 'mongoose' },
      { name: 'Nodemon', file_name: 'nodemon' },
      { name: 'PostMan', file_name: 'postman' },
    ],
    links: [
      { name: 'GitHub', url: 'https://github.com/ralitsavoronevska/rest-api-with-nodejs/', file_name: 'github' },
      { name: 'CodePen', url: '', file_name: 'grayCodePen' },
      { name: 'Live', url: '', file_name: 'grayLive' },
    ]
  },
  {
    image: '',
    title: 'WooNuxt Store',
    description: 'Headless E-Commerce',
    techStack: [
      { name: 'Nuxt.js', file_name: 'nuxt' },
      { name: 'Vue.js', file_name: 'vue-js' },
      { name: 'TypeScript', file_name: 'typescript' },
      { name: 'Tailwind CSS', file_name: 'tailwind-css' },
      { name: 'Pinia', file_name: 'pinia' },
      { name: 'PostMan', file_name: 'postman' },
      { name: 'MongoDB', file_name: 'mongo-db' },
    ],
    links: [
      { name: 'GitHub', url: '', file_name: 'github' },
      { name: 'CodePen', url: '', file_name: 'codepen' },
      { name: 'Live', url: '', file_name: 'live' },
    ]
  },
  {
    image: '',
    title: 'Find a Coach App',
    description: 'Find and Register as a Coach',
    techStack: [
      { name: 'Vue.js', file_name: 'vue-js' },
      { name: 'Vite.js', file_name: 'vite-js' },
      { name: 'TypeScript', file_name: 'typescript' },
      { name: 'Tailwind CSS', file_name: 'tailwind-css' },
      { name: 'Pinia', file_name: 'pinia' },
      { name: 'PostMan', file_name: 'postman' },
      { name: 'FireBase', file_name: 'firebase' },
    ],
    links: [
      { name: 'GitHub', url: '', file_name: 'github' },
      { name: 'CodePen', url: '', file_name: 'codepen' },
      { name: 'Live', url: '', file_name: 'live' },
    ]
  },
  {
    image: '',
    title: 'Forkify App',
    description: 'Cooking Recipes App',
    techStack: [
      { name: 'Vue.js', file_name: 'vue-js' },
      { name: 'Vite.js', file_name: 'vite-js' },
      { name: 'TypeScript', file_name: 'typescript' },
      { name: 'Tailwind CSS', file_name: 'tailwind-css' },
      { name: 'Pinia', file_name: 'pinia' },
    ],
    links: [
      { name: 'GitHub', url: '', file_name: 'github' },
      { name: 'CodePen', url: '', file_name: 'codepen' },
      { name: 'Live', url: '', file_name: 'live' },
    ]
  },
  {
    image: '',
    title: 'Mapty App',
    description: 'Map your Exercise Activities',
    techStack: [
      { name: 'Vue.js', file_name: 'vue-js' },
      { name: 'Vite.js', file_name: 'vite-js' },
      { name: 'TypeScript', file_name: 'typescript' },
      { name: 'Tailwind CSS', file_name: 'tailwind-css' },
      { name: 'Pinia', file_name: 'pinia' },
    ],
    links: [
      { name: 'GitHub', url: '', file_name: 'github' },
      { name: 'CodePen', url: '', file_name: 'codepen' },
      { name: 'Live', url: '', file_name: 'live' },
    ]
  },
  {
    image: '/assets/projects/monster-slayer-game.webp',
    title: 'Monster Slayer Game',
    description: 'Give the Monster A Lesson',
    techStack: [
      { name: 'Vue.js', file_name: 'vue-js' },
      { name: 'Vite.js', file_name: 'vite-js' },
      { name: 'Vitest', file_name: 'vitest' },
      { name: 'TypeScript', file_name: 'typescript' },
      { name: 'Tailwind CSS', file_name: 'tailwind-css' },
      { name: 'Pinia', file_name: 'pinia' },
    ],
    links: [
      { name: 'GitHub', url: 'https://github.com/ralitsavoronevska/monster-slayer-game/', file_name: 'github' },
      { name: 'CodePen', url: 'https://codepen.io/ralitsavoronevska/pen/gbPyXbV/', file_name: 'codepen' },
      { name: 'Live', url: 'https://ralitsavoronevska.github.io/monster-slayer-game/', file_name: 'live' },
    ]
  },
  {
    image: '/assets/projects/pig-game.webp',
    title: 'Pig Game',
    description: 'A Single Dice Game for two players',
    techStack: [
      { name: 'Vue.js', file_name: 'vue-js' },
      { name: 'Vite.js', file_name: 'vite-js' },
      { name: 'TypeScript', file_name: 'typescript' },
      { name: 'Tailwind CSS', file_name: 'tailwind-css' },
    ],
    links: [
      { name: 'GitHub', url: 'https://ralitsavoronevska.github.io/pig-game/', file_name: 'github' },
      { name: 'CodePen', url: 'https://codepen.io/ralitsavoronevska/pen/MYyqdXe/', file_name: 'codepen' },
      { name: 'Live', url: 'https://ralitsavoronevska.github.io/pig-game/', file_name: 'live' },
    ]
  },
]
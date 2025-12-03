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
  { name: 'VSCode', file_name: 'vscode' },
  { name: 'WebStorm', file_name: 'webstorm' },
  { name: 'HTML5', file_name: 'html5' },
  { name: 'CSS3', file_name: 'css3' },
  { name: 'Bootstrap', file_name: 'bootstrap' },
  { name: 'SASS', file_name: 'sass' },
  { name: 'Tailwind CSS', file_name: 'tailwindcss' },
  { name: 'JavaScript', file_name: 'javascript' },
  { name: 'jQuery', file_name: 'jquery' },
  { name: 'Git', file_name: 'git' },
  { name: 'Gulp', file_name: 'gulp' },
  { name: 'Vue.js', file_name: 'vuejs' },
  { name: 'TypeScript', file_name: 'typescript' },
  { name: 'Pinia', file_name: 'pinia' },
  { name: 'Vite.js', file_name: 'vitejs' },
  { name: 'Vitest', file_name: 'vitest' },
  { name: 'Node.js', file_name: 'nodejs' },
  { name: 'Express.js', file_name: 'express' },
  { name: 'MongoDB', file_name: 'mongodb' },
  { name: 'Mongoose', file_name: 'mongoose' },
  { name: 'PostMan', file_name: 'postman' },
  { name: 'FireBase', file_name: 'firebase' },
  { name: 'Netlify', file_name: 'netlify' },
  { name: 'PhotoShop', file_name: 'photoshop' },
 ]

export const PROJECTS: Project[] = [
  {
    image: '/assets/projects/rest-api-with-nodejs.webp',
    title: 'REST API',
    description: 'Simple Shop RESTful API',
    techStack: [
      { name: 'Node.js', file_name: 'nodejs' },
      { name: 'Express.js', file_name: 'express' },
      { name: 'MongoDB', file_name: 'mongodb' },
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
    title: 'Find a Coach App',
    description: 'Find and Register as a Coach',
    techStack: [
      { name: 'Vue.js', file_name: 'vuejs' },
      { name: 'Vite.js', file_name: 'vitejs' },
      { name: 'TypeScript', file_name: 'typescript' },
      { name: 'Tailwind CSS', file_name: 'tailwindcss' },
      { name: 'Pinia', file_name: 'pinia' },
      { name: 'PostMan', file_name: 'postman' },
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
      { name: 'Vue.js', file_name: 'vuejs' },
      { name: 'Vite.js', file_name: 'vitejs' },
      { name: 'TypeScript', file_name: 'typescript' },
      { name: 'Tailwind CSS', file_name: 'tailwindcss' },
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
      { name: 'Vue.js', file_name: 'vuejs' },
      { name: 'Vite.js', file_name: 'vitejs' },
      { name: 'TypeScript', file_name: 'typescript' },
      { name: 'Tailwind CSS', file_name: 'tailwindcss' },
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
      { name: 'Vue.js', file_name: 'vuejs' },
      { name: 'Vite.js', file_name: 'vitejs' },
      { name: 'TypeScript', file_name: 'typescript' },
      { name: 'Tailwind CSS', file_name: 'tailwindcss' },
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
    description: 'A Single Dice Game',
    techStack: [
      { name: 'Vue.js', file_name: 'vuejs' },
      { name: 'Vite.js', file_name: 'vitejs' },
      { name: 'TypeScript', file_name: 'typescript' },
      { name: 'Tailwind CSS', file_name: 'tailwindcss' },
    ],
    links: [
      { name: 'GitHub', url: 'https://ralitsavoronevska.github.io/pig-game/', file_name: 'github' },
      { name: 'CodePen', url: 'https://codepen.io/ralitsavoronevska/pen/MYyqdXe/', file_name: 'codepen' },
      { name: 'Live', url: 'https://ralitsavoronevska.github.io/pig-game/', file_name: 'live' },
    ]
  },
]
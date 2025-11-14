import linkedInSvg from '../assets/icons/gradient-icons/linkedin.svg?raw'
import gitHubSvg from '../assets/icons/gradient-icons/github.svg?raw'
import codePenSvg from '../assets/icons/gradient-icons/codepen.svg?raw'
import liveLinkSvg from '../assets/icons/gradient-icons/live.svg?raw'
import grayCodePen from '../assets/icons/gradient-icons/grayCodePen.svg?raw'
import grayLive from '../assets/icons/gradient-icons/grayLive.svg?raw'

export interface SocialLink {
  name: string
  url: string
  svg: string        
}

export interface Tech {
  name: string
  svg: string
}

export interface Project {
  image: string
  title: string
  description: string
  techStack: object[]
  links: object[]
}

export const HERO_SOCIAL_LINKS: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/ralitsavoronevska', svg: linkedInSvg },
  { name: 'GitHub', url: 'https://github.com/ralitsavoronevska', svg: gitHubSvg },
  { name: 'CodePen', url: 'https://codepen.io/ralitsavoronevska', svg: codePenSvg },
]

export const SOCIAL_LINKS: SocialLink[] = [
  ...HERO_SOCIAL_LINKS,
  { name: 'Discord', url: 'discordapp.com/users/1425751105060732959', svg: 'discord' },
  { name: 'Telegram', url: 'https//t.me/ralitsavoronevska/', svg: 'telegram' },
  { name: 'Email', url: 'mailto:r.voronevska@gmail.com', svg: 'email' },
]

export const TECH_STACK: Tech[] = [
  { name: 'VSCode', svg: 'vscode' },
  { name: 'WebStorm', svg: 'webstorm' },
  { name: 'HTML5', svg: 'html5' },
  { name: 'CSS3', svg: 'css3' },
  { name: 'Bootstrap', svg: 'bootstrap' },
  { name: 'SASS', svg: 'sass' },
  { name: 'Tailwind CSS', svg: 'tailwind-css' },
  { name: 'JavaScript', svg: 'javascript' },
  { name: 'jQuery', svg: 'jquery' },
  { name: 'Git', svg: 'git' },
  { name: 'Gulp', svg: 'gulp' },
  { name: 'Vue.js', svg: 'vue-js' },
  { name: 'TypeScript', svg: 'typescript' },
  { name: 'Pinia', svg: 'pinia' },
  { name: 'Vite.js', svg: 'vite-js' },
  { name: 'Node.js', svg: 'node-js' },
  { name: 'Express.js', svg: 'express-js' },
  { name: 'MongoDB', svg: 'mongo-db' },
  { name: 'Mongoose', svg: 'mongoose' },
  { name: 'PostMan', svg: 'postman' },
  { name: 'FireBase', svg: 'firebase' },
  { name: 'Netlify', svg: 'netlify' },
  { name: 'PhotoShop', svg: 'photoshop' },
  { name: 'JIRA', svg: 'jira' },
 ]

export const PROJECTS: Project[] = [
  {
    image: 'src/assets/projects/rest-api-with-nodejs.webp',
    title: 'REST API',
    description: 'Simple Shop RESTful API',
    techStack: [
      { name: 'Node.js', svg: 'node-js' },
      { name: 'Express.js', svg: 'express-js' },
      { name: 'MongoDB', svg: 'mongo-db' },
      { name: 'Mongoose', svg: 'mongoose' },
      { name: 'Nodemon', svg: 'nodemon' },
      { name: 'PostMan', svg: 'postman' },
    ],
    links: [
      { name: 'GitHub', url: 'https://github.com/ralitsavoronevska/rest-api-with-nodejs/', svg: gitHubSvg },
      { name: 'CodePen', url: '', svg: grayCodePen },
      { name: 'Live', url: '', svg: grayLive },
    ]
    
  },
  {
    image: '',
    title: 'Find a Coach App',
    description: 'Find and Register as a Coach',
    techStack: [
      { name: 'Vue.js', svg: 'vue-js' },
      { name: 'Vite.js', svg: 'vite-js' },
      { name: 'TypeScript', svg: 'typescript' },
      { name: 'Tailwind CSS', svg: 'tailwind-css' },
      { name: 'Pinia', svg: 'pinia' },
      { name: 'PostMan', svg: 'postman' },
    ],
    links: [
      { name: 'GitHub', url: '', svg: gitHubSvg },
      { name: 'CodePen', url: '', svg: codePenSvg },
      { name: 'Live', url: '', svg: liveLinkSvg },
    ]
  },
  {
    image: '',
    title: 'Forkify App',
    description: 'Cooking Recipes App',
    techStack: [
      { name: 'Vue.js', svg: 'vue-js' },
      { name: 'Vite.js', svg: 'vite-js' },
      { name: 'TypeScript', svg: 'typescript' },
      { name: 'Tailwind CSS', svg: 'tailwind-css' },
      { name: 'Pinia', svg: 'pinia' },
    ],
    links: [
      { name: 'GitHub', url: '', svg: gitHubSvg },
      { name: 'CodePen', url: '', svg: codePenSvg },
      { name: 'Live', url: '', svg: liveLinkSvg },
    ]
  },
  {
    image: '',
    title: 'Mapty App',
    description: 'Map your Exercise Activities',
    techStack: [
      { name: 'Vue.js', svg: 'vue-js' },
      { name: 'Vite.js', svg: 'vite-js' },
      { name: 'TypeScript', svg: 'typescript' },
      { name: 'Tailwind CSS', svg: 'tailwind-css' },
      { name: 'Pinia', svg: 'pinia' },
    ],
    links: [
      { name: 'GitHub', url: '', svg: gitHubSvg },
      { name: 'CodePen', url: '', svg: codePenSvg },
      { name: 'Live', url: '', svg: liveLinkSvg },
    ]
  },
  {
    image: 'src/assets/projects/monster-slayer-game.webp',
    title: 'Monster Slayer Game',
    description: 'Give the Monster A Lesson',
    techStack: [
      { name: 'Vue.js', svg: 'vue-js' },
      { name: 'Vite.js', svg: 'vite-js' },
      { name: 'TypeScript', svg: 'typescript' },
      { name: 'Tailwind CSS', svg: 'tailwind-css' },
      { name: 'Pinia', svg: 'pinia' },
    ],
    links: [
      { name: 'GitHub', url: 'https://github.com/ralitsavoronevska/monster-slayer-game/', svg: gitHubSvg },
      { name: 'CodePen', url: 'https://codepen.io/ralitsavoronevska/pen/gbPyXbV/', svg: codePenSvg },
      { name: 'Live', url: 'https://ralitsavoronevska.github.io/monster-slayer-game/', svg: liveLinkSvg },
    ]
  },
  {
    image: '',
    title: 'Pig Game',
    description: 'A Single Dice Game',
    techStack: [
      { name: 'Vue.js', svg: 'vue-js' },
      { name: 'Vite.js', svg: 'vite-js' },
      { name: 'TypeScript', svg: 'typescript' },
      { name: 'Tailwind CSS', svg: 'tailwind-css' },
      { name: 'Pinia', svg: 'pinia' },
    ],
    links: [
      { name: 'GitHub', url: '', svg: gitHubSvg },
      { name: 'CodePen', url: '', svg: codePenSvg },
      { name: 'Live', url: '', svg: liveLinkSvg },
    ]
  },
]
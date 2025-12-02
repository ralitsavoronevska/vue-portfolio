// tests/composables/usePortfolioData.test.ts
import { describe, it, expect } from 'vitest'
import { usePortfolioData } from '@/composables/usePortfolioData'

describe('usePortfolioData', () => {
  it('returns exactly 24 tech items', () => {
    const { techStack } = usePortfolioData()
    expect(techStack.value).toHaveLength(24)
  })

  it('includes key technologies', () => {
    const { techStack } = usePortfolioData()
    const names = techStack.value.map(t => t.name)
    expect(names).toContain('VSCode')
    expect(names).toContain('WebStorm')
    expect(names).toContain('HTML5')
    expect(names).toContain('CSS3')
    expect(names).toContain('Bootstrap')
    expect(names).toContain('SASS')
    expect(names).toContain('Tailwind CSS')
    expect(names).toContain('JavaScript')
    expect(names).toContain('jQuery')
    expect(names).toContain('Git')
    expect(names).toContain('Gulp')
    expect(names).toContain('Vue.js')
    expect(names).toContain('Vitest')
    expect(names).toContain('Node.js')
    expect(names).toContain('Express.js')
    expect(names).toContain('MongoDB')
    expect(names).toContain('Mongoose')
    expect(names).toContain('PostMan')
    expect(names).toContain('FireBase')
    expect(names).toContain('Netlify')
    expect(names).toContain('PhotoShop')
  })

  it('returns 6 projects', () => {
    const { projects } = usePortfolioData()
    expect(projects.value).toHaveLength(6)
  })

  it('first project has correct title and tech stack', () => {
    const { projects } = usePortfolioData()
    const first = projects.value[0]

    expect(first?.title).toBe('REST API')
    expect(first?.description).toBe('Simple Shop RESTful API')

    const techNames = (first?.techStack as { name: string }[]).map(t => t.name)
    expect(techNames).toEqual([
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'Nodemon',
      'PostMan',
    ])
  })

  it('Monster Slayer Game has correct live links', () => {
    const { projects } = usePortfolioData()
    const monster = projects.value.find(p => p.title === 'Monster Slayer Game')!

    const urls = (monster.links as { url: string }[]).map(l => l.url)
    expect(urls).toEqual([
      'https://github.com/ralitsavoronevska/monster-slayer-game/',
      'https://codepen.io/ralitsavoronevska/pen/gbPyXbV/',
      'https://ralitsavoronevska.github.io/monster-slayer-game/',
    ])
  })

  it('heroSocialIcons has exactly 3 items with correct names and URLs', () => {
  const { heroSocialIcons } = usePortfolioData()

  expect(heroSocialIcons.value).toHaveLength(3)

  expect(heroSocialIcons.value).toEqual([
    { name: 'LinkedIn', url: 'https://linkedin.com/in/ralitsavoronevska', file_name: expect.any(String) },
    { name: 'GitHub', url: 'https://github.com/ralitsavoronevska', file_name: expect.any(String) },
    { name: 'CodePen', url: 'https://codepen.io/ralitsavoronevska', file_name: expect.any(String) },
  ])
})

it('contactSocialIcons has exactly 6 items with correct names and URLs', () => {
  const { contactSocialIcons } = usePortfolioData()

  expect(contactSocialIcons.value).toHaveLength(6)

  const icons = contactSocialIcons.value

  expect(icons[0]?.name).toBe('LinkedIn')
  expect(icons[0]?.url).toBe('https://linkedin.com/in/ralitsavoronevska')

  expect(icons[1]?.name).toBe('GitHub')
  expect(icons[1]?.url).toBe('https://github.com/ralitsavoronevska')

  expect(icons[2]?.name).toBe('CodePen')
  expect(icons[2]?.url).toBe('https://codepen.io/ralitsavoronevska')

  expect(icons[3]?.name).toBe('Discord')
  expect(icons[3]?.url).toBe('https://discordapp.com/users/1425751105060732959')

  expect(icons[4]?.name).toBe('Telegram')
  expect(icons[4]?.url).toBe('https://t.me/ralitsavoronevska')

  expect(icons[5]?.name).toBe('Email')
  expect(icons[5]?.url).toBe('mailto:r.voronevska@gmail.com')
})

  it('all social icons have valid URLs', () => {
    const { heroSocialIcons, contactSocialIcons } = usePortfolioData()
    const allUrls = [
      ...heroSocialIcons.value,
      ...contactSocialIcons.value,
    ].map(icon => icon.url)

    allUrls.forEach(url => {
      // Accept http://, https://, mailto:, AND discordapp.com
      expect(url).toMatch(/^https?:\/\/|^mailto:|^discordapp\.com/)
    })
  })
})
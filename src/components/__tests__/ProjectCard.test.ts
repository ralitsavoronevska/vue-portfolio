// tests/composables/usePortfolioData.test.ts
import { describe, it, expect, beforeEach } from 'vitest'
import { usePortfolioData } from '@/composables/usePortfolioData'

describe('usePortfolioData', () => {

  it('returns exactly 24 tech items', () => {
    const { techStack } = usePortfolioData()
    expect(techStack.value).toHaveLength(24)
  })

  it('includes expected tech names', () => {
    const { techStack } = usePortfolioData()
    const names = techStack.value.map(t => t.name)
    expect(names).toContain('Vue.js')
    expect(names).toContain('TypeScript')
    expect(names).toContain('Tailwind CSS')
    expect(names).toContain('MongoDB')
    expect(names).toContain('Pinia')
  })

  it('returns 6 projects', () => {
    const { projects } = usePortfolioData()
    expect(projects.value).toHaveLength(6)
  })

  it('first project has correct title and tech', () => {
    const { projects } = usePortfolioData()
    const first = projects.value[0]
    expect(first?.title).toBe('REST API')
    expect(first?.description).toBe('Simple Shop RESTful API')
    expect(first?.techStack.map((t: any) => t.name)).toEqual([
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

    const linkUrls = (monster.links as { url: string }[]).map(l => l.url)

    expect(linkUrls).toEqual([
      'https://github.com/ralitsavoronevska/monster-slayer-game/',
      'https://codepen.io/ralitsavoronevska/pen/gbPyXbV/',
      'https://ralitsavoronevska.github.io/monster-slayer-game/',
    ])
  })

  it('heroSocialIcons has 3 items with correct names', () => {
    const { heroSocialIcons } = usePortfolioData()
    expect(heroSocialIcons.value).toHaveLength(3)
    const names = heroSocialIcons.value.map(icon => icon.name)
    expect(names).toEqual(['LinkedIn', 'GitHub', 'CodePen'])
  })

  it('contactSocialIcons has 6 items including Email', () => {
    const { contactSocialIcons } = usePortfolioData()
    expect(contactSocialIcons.value).toHaveLength(6)
    const last = contactSocialIcons.value[5]
    expect(last?.name).toBe('Email')
    expect(last?.url).toBe('mailto:r.voronevska@gmail.com')
  })

  it('all social links have valid URLs', () => {
    const { heroSocialIcons, contactSocialIcons } = usePortfolioData()
    const allUrls = [
      ...heroSocialIcons.value,
      ...contactSocialIcons.value,
    ].map(icon => icon.url)

    allUrls.forEach(url => {
      expect(url).toMatch(/^https?:\/\/|^mailto:/)
    })
  })
})
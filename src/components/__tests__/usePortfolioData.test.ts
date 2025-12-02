import { describe, it, expect } from 'vitest'
import { usePortfolioData } from '@/composables/usePortfolioData'

describe('usePortfolioData', () => {

  it('heroSocialIcons has exactly 3 items with correct names and URLs', () => {
    const { heroSocialIcons } = usePortfolioData()

    expect(heroSocialIcons.value).toHaveLength(3)

    expect(heroSocialIcons.value).toEqual([
      { name: 'LinkedIn', url: 'https://linkedin.com/in/ralitsavoronevska', file_name: expect.any(String) },
      { name: 'GitHub', url: 'https://github.com/ralitsavoronevska', file_name: expect.any(String) },
      { name: 'CodePen', url: 'https://codepen.io/ralitsavoronevska', file_name: expect.any(String) },
    ])
  })

  it('all social links have valid URLs', () => {
    const { heroSocialIcons } = usePortfolioData()
    const allUrls = [
      ...heroSocialIcons.value,
    ].map(icon => icon.url)

    allUrls.forEach(url => {
      expect(url).toMatch(/^https?:\/\/|^mailto:/)
    })
  })

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

  it('allows future projects to have empty URLs', () => {
    const { projects } = usePortfolioData()

    const hasEmptyUrl = projects.value.some(p =>
      (p.links as { url: string }[]).some(link => link.url === '')
    )

    expect(hasEmptyUrl).toBe(true)
  })
})
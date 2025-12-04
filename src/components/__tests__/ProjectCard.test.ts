// tests/composables/usePortfolioData.test.ts
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { usePortfolioData } from '@/composables/usePortfolioData'
import { ref, nextTick } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue' 

// MOCK useInView — we’ll override per test
const mockUseInView = vi.fn()
vi.mock('@/composables/useInView', () => ({
  useInView: () => mockUseInView(),
}))

describe('ProjectCard', () => {
  const defaultProps = {
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
    ],
    index: 0
  } as const as any

  beforeEach(() => {
    vi.clearAllMocks() // Reset mocks between tests
  })

  it('applies opacity-100 and translate-y-0 when isVisible is true', () => {
    mockUseInView.mockReturnValue({
      sectionRef: ref(null),
      isVisible: ref(true), // ← visible
    })

    const wrapper = mount(ProjectCard, { props: defaultProps })
    const article = wrapper.find('article')

    expect(article.classes()).toContain('opacity-100')
    expect(article.classes()).toContain('translate-y-0')
  })

  it('applies opacity-0 and translate-y-8 when isVisible is false', () => {
    mockUseInView.mockReturnValue({
      sectionRef: ref(null),
      isVisible: ref(false), // ← hidden
    })

    const wrapper = mount(ProjectCard, { props: defaultProps })
    const article = wrapper.find('article')

    expect(article.classes()).toContain('opacity-0')
    expect(article.classes()).toContain('translate-y-8')
  })

  it('renders project image with correct src and alt', () => {
    mockUseInView.mockReturnValue({ sectionRef: ref(null), isVisible: ref(true) })
    const wrapper = mount(ProjectCard, { props: defaultProps })
    const img = wrapper.find('.card-img')
    expect(img.attributes('src')).toBe('/assets/projects/rest-api-with-nodejs.webp')
    expect(img.attributes('alt')).toBe('Simple Shop RESTful API')
  })

  it('uses fallback image when image prop is missing', () => {
    mockUseInView.mockReturnValue({ sectionRef: ref(null), isVisible: ref(true) })
    const wrapper = mount(ProjectCard, { props: { ...defaultProps, image: undefined } })
    expect(wrapper.find('img').attributes('src')).toBe('/assets/projects/coming-soon.webp')
  })

  it('adds smaller gap class when techStack has more than 5 items', () => {
    mockUseInView.mockReturnValue({ sectionRef: ref(null), isVisible: ref(true) })
    const longTechStack = Array.from({ length: 6 }, (_, i) => ({ name: `Tech ${i}`, file_name: 'vuejs' }))
    const wrapper = mount(ProjectCard, { props: { ...defaultProps, techStack: longTechStack } })
    expect(wrapper.find('.glow-icons').classes()).toContain('gap-2')
  })

  it('renders gracefully with empty project URLs (future projects)', async () => {
    // Make sure the mock is set BEFORE mounting
    mockUseInView.mockReturnValue({
      sectionRef: ref(null),
      isVisible: ref(true),
    })

    const { projects } = usePortfolioData()
    const maptyApp = projects.value.find(p => p.title === 'Mapty App')!
    const urls = (maptyApp.links as { url: string }[]).map(l => l.url)
    expect(urls).toEqual(['','','',])
  })

  // Keep your data tests (they belong in usePortfolioData.test.ts — but okay for now)
  // → Later we can move them, but they pass now
  it('second project has correct title, description and tech', () => {
    const { projects } = usePortfolioData()
    const second = projects.value[1]
    expect(second?.title).toBe('REST API')
    expect(second?.description).toBe('Simple Shop RESTful API')
    expect(second?.techStack.map((t:any) => t.name)).toEqual([
      'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Nodemon', 'PostMan'
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
})
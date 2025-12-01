// tests/components/ProjectCard.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import ProjectCard from '@/components/ProjectCard.vue'
import { useInView } from '@/composables/useInView'
import { ref } from 'vue'

// This is the magic that works 100% with current Vitest
vi.mock('@/composables/useInView', () => ({
  useInView: vi.fn(), // ← turn it into a mock function
}))

// Re-configure the mock before each test
beforeEach(() => {
  vi.mocked(useInView).mockImplementation(() => ({
    sectionRef: ref(null),           // proper ref → no Vue warning
    isVisible: ref(true),            // default
  }))
})

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
    index: 0,
    isVisible: true,
  } as const as any

  it('renders title and description correctly', () => {
    const wrapper = mount(ProjectCard, { props: defaultProps })

    expect(wrapper.find('.card-title').text()).toBe('REST API')
    expect(wrapper.find('.card-desc').text()).toBe('Simple Shop RESTful API')
  })

  it('renders project image with correct src and alt', () => {
    const wrapper = mount(ProjectCard, { props: defaultProps })

    const img = wrapper.find('img')
    expect(img.attributes('src')).toBe('/assets/projects/rest-api-with-nodejs.webp')
    expect(img.attributes('alt')).toBe('Simple Shop RESTful API')
  })

  it('uses fallback image when image prop is missing', () => {
    const wrapper = mount(ProjectCard, {
      props: { ...defaultProps, image: '/assets/projects/coming-soon.webp' },
    })

    const img = wrapper.find('img')
    expect(img.attributes('src')).toBe('/assets/projects/coming-soon.webp')
  })

  it('renders correct number of GlowIcon components', () => {
    const wrapper = mount(ProjectCard, { props: defaultProps })

    // GlowIcon is rendered via v-for → check how many times it appears
    expect(wrapper.findAllComponents({ name: 'GlowIcon' })).toHaveLength(6)
  })

  it('passes correct tech prop to each GlowIcon', () => {
    const wrapper = mount(ProjectCard, { props: defaultProps })

    const glowIcons = wrapper.findAllComponents({ name: 'GlowIcon' })
    expect(glowIcons.at(0)?.props('tech')).toEqual({ name: 'Node.js', file_name: 'nodejs' })
    expect(glowIcons.at(1)?.props('tech')).toEqual({ name: 'Express.js', file_name: 'express' })
    expect(glowIcons.at(2)?.props('tech')).toEqual({ name: 'MongoDB', file_name: 'mongodb' })
    expect(glowIcons.at(3)?.props('tech')).toEqual({ name: 'Mongoose', file_name: 'mongoose' })
    expect(glowIcons.at(4)?.props('tech')).toEqual({ name: 'Nodemon', file_name: 'nodemon' })
    expect(glowIcons.at(5)?.props('tech')).toEqual({ name: 'PostMan', file_name: 'postman' })
  })

  it('renders SocialIcons with correct links prop', () => {
    const wrapper = mount(ProjectCard, { props: defaultProps })

    const socialIcons = wrapper.findComponent({ name: 'SocialIcons' })
    expect(socialIcons.exists()).toBe(true)
    expect(socialIcons.props('icons')).toEqual(defaultProps.links)
    expect(socialIcons.props('aria')).toBe('REST API')
  })

  it('applies opacity-100 and translate-y-0 when isVisible is true', () => {
    const wrapper = mount(ProjectCard, { props: defaultProps })
    const article = wrapper.find('article')

    expect(article.classes()).toContain('opacity-100')
    expect(article.classes()).toContain('translate-y-0')
  })

  it('applies opacity-0 and translate-y-8 when isVisible is false', () => {
    // This is the one that was failing
    vi.mocked(useInView).mockReturnValue({
      sectionRef: ref(null),
      isVisible: ref(false),   // ← force the ref to be false
    })

    const wrapper = mount(ProjectCard, { props: defaultProps })
    const article = wrapper.find('article')

    expect(article.classes()).toContain('opacity-0')
    expect(article.classes()).toContain('translate-y-8')
  })

  it('adds smaller gap class when techStack has more than 5 items', () => {
    const longTechStack = Array(6).fill(null).map((_, i) => ({
      name: `Tech ${i}`,
      file_name: 'vuejs',
    }))

    const wrapper = mount(ProjectCard, {
      props: { ...defaultProps, techStack: longTechStack },
    })

    expect(wrapper.find('.glow-icons').classes()).toContain('gap-2')
  })
})
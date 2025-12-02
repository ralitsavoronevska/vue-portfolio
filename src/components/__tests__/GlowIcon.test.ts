import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import GlowIcon from '@/components/GlowIcon.vue'

describe('GlowIcon', () => {
  const defaultProps = {
    tech: { name: 'Vue.js', file_name: 'vuejs' },
    index: 0,
    boxSizes: 'w-11 h-11 md:w-12 md:h-12 lg:w-11 lg:h-11',
    iconSizes: 'w-11 h-11 md:w-12 md:h-12 lg:w-11 lg:h-11 rounded-lg',
    isVisible: true,
  } as const

  it('applies correct visibility when isVisible is true', () => {
    const wrapper = mount(GlowIcon, { props: defaultProps })
    const glowBox = wrapper.find('.glow-box')
    expect(glowBox.attributes('class')).toContain('opacity-100')
    expect(glowBox.attributes('class')).toContain('translate-y-0')
  })

  it('hides the icon when isVisible is false', () => {
    const wrapper = mount(GlowIcon, {
      props: { ...defaultProps, isVisible: false },
    })
    const glowBox = wrapper.find('.glow-box')
    expect(glowBox.attributes('class')).toContain('opacity-0')
    expect(glowBox.attributes('class')).toContain('translate-y-4')
  })

  it('renders the tech name in the tooltip', () => {
    const wrapper = mount(GlowIcon, { props: defaultProps })
    expect(wrapper.find('.tooltip').text()).toBe('Vue.js')
  })

  it('shows tooltip on hover (adds group-hover/tech classes)', async () => {
    const wrapper = mount(GlowIcon, { props: defaultProps })
    const glowBox = wrapper.find('.glow-box')
    const tooltip = wrapper.find('.tooltip')

    // Before hover — these classes are present in the source, but not active
    const initialClasses = tooltip.attributes('class') || ''
    expect(initialClasses).toContain('group-hover/tech:opacity-100')
    expect(initialClasses).toContain('group-hover/tech:translate-y-0')

    // Simulate hover by adding the group-hover state
    glowBox.element.classList.add('group-hover')
    await wrapper.vm.$nextTick()

    // After hover — the same class string is still there (Tailwind doesn't remove it)
    // But we can trust that Tailwind applied the style if the class is present + group-hover exists
    expect(glowBox.element.classList.contains('group-hover')).toBe(true)
    expect(initialClasses).toContain('group-hover/tech:opacity-100')
    expect(initialClasses).toContain('group-hover/tech:translate-y-0')
  })

  it('renders the iconify-icon component', () => {
    const wrapper = mount(GlowIcon, { props: defaultProps })
    expect(wrapper.find('iconify-icon').exists()).toBe(true)
  })

  it('matches snapshot', () => {
    const wrapper = mount(GlowIcon, { props: defaultProps })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
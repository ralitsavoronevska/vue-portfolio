import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AboutMe from '@/components/AboutMe.vue'

describe('AboutMe', () => {
  it('displays 2 buttons - one to view projects and one to download CV', () => {
    const wrapper = mount(AboutMe)
    const buttons = wrapper.findAll('a')
    expect(buttons).toHaveLength(2)
    expect(buttons.at(0)?.attributes('href')).toBe('#projects')
    expect(buttons.at(1)?.attributes('href')).toBe('https://ralitsavoronevska.com/dist/assets/Ralitsa-Voronevska-CV.pdf')
  })

  it('displays all 18 tech stack icons', () => {
    const wrapper = mount(AboutMe)
    expect(wrapper.findAll('iconify-icon')).toHaveLength(18)
  })
})
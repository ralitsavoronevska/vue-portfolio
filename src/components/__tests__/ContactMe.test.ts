import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactMe from '@/components/ContactMe.vue'

describe('ContactMe', () => {
  it('shows 6 contact methods with working links', () => {
    const wrapper = mount(ContactMe)
    const links = wrapper.findAll('a')
    expect(links).toHaveLength(6)
    expect(links.at(5)?.attributes('href')).toBe('mailto:r.voronevska@gmail.com')
  })
})
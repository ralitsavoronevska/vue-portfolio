import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header', () => {
  it('renders navigation links', () => {
    const wrapper = mount(Header)
    expect(wrapper.find('a[href="#about"]').exists()).toBe(true)
    expect(wrapper.find('a[href="#projects"]').exists()).toBe(true)
    expect(wrapper.find('a[href="#contact"]').exists()).toBe(true)
  })
})
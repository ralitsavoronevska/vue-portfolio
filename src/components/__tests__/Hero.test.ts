import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import Hero from '@/components/Hero.vue'

describe('Hero', () => {
  it('renders hero with correct name, title and social links', () => {
    const wrapper = mount(Hero)
    expect(wrapper.text()).toContain('Ralitsa Voronevska')
    expect(wrapper.text()).toContain('The Mid Front-end Developer')
    expect(wrapper.findAll('[data-testid="social-icon"]')).toHaveLength(3)
  })
})
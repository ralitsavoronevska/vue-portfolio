// src/components/__tests__/Footer.test.ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'
import { usePortfolioData } from '@/composables/usePortfolioData'

describe('Footer', () => {
  it('renders footer with current year and name', () => {
    const wrapper = mount(Footer)
    const year = new Date().getFullYear()

    expect(wrapper.text()).toContain('Ralitsa Voronevska')
    expect(wrapper.text()).toContain(`© ${year}`)
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

  it('all social links have valid URLs', () => {
    const { contactSocialIcons } = usePortfolioData()
    const allUrls = [...contactSocialIcons.value,].map(icon => icon.url)

    allUrls.forEach(url => {
      expect(url).toMatch(/^https?:\/\/|^mailto:/)
    })
  })
})
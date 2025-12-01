// tests/composables/usePortfolioData.test.ts
import { describe, it, expect } from 'vitest'
import { usePortfolioData } from '@/composables/usePortfolioData'

describe('usePortfolioData', () => {
  it('returns tech stack with correct length', () => {
    const { techStack } = usePortfolioData()
    expect(techStack.value.length).toBe(24)  // from your portfolio.ts
  })

  it('returns projects array', () => {
    const { projects } = usePortfolioData()
    expect(Array.isArray(projects.value)).toBe(true)
    expect(projects.value.length).toBeGreaterThan(0)
  })
})
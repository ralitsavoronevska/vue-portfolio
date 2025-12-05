import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProjectsList from '@/components/ProjectsList.vue'
import ProjectCard from '@/components/ProjectCard.vue'

describe('ProjectsList', () => {
  it('renders all 8 projects', () => {
    const wrapper = mount(ProjectsList)
    expect(wrapper.findAllComponents(ProjectCard)).toHaveLength(8)
  })
})
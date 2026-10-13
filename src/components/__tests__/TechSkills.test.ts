
import { describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { ref } from "vue";
import TechSkills from "@/components/TechSkills.vue";

vi.mock("@/composables/useReveal", () => ({
  useReveal: () => ({
    isVisible: ref(true),
    revealClasses: ref({
      "opacity-100 translate-y-0": true,
    }),
    revealStyle: (delay: number) => ({
      transitionDelay: `${delay}ms`,
    }),
  }),
}));

describe("TechSkills", () => {
  it("renders the section heading and subtitle", () => {
    const wrapper = mount(TechSkills);

    expect(wrapper.find("#tech-skills").exists()).toBe(true);
    expect(wrapper.find("h2").text()).toContain("Technical");
    expect(wrapper.find("h2").text()).toContain("Skills");
    expect(wrapper.find(".tech-skills-subtitle").exists()).toBe(true);
  });

  it("renders all three skills categories", () => {
    const wrapper = mount(TechSkills);

    const headings = wrapper.findAll(".tech-skills-category h3");

    expect(headings).toHaveLength(3);
    expect(headings.map((heading) => heading.text())).toEqual([
      "Core Expertise",
      "Previous Experience & Refreshing",
      "Exploring & Interested In",
    ]);
  });

  it("separates existing skills from technology interests", () => {
    const wrapper = mount(TechSkills);
    const categories = wrapper.findAll(".tech-skills-category");

    expect(categories[0]!.text()).toContain("Vue 3");
    expect(categories[0]!.text()).toContain("TypeScript");

    expect(categories[1]!.text()).toContain("Python");

    expect(categories[2]!.text()).toContain("React");
    expect(categories[2]!.text()).toContain("Playwright");
    expect(categories[2]!.text()).toContain("shadcn-vue");

    expect(categories[0]!.text()).not.toContain("Playwright");
  });

  it("renders technologies as semantic lists", () => {
    const wrapper = mount(TechSkills);

    expect(wrapper.findAll(".tech-skills-card").length).toBeGreaterThan(0);

    wrapper.findAll(".tech-skills-card").forEach((card) => {
      expect(card.find("h4").exists()).toBe(true);
      expect(card.find("ul").exists()).toBe(true);
      expect(card.findAll("li").length).toBeGreaterThan(0);
    });
  });
});

import { describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { ref } from "vue";
import Hero from "@/components/Hero.vue";

vi.mock("@/composables/useReveal", () => ({
  useReveal: () => ({
    isVisible: ref(true),
    revealClasses: ref({
      "transition-all duration-700 ease-out": true,
      "opacity-100 translate-y-0": true,
    }),
    revealStyle: (delay: number) => ({
      transitionDelay: `${delay}ms`,
    }),
  }),
}));

describe( "Hero", () => {
  
  it("renders hero with correct name, title and social links", () => {
    const wrapper = mount(Hero);
    expect(wrapper.text()).toContain("Ralitsa Voronevska");
    expect(wrapper.text()).toContain("Vue.js Frontend Developer");
    expect(wrapper.findAll('[data-testid="social-icon"]')).toHaveLength(3);
  });

  it("uses high-priority image loading for the mobile hero", () => {
    const wrapper = mount(Hero);
    const img = wrapper.find("img");

    expect(img.exists()).toBe(true);
    expect(img.attributes("fetchpriority")).toBe("high");
    expect(img.attributes("decoding")).toBe("async");
    expect(img.attributes("width")).toBe("320");
    expect(img.attributes("height")).toBe("320");
  });
  
  it("renders two CTA links for projects and resume", () => {

      const wrapper = mount(Hero);
      const buttons = wrapper.findAll("a.btn-styles");
      expect(buttons).toHaveLength(2);
      expect(buttons.at(0)?.attributes("href")).toBe("#projects");
      expect(buttons.at(1)?.attributes("href")).toBe(
        "https://ralitsavoronevska.com/assets/Ralitsa-Voronevska-Frontend-Developer-CV.pdf",
      );
    });
});


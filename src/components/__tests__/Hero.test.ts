import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Hero from "@/components/Hero.vue";

describe("Hero", () => {
  it("renders hero with correct name, title and social links", () => {
    const wrapper = mount(Hero);
    expect(wrapper.text()).toContain("Ralitsa Voronevska");
    expect(wrapper.text()).toContain("Vue.js Front-end Developer");
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
});

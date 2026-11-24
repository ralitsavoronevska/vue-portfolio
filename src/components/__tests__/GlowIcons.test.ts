import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import GlowIcons from "@/components/GlowIcons.vue";

describe("GlowIcons", () => {
  const defaultProps = {
    tech: { name: "Vue.js", file_name: "vuejs" },
    index: 0,
    boxSizes: "w-11 h-11 md:w-12 md:h-12 lg:w-11 lg:h-11",
    iconSizes: "w-11 h-11 md:w-12 md:h-12 lg:w-11 lg:h-11 rounded-lg",
    imgSizes: "w-11 h-11 md:w-12 md:h-12 lg:w-11 lg:h-11",
    isVisible: true,
  } as const;

  it("applies correct visibility when isVisible is true", () => {
    const wrapper = mount(GlowIcons, { props: defaultProps });
    const classes = wrapper.find(".glow-box").classes();

    expect(classes).toContain("opacity-100");
    expect(classes).toContain("scale-100");
    expect(classes).toContain("translate-y-0");

    expect(classes).not.toContain("opacity-0");
    expect(classes).not.toContain("scale-75");
    expect(classes).not.toContain("translate-y-4");
  });

  it("applies hidden state classes when isVisible is false", () => {
    const wrapper = mount(GlowIcons, {
      props: { ...defaultProps, isVisible: false },
    });

    const classes = wrapper.find(".glow-box").classes();

    expect(classes).toContain("opacity-0");
    expect(classes).toContain("scale-75");
    expect(classes).toContain("translate-y-4");

    expect(classes).not.toContain("opacity-100");
    expect(classes).not.toContain("scale-100");
    expect(classes).not.toContain("translate-y-0");
  });

  it("updates visibility classes reactively when isVisible changes", async () => {
    const wrapper = mount(GlowIcons, {
      props: { ...defaultProps, isVisible: false },
    });

    const glowBox = wrapper.find(".glow-box");

    expect(glowBox.classes()).toContain("opacity-0");

    await wrapper.setProps({ isVisible: true });

    expect(glowBox.classes()).toContain("opacity-100");
    expect(glowBox.classes()).toContain("scale-100");
    expect(glowBox.classes()).toContain("translate-y-0");
    expect(glowBox.classes()).not.toContain("opacity-0");

    await wrapper.setProps({ isVisible: false });

    expect(glowBox.classes()).toContain("opacity-0");
    expect(glowBox.classes()).not.toContain("opacity-100");
  });

  it.each([
    [0, "100ms"],
    [1, "200ms"],
    [4, "500ms"],
    [9, "1000ms"],
  ])(
    "applies the correct transition delay for index %i",
    (index, expectedDelay) => {
      const wrapper = mount(GlowIcons, {
        props: { ...defaultProps, index },
      });

      const glowBox = wrapper.get<HTMLElement>(".glow-box");

      expect(glowBox.element.style.transitionDelay).toBe(expectedDelay);
    },
  );

  it("removes the transition delay when isVisible becomes false", async () => {
    const wrapper = mount(GlowIcons, {
      props: { ...defaultProps, index: 2 },
    });

    const glowBox = wrapper.get<HTMLElement>(".glow-box");

    expect(glowBox.element.style.transitionDelay).toBe("300ms");

    await wrapper.setProps({ isVisible: false });

    expect(glowBox.element.style.transitionDelay).toBe("");
  });

  it("includes reduced-motion classes for the icon and tooltip", () => {
    const wrapper = mount(GlowIcons, { props: defaultProps });

    const glowBox = wrapper.find(".glow-box");
    const tooltip = wrapper.find(".tooltip");

    expect(glowBox.classes()).toEqual(
      expect.arrayContaining([
        "motion-reduce:opacity-100",
        "motion-reduce:scale-100",
        "motion-reduce:translate-y-0",
        "motion-reduce:transition-none",
      ]),
    );

    expect(tooltip.classes()).toEqual(
      expect.arrayContaining([
        "motion-reduce:translate-y-0",
        "motion-reduce:transition-none",
      ]),
    );
  });

  it("renders the tech name in the tooltip", () => {
    const wrapper = mount(GlowIcons, { props: defaultProps });

    expect(wrapper.find(".tooltip").text()).toBe("Vue.js");
  });

  it("includes named group classes for tooltip hover and focus states", () => {
    const wrapper = mount(GlowIcons, { props: defaultProps });

    const glowBox = wrapper.find(".glow-box");
    const tooltip = wrapper.find(".tooltip");

    expect(glowBox.classes()).toContain("group/tech");

    expect(tooltip.classes()).toEqual(
      expect.arrayContaining([
        "group-hover/tech:opacity-100",
        "group-hover/tech:visible",
        "group-hover/tech:translate-y-0",
        "group-focus/tech:opacity-100",
        "group-focus/tech:visible",
        "group-focus/tech:translate-y-0",
      ]),
    );
  });

  it("provides keyboard accessibility and an accessible name", () => {
    const wrapper = mount(GlowIcons, { props: defaultProps });

    const glowBox = wrapper.find(".glow-box");

    expect(glowBox.attributes("tabindex")).toBe("0");
    expect(glowBox.attributes("role")).toBe("img");
    expect(glowBox.attributes("aria-label")).toBe("Vue.js Logo");

    expect(glowBox.classes()).toEqual(
      expect.arrayContaining([
        "focus-visible:outline-2",
        "focus-visible:outline-offset-4",
        "focus-visible:outline-pink-400",
      ]),
    );
  });

  it("renders the image with alt text and lazy loading", () => {
    const wrapper = mount(GlowIcons, { props: defaultProps });

    const image = wrapper.find("img");

    expect(image.attributes("alt")).toBe("Vue.js Logo");
    expect(image.attributes("loading")).toBe("lazy");
  });

  it("matches snapshot", () => {
    const wrapper = mount(GlowIcons, { props: defaultProps });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
import { describe, it, expect } from "vitest";
import { nextTick } from "vue";
import { mount } from "@vue/test-utils";
import Header from "@/components/Header.vue";

describe("Header", () => {
  it("renders navigation links", () => {
    const wrapper = mount(Header);
    expect(wrapper.find('a[href="#about"]').exists()).toBe(true);
    expect(wrapper.find('a[href="#projects"]').exists()).toBe(true);
    expect(wrapper.find('a[href="#contact"]').exists()).toBe(true);
  });

  it("opens and closes the mobile menu via the toggle button", async () => {
    const wrapper = mount(Header);
    const toggle = wrapper.find("button.nav-toggle");
    const nav = wrapper.find("nav");

    expect(toggle.attributes("aria-expanded")).toBe("false");
    expect(nav.classes()).not.toContain("main-navigation--open");

    await toggle.trigger("click");
    await nextTick();

    expect(toggle.attributes("aria-expanded")).toBe("true");
    expect(nav.classes()).toContain("main-navigation--open");

    await toggle.trigger("click");
    await nextTick();

    expect(toggle.attributes("aria-expanded")).toBe("false");
    expect(nav.classes()).not.toContain("main-navigation--open");
  });

  it("closes the menu when a nav item is clicked", async () => {
    const wrapper = mount(Header);
    const toggle = wrapper.find("button.nav-toggle");
    const aboutLink = wrapper.find('a[href="#about"]');

    await toggle.trigger("click");
    expect(wrapper.find("nav").classes()).toContain("main-navigation--open");

    await aboutLink.trigger("click");
    await nextTick();

    expect(wrapper.find("nav").classes()).not.toContain("main-navigation--open");
  });

  it("closes the menu on Escape and returns focus to the toggle", async () => {
    const wrapper = mount(Header, { attachTo: document.body });
    const header = wrapper.find("header");
    const toggle = wrapper.find("button.nav-toggle");

    await toggle.trigger("click");
    expect(wrapper.find("nav").classes()).toContain("main-navigation--open");

    await header.trigger("keydown.esc");
    await nextTick();

    expect(wrapper.find("nav").classes()).not.toContain("main-navigation--open");
    expect(document.activeElement).toBe(toggle.element);

    wrapper.unmount();
  });

  it("closes the menu when clicking outside the header", async () => {
    const wrapper = mount(Header);

    await wrapper.find("button.nav-toggle").trigger("click");
    expect(wrapper.find("nav").classes()).toContain("main-navigation--open");

    document.body.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await nextTick();

    expect(wrapper.find("nav").classes()).not.toContain("main-navigation--open");
  });

  it("closes the menu when the viewport becomes desktop-sized", async () => {
    const wrapper = mount(Header);
    const originalWidth = window.innerWidth;

    Object.defineProperty(window, "innerWidth", {
      configurable: true,
      writable: true,
      value: 500,
    });

    await wrapper.find("button.nav-toggle").trigger("click");
    expect(wrapper.find("nav").classes()).toContain("main-navigation--open");

    Object.defineProperty(window, "innerWidth", {
      configurable: true,
      writable: true,
      value: 900,
    });

    window.dispatchEvent(new Event("resize"));
    await nextTick();

    expect(wrapper.find("nav").classes()).not.toContain("main-navigation--open");

    Object.defineProperty(window, "innerWidth", {
      configurable: true,
      writable: true,
      value: originalWidth,
    });
  });

  it("provides the expected logo and toggle accessibility labels", () => {
    const wrapper = mount(Header);

    expect(wrapper.find("a.logo-link").attributes("aria-label")).toBe("Home page");
    expect(wrapper.find("button.nav-toggle").attributes("aria-label")).toBe(
      "Open navigation menu",
    );
  });
});

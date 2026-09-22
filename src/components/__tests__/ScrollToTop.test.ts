import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { mount, type VueWrapper } from "@vue/test-utils";
import { nextTick } from "vue";
import ScrollToTop from "@/components/ScrollToTop.vue";

describe("ScrollToTop", () => {
  let wrapper: VueWrapper;
  let rafQueue: FrameRequestCallback[] = [];

  const flushRaf = async () => {
    const queued = [...rafQueue];
    rafQueue = [];
    queued.forEach((cb) => cb(0));
    await nextTick();
  };

  beforeEach(() => {
    rafQueue = [];

    Object.defineProperty(window, "scrollY", {
      value: 0,
      writable: true,
      configurable: true,
    });

    Object.defineProperty(window, "requestAnimationFrame", {
      value: vi.fn((cb: FrameRequestCallback) => {
        rafQueue.push(cb);
        return rafQueue.length;
      }),
      writable: true,
      configurable: true,
    });

    Object.defineProperty(window, "scrollTo", {
      value: vi.fn(),
      writable: true,
      configurable: true,
    });
  });

  afterEach(() => {
    wrapper?.unmount();
    vi.restoreAllMocks();
  });

  it("does not render when the page is near the top", () => {
    wrapper = mount(ScrollToTop);

    expect(wrapper.find(".scroll-to-top").exists()).toBe(false);
  });

  it("renders when the page is scrolled past 500px", async () => {
    wrapper = mount(ScrollToTop);
    window.scrollY = 600;

    window.dispatchEvent(new Event("scroll"));
    await flushRaf();

    const button = wrapper.find(".scroll-to-top");
    expect(button.exists()).toBe(true);
    expect(button.attributes("data-active")).toBe("true");
  });

  it("hides again when the page is scrolled back up", async () => {
    wrapper = mount(ScrollToTop);
    window.scrollY = 600;
    window.dispatchEvent(new Event("scroll"));
    await flushRaf();

    expect(wrapper.find(".scroll-to-top").exists()).toBe(true);

    window.scrollY = 400;
    window.dispatchEvent(new Event("scroll"));
    await flushRaf();

    expect(wrapper.find(".scroll-to-top").exists()).toBe(false);
  });

  it("keeps the button hidden when scrollY is exactly 500", async () => {
    wrapper = mount(ScrollToTop);
    window.scrollY = 500;

    window.dispatchEvent(new Event("scroll"));
    await flushRaf();

    expect(wrapper.find(".scroll-to-top").exists()).toBe(false);
  });

  it("scrolls to the top smoothly when clicked", async () => {
    wrapper = mount(ScrollToTop);
    window.scrollY = 600;
    window.dispatchEvent(new Event("scroll"));
    await flushRaf();

    await wrapper.find(".scroll-to-top").trigger("click");

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });
});

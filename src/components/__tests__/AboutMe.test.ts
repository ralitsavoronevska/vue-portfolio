
import { beforeEach, describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { nextTick, ref } from "vue";
import AboutMe from "@/components/AboutMe.vue";

const { mockUseInView } = vi.hoisted(() => ({
  mockUseInView: vi.fn(),
}));

vi.mock("@/composables/useInView", () => ({
  useInView: mockUseInView,
}));

describe("AboutMe", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("applies reveal classes when the section becomes visible", () => {
    mockUseInView.mockReturnValue({
      sectionRef: ref(null),
      isVisible: ref(true),
    });

    const wrapper = mount(AboutMe);
    const h2 = wrapper.find("h2");

    expect(h2.classes()).toContain("opacity-100");
    expect(h2.classes()).toContain("translate-y-0");
    expect(h2.attributes("style")).toContain("100ms");
  });

  it("applies hidden reveal classes when the section is not visible", () => {
    mockUseInView.mockReturnValue({
      sectionRef: ref(null),
      isVisible: ref(false),
    });

    const wrapper = mount(AboutMe);
    const h2 = wrapper.find("h2");

    expect(h2.classes()).toContain("opacity-0");
    expect(h2.classes()).toContain("translate-y-8");
    expect(h2.attributes("style")).toBeUndefined();
    expect(wrapper.findAll(".highlight-card")).toHaveLength(3);
  });

  it("reactively updates reveal classes when visibility changes", async () => {
    const isVisible = ref(false);

    mockUseInView.mockReturnValue({
      sectionRef: ref(null),
      isVisible,
    });

    const wrapper = mount(AboutMe);
    const h2 = wrapper.find("h2");

    expect(h2.classes()).toContain("opacity-0");

    isVisible.value = true;
    await nextTick();

    expect(h2.classes()).toContain("opacity-100");
    expect(h2.classes()).not.toContain("opacity-0");
    expect(h2.attributes("style")).toContain("100ms");
  });
});

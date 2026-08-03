import { beforeEach, describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { ref } from "vue";
import AboutMe from "@/components/AboutMe.vue";

const mockUseInView = vi.fn();
vi.mock("@/composables/useInView", () => ({
  useInView: () => mockUseInView(),
}));

describe("AboutMe", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("displays 2 buttons - one to view projects and one to download CV", () => {
    mockUseInView.mockReturnValue({
      sectionRef: ref(null),
      isVisible: ref(true),
    });

    const wrapper = mount(AboutMe);
    const buttons = wrapper.findAll("a");
    expect(buttons).toHaveLength(2);
    expect(buttons.at(0)?.attributes("href")).toBe("#projects");
    expect(buttons.at(1)?.attributes("href")).toBe(
      "https://ralitsavoronevska.com/assets/Ralitsa-Voronevska-CV.pdf",
    );
  });

  it("applies reveal classes when the section becomes visible", () => {
    mockUseInView.mockReturnValue({
      sectionRef: ref(null),
      isVisible: ref(true),
    });

    const wrapper = mount(AboutMe);
    const h2 = wrapper.find("h2");
    expect(h2.html()).toContain("100ms");
  });
});

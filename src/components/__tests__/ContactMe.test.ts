import { beforeEach, describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { ref } from "vue";
import ContactMe from "@/components/ContactMe.vue";

const mockUseInView = vi.fn();
vi.mock("@/composables/useInView", () => ({
  useInView: () => mockUseInView(),
}));

describe("ContactMe", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("shows 6 contact methods with working links", () => {
    mockUseInView.mockReturnValue({
      sectionRef: ref(null),
      isVisible: ref(true),
    });

    const wrapper = mount(ContactMe);
    const links = wrapper.findAll("a");
    expect(links).toHaveLength(5);
    expect(links.at(4)?.attributes("href")).toBe(
      "mailto:r.voronevska@gmail.com",
    );
    expect(wrapper.find("h2").attributes("style")).toContain("100ms");
  });

  it("applies hidden reveal classes when the section is not visible", () => {
    mockUseInView.mockReturnValue({
      sectionRef: ref(null),
      isVisible: ref(false),
    });

    const wrapper = mount(ContactMe);
    const h2 = wrapper.find("h2");

    expect(h2.classes()).toContain("opacity-0");
    expect(h2.attributes("style")).toBeUndefined();
    expect(wrapper.find(".location").exists()).toBe(true);
  });
});

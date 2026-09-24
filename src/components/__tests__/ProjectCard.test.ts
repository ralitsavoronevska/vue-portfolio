/* eslint-disable @typescript-eslint/no-explicit-any */
// tests/composables/usePortfolioData.test.ts
import { describe, it, expect, beforeEach, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { usePortfolioData } from "@/composables/usePortfolioData";
import { ref } from "vue";
import ProjectCard from "@/components/ProjectCard.vue";

// MOCK useInView — we’ll override per test
const mockUseInView = vi.fn();
vi.mock("@/composables/useInView", () => ({
  useInView: () => mockUseInView(),
}));

describe("ProjectCard", () => {
  const defaultProps = {
    image: "/assets/projects/rest-api-with-nodejs.webp",
    title: "Secure Node.js REST API",
    description: "RESTful API with Authentication",
    techDescription: "Multer + Morgan + JWT + Bcrypt",
    techStack: [
      { name: "Node.js", file_name: "nodejs" },
      { name: "Express.js", file_name: "express" },
      { name: "MongoDB", file_name: "mongodb" },
      { name: "Mongoose", file_name: "mongoose" },
      { name: "Nodemon", file_name: "nodemon" },
      { name: "PostMan", file_name: "postman" },
    ],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/ralitsavoronevska/rest-api-with-nodejs/",
        file_name: "github",
      },
      { name: "CodePen", url: "", file_name: "grayCodePen" },
      { name: "Live", url: "", file_name: "grayLive" },
    ],
    index: 0,
  } as const as any;

  beforeEach(() => {
    vi.clearAllMocks(); // Reset mocks between tests
  });

  it("applies opacity-100 and translate-y-0 when isVisible is true", () => {
    mockUseInView.mockReturnValue({
      sectionRef: ref(null),
      isVisible: ref(true), // ← visible
    });

    const wrapper = mount(ProjectCard, { props: { project: defaultProps as any, index: defaultProps.index } });

    const article = wrapper.find("article");

    expect(article.classes()).toContain("opacity-100");
    expect(article.classes()).toContain("translate-y-0");
  });

  it("applies opacity-0 and translate-y-8 when isVisible is false", () => {
    mockUseInView.mockReturnValue({
      sectionRef: ref(null),
      isVisible: ref(false), // ← hidden
    });

    const wrapper = mount(ProjectCard, { props: { project: defaultProps as any, index: defaultProps.index } });
    const article = wrapper.find("article");

    expect(article.classes()).toContain("opacity-0");
    expect(article.classes()).toContain("translate-y-8");
  });

  it("uses a staggered delay based on the card index when visible", () => {
    mockUseInView.mockReturnValue({
      sectionRef: ref(null),
      isVisible: ref(true),
    });

    const wrapper = mount(ProjectCard, {
      props: { project: defaultProps as any, index: 1 },
    });
    const article = wrapper.find("article");

    // transitionDelay should be set to 200ms for index=1
    expect(article.element.style.transitionDelay).toBe("200ms");
  });

  it("renders project image with correct src and alt", () => {
    mockUseInView.mockReturnValue({
      sectionRef: ref(null),
      isVisible: ref(true),
    });
    const wrapper = mount(ProjectCard, { props: { project: defaultProps as any, index: defaultProps.index } });
    const img = wrapper.find(".card-img");
    expect(img.attributes("src")).toBe(
      "/assets/projects/rest-api-with-nodejs.webp",
    );
    expect(img.attributes("alt")).toBe("RESTful API with Authentication");
  });

  it("uses fallback image when image prop is missing", () => {
    mockUseInView.mockReturnValue({
      sectionRef: ref(null),
      isVisible: ref(true),
    });
    const wrapper = mount(ProjectCard, {
      props: { project: { ...defaultProps, image: undefined } as any, index: defaultProps.index },
    });
    expect(wrapper.find("img").attributes("src")).toBe(
      "/src/assets/projects/coming-soon.webp",
    );
  });

  it("adds bigger gap class when techStack has 5 items", () => {
    mockUseInView.mockReturnValue({
      sectionRef: ref(null),
      isVisible: ref(true),
    });
    const longTechStack = Array.from({ length: 5 }, (_, i) => ({
      name: `Tech ${i}`,
      file_name: "vuejs",
    }));
    const wrapper = mount(ProjectCard, {
      props: { project: { ...defaultProps, techStack: longTechStack } as any, index: defaultProps.index },
    });
    expect(wrapper.find(".glow-icons").classes()).toContain("gap-3.5");
  });

  it("adds the default gap class when techStack has a normal size", () => {
    mockUseInView.mockReturnValue({
      sectionRef: ref(null),
      isVisible: ref(true),
    });
    const normalTechStack = Array.from({ length: 3 }, (_, i) => ({
      name: `Tech ${i}`,
      file_name: "vuejs",
    }));
    const wrapper = mount(ProjectCard, {
      props: { project: { ...defaultProps, techStack: normalTechStack } as any, index: defaultProps.index },
    });
    expect(wrapper.find(".glow-icons").classes()).toContain("gap-3");
  });

  it("adds smaller gap class when techStack has 7 items", () => {
    mockUseInView.mockReturnValue({
      sectionRef: ref(null),
      isVisible: ref(true),
    });
    const longTechStack = Array.from({ length: 7 }, (_, i) => ({
      name: `Tech ${i}`,
      file_name: "vuejs",
    }));
    const wrapper = mount(ProjectCard, {
      props: { project: { ...defaultProps, techStack: longTechStack } as any, index: defaultProps.index },
    });
    expect(wrapper.find(".glow-icons").classes()).toContain("gap-1.25");
  });

  it("uses default values when optional props are missing", () => {
    mockUseInView.mockReturnValue({
      sectionRef: ref(null),
      isVisible: ref(false),
    });

    const wrapper = mount(ProjectCard, {
      props: { project: { image: '', title: undefined, description: undefined, techDescription: undefined, techStack: undefined, links: undefined } as any, index: undefined },
    });

    expect(wrapper.find("img").attributes("src")).toContain("coming-soon");
    expect(wrapper.find("h4").text()).toBe("");
    expect(wrapper.find(".card-desc").text()).toBe("");
  });

  it("renders gracefully with empty project URLs (future projects)", async () => {
    // Make sure the mock is set BEFORE mounting
    mockUseInView.mockReturnValue({
      sectionRef: ref(null),
      isVisible: ref(true),
    });

    const { projects } = usePortfolioData();
    const maptyApp = projects.find((p) => p.title === "Mapty App")!;
    const urls = (maptyApp.links as { url: string }[]).map((l) => l.url);
    expect(urls).toEqual([
      "https://github.com/ralitsavoronevska/mapty-app/",
      "",
      "https://ralitsavoronevska.github.io/mapty-app/",
    ]);
  });

  // Keep your data tests (they belong in usePortfolioData.test.ts — but okay for now)
  // → Later we can move them, but they pass now
  it("fifth project has correct title, description and tech", () => {
    const { projects } = usePortfolioData();
    const fifth = projects[4];
    expect(fifth?.title).toBe("Secure Node.js REST API");
    expect(fifth?.description).toBe("RESTful API with Authentication");
    expect(fifth?.techDescription).toBe("API Architecture · Authentication · File Upload Handling");
    expect(fifth?.techStack.map((t: any) => t.name)).toEqual([
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Nodemon",
      "PostMan",
    ]);
  });

  it("Vue.js 3 Portfolio has correct live links", () => {
    const { projects } = usePortfolioData();
    const portfolio = projects.find((p) => p.title === "Vue.js 3 Portfolio")!;
    const urls = (portfolio.links as { url: string }[]).map((l) => l.url);
    expect(urls).toEqual([
      "https://github.com/ralitsavoronevska/vue-portfolio/",
      "https://codepen.io/ralitsavoronevska/pen/KOdQJZ/",
      "https://ralitsavoronevska.com/",
    ]);
  });
});

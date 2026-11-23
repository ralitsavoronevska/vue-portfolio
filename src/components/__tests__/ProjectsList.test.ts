import { describe, it, expect } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import ProjectsList from "@/components/ProjectsList.vue";
import type { Project } from "@/data/portfolio";
import SocialIcons from "@/components/SocialIcons.vue";
import { usePortfolioData } from "@/composables/usePortfolioData";

const carouselStub = {
  name: "ProjectCarousel",
  props: ["projects"],
  template: "<div />",
};

const mountOptions = {
  global: {
    stubs: {
      ProjectCarousel: carouselStub,
    },
  },
};

describe("ProjectsList", () => {
  it("renders the professional and personal project sections with the correct headings", () => {
    const { projectsTitle, projectsTitleHighlight, professionalTitle, personalTitle, personalTitleHighlight } =
      usePortfolioData();
    const wrapper = shallowMount(ProjectsList, mountOptions);

    expect(wrapper.find("h2").text()).toContain(projectsTitle);
    expect(wrapper.find("h2").text()).toContain(projectsTitleHighlight);
    expect(wrapper.text()).toContain(professionalTitle);
    expect(wrapper.text()).toContain(personalTitle);
    expect(wrapper.text()).toContain(personalTitleHighlight);
    expect(wrapper.findAll(".project-group")).toHaveLength(2);
  });

  it("passes the expected metadata into the project carousels for both categories", () => {
    const wrapper = shallowMount(ProjectsList, mountOptions);
    const carousels = wrapper.findAllComponents(carouselStub);

    const professionalProjects = carousels[0]!.props("projects") as Project[];
    const personalProjects = carousels[1]!.props("projects") as Project[];

    expect(professionalProjects[0]?.title).toBe("Zendesk Pulse");
    expect(personalProjects.at(-1)?.title).toBe("Call Analytics Dashboard");
  });

  it("groups professional and personal projects separately", () => {
    const wrapper = shallowMount(ProjectsList, mountOptions);
    const groups = wrapper.findAll(".project-group");

    expect(groups).toHaveLength(2);
    expect(groups[0]?.text()).toContain("Professional");
    expect(groups[1]?.text()).toContain("Personal");

    const carousels = wrapper.findAllComponents(carouselStub);
    expect(carousels[0]!.props("projects") as Project[]).toHaveLength(3);
    expect(carousels[1]!.props("projects") as Project[]).toHaveLength(3);
  });

  it("passes all 6 projects to the two carousels", () => {
    const wrapper = shallowMount(ProjectsList, mountOptions);
    const carousels = wrapper.findAllComponents(carouselStub);

    expect(carousels).toHaveLength(2);

    const professionalProjects = carousels[0]!.props("projects") as Project[];
    const personalProjects = carousels[1]!.props("projects") as Project[];

    expect(professionalProjects).toHaveLength(3);
    expect(personalProjects).toHaveLength(3);
    expect([...professionalProjects, ...personalProjects]).toHaveLength(6);
  });
});

describe("SocialIcons", () => {
  it("renders all social icons", () => {
    const wrapper = mount(SocialIcons, {
      props: {
        icons: [
          { name: "GitHub", url: "https://github.com", file_name: "github" },
          {
            name: "LinkedIn",
            url: "https://linkedin.com",
            file_name: "linkedin",
          },
          { name: "Live", url: "https://example.com", file_name: "live" },
        ],
      },
    });
    expect(wrapper.findAll("a")).toHaveLength(3);
  });

  it("uses the project-specific aria label for live and non-live icons", () => {
    const liveWrapper = mount(SocialIcons, {
      props: {
        icons: [
          { name: "Live", url: "https://example.com", file_name: "live" },
        ],
        aria: "Vue.js 3 Portfolio",
      },
    });

    expect(liveWrapper.find("a").attributes("aria-label")).toBe(
      "Visit my Vue.js 3 Portfolio Project's Live Preview",
    );
    expect(liveWrapper.find("img").attributes("alt")).toBe("",);

    const githubWrapper = mount(SocialIcons, {
      props: {
        icons: [
          { name: "GitHub", url: "https://github.com", file_name: "github" },
        ],
        aria: "Vue.js 3 Portfolio",
      },
    });

    expect(githubWrapper.find("a").attributes("aria-label")).toBe(
      "View my Vue.js 3 Portfolio Project in GitHub",
    );
    expect(githubWrapper.find("img").attributes("alt")).toBe("",);
  });

  it("renders inactive icons without links", () => {
    const wrapper = mount(SocialIcons, {
      props: {
        icons: [
          {
            name: "CodePen",
            url: "",
            file_name: "grayCodePen",
          },
        ],
      },
    });

    expect(wrapper.findAll("a")).toHaveLength(0);
    expect(wrapper.findAll("span.social-link")).toHaveLength(1);
  });

  it("renders an icon with a URL as an active link regardless of its asset name", () => {
    const wrapper = mount(SocialIcons, {
      props: {
        icons: [
          {
            name: "CodePen",
            url: "https://codepen.io",
            file_name: "grayCodePen",
          },
        ],
      },
    });

    expect(wrapper.findAll("a")).toHaveLength(1);
    expect(wrapper.findAll("span.social-link")).toHaveLength(0);
  });

  it("renders an icon without a URL as an inactive span", () => {
    const wrapper = mount(SocialIcons, {
      props: {
        icons: [
          {
            name: "GitHub",
            url: "",
            file_name: "github",
          },
        ],
      },
    });

    expect(wrapper.findAll("a")).toHaveLength(0);
    expect(wrapper.findAll("span.social-link")).toHaveLength(1);
  });
});

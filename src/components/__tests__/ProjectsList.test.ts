import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ProjectsList from "@/components/ProjectsList.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import SocialIcons from "@/components/SocialIcons.vue";

describe("ProjectsList", () => {
  it("renders all 11 projects", () => {
    const wrapper = mount(ProjectsList);
    expect(wrapper.findAllComponents(ProjectCard)).toHaveLength(11);
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
        aria: "Portfolio",
      },
    });

    expect(liveWrapper.find("a").attributes("aria-label")).toBe(
      "Visit my Portfolio Project's Live Preview",
    );
    expect(liveWrapper.find("img").attributes("alt")).toBe(
      "Visit my Portfolio Project's Live Preview",
    );

    const githubWrapper = mount(SocialIcons, {
      props: {
        icons: [
          { name: "GitHub", url: "https://github.com", file_name: "github" },
        ],
        aria: "Portfolio",
      },
    });

    expect(githubWrapper.find("a").attributes("aria-label")).toBe(
      "View my Portfolio Project in GitHub",
    );
    expect(githubWrapper.find("img").attributes("alt")).toBe(
      "View my Portfolio Project in GitHub",
    );
  });
});

import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ProjectsList from "@/components/ProjectsList.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import SocialIcons from "@/components/SocialIcons.vue";

describe("ProjectsList", () => {
  it("renders all 6 projects", () => {
    const wrapper = mount(ProjectsList);
    expect(wrapper.findAllComponents(ProjectCard)).toHaveLength(6);
  });

  it("renders the professional and personal project sections with the correct headings", () => {
    const wrapper = mount(ProjectsList);

    expect(wrapper.text()).toContain("Selected Work");
    expect(wrapper.text()).toContain("Professional");
    expect(wrapper.text()).toContain("Personal");
    expect(wrapper.findAll(".project-group")).toHaveLength(2);
  });

  it("passes the expected metadata into the project cards for both categories", () => {
    const wrapper = mount(ProjectsList);
    const cards = wrapper.findAllComponents(ProjectCard);

    // project prop now contains the project object
    expect(((cards[0]!.props() as any).project as any).title).toBe("Zendesk Pulse");
    expect((cards[0]!.props() as any).index).toBe(0);
    expect(((cards.at(-1)!.props() as any).project as any).title).toBe("Mapty App");
    expect((cards.at(-1)!.props() as any).index).toBe(2);
  });

  it("groups professional and personal projects separately", () => {
    const wrapper = mount(ProjectsList);
    const groups = wrapper.findAll(".project-group");

    expect(groups).toHaveLength(2);
    expect(groups[0]?.text()).toContain("Professional");
    expect(groups[1]?.text()).toContain("Personal");

    const professionalCards = groups[0]?.findAllComponents(ProjectCard);
    const personalCards = groups[1]?.findAllComponents(ProjectCard);

    expect(professionalCards).toHaveLength(3);
    expect(personalCards).toHaveLength(3);
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

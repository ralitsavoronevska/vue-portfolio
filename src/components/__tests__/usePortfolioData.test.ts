import { describe, it, expect } from "vitest";
import { usePortfolioData } from "@/composables/usePortfolioData";

describe("usePortfolioData", () => {
  it("heroSocialIcons has exactly 3 items with correct names and URLs", () => {
    const { heroSocialIcons } = usePortfolioData();

    expect(heroSocialIcons).toHaveLength(3);

    expect(heroSocialIcons).toEqual([
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/ralitsavoronevska",
        file_name: expect.any(String),
      },
      {
        name: "GitHub",
        url: "https://github.com/ralitsavoronevska",
        file_name: expect.any(String),
      },
      {
        name: "CodePen",
        url: "https://codepen.io/ralitsavoronevska",
        file_name: expect.any(String),
      },
    ]);
  });

  it("all social links have valid URLs", () => {
    const { heroSocialIcons } = usePortfolioData();
    const allUrls = [...heroSocialIcons].map((icon) => icon.url);

    allUrls.forEach((url) => {
      expect(url).toMatch(/^https?:\/\/|^mailto:/);
    });
  });

  it("returns exactly 15 tech items", () => {
    const { techStack } = usePortfolioData();
    expect(techStack).toHaveLength(15);
  });

  it("includes key technologies", () => {
    const { techStack } = usePortfolioData();
    const names = techStack.map((t) => t.name);
    expect(names).toContain("Tailwind CSS");
    expect(names).toContain("JavaScript");
    expect(names).toContain("Vue.js");
    expect(names).toContain("Nuxt.js");
    expect(names).toContain("TypeScript");
    expect(names).toContain("Pinia");
    expect(names).toContain("Vite.js");
    expect(names).toContain("Vitest");
    expect(names).toContain("PostMan");
    expect(names).toContain("FireBase");
    expect(names).toContain("MongoDB");
    expect(names).toContain("Mongoose");
    expect(names).toContain("Express.js");
    expect(names).toContain("Node.js");
    expect(names).toContain("Nodemon");
  });

  it("returns 6 projects", () => {
    const { projects } = usePortfolioData();
    expect(projects).toHaveLength(6);
  });

  it("fifth project has correct title and tech stack", () => {
    const { projects } = usePortfolioData();
    const fifth = projects[4];

    expect(fifth?.title).toBe("Mapty App");
    expect(fifth?.description).toBe("Map your Workout Activities");
    expect(fifth?.techDescription).toBe("Interactive Maps · Geolocation · Running and Cycling Tracking");

    const techNames = (fifth?.techStack as { name: string }[]).map(
      (t) => t.name,
    );
    expect(techNames).toEqual([
      "Vue.js",
      "Vite.js",
      "Vitest",
      "TypeScript",
      "Pinia",
      "Tailwind CSS",
    ]);
  });

  it("allows future projects to have empty URLs", () => {
    const { projects } = usePortfolioData();

    const hasEmptyUrl = projects.some((p) =>
      (p.links as { url: string }[]).some((link) => link.url === ""),
    );

    expect(hasEmptyUrl).toBe(true);
  });
});

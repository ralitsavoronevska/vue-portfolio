
import { describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { ref } from "vue";
import TechCertificates from "@/components/TechCertificates.vue";
import { usePortfolioData } from "@/composables/usePortfolioData";

vi.mock("@/composables/useReveal", () => ({
  useReveal: () => ({
    isVisible: ref(true),
    revealClasses: ref({
      "opacity-100 translate-y-0": true,
    }),
    revealStyle: (delay: number) => ({
      transitionDelay: `${delay}ms`,
    }),
  }),
}));

const mountComponent = () => mount(TechCertificates);

describe("TechCertificates", () => {
  const {
    certifications,
    certificationsTitle,
    certificationsTitleHighlight,
    certificationsSubtitle,
  } = usePortfolioData();

  const completed = certifications.filter(
    (item) => item.status === "completed",
  );

  const inProgress = certifications.filter(
    (item) => item.status === "in-progress",
  );

  const planned = certifications.filter(
    (item) => item.status === "planned",
  );

  it("renders the section heading and subtitle", () => {
    const wrapper = mountComponent();

    const section = wrapper.find("#certifications");

    expect(section.exists()).toBe(true);
    expect(section.attributes("aria-labelledby")).toBe(
      "certifications-heading",
    );

    expect(wrapper.find("#certifications-heading").text()).toContain(
      certificationsTitle,
    );
    expect(wrapper.find("#certifications-heading").text()).toContain(
      certificationsTitleHighlight,
    );
    expect(wrapper.find(".certifications-subtitle").text()).toBe(
      certificationsSubtitle,
    );
  });

  it("renders all three certification categories", () => {
    const wrapper = mountComponent();
    const categories = wrapper.findAll(".certifications-category");

    expect(categories).toHaveLength(3);
    expect(categories.map((category) =>
      category.find("h3").text(),
    )).toEqual([
      "Certifications & Completed Training",
      "Currently Pursuing",
      "Learning Roadmap",
    ]);
  });

  it("renders all six completed certificates", () => {
    const wrapper = mountComponent();
    const category = wrapper.findAll(".certifications-category")[0]!;

    const cards = category.findAll(".certificate-card");

    expect(completed).toHaveLength(6);
    expect(cards).toHaveLength(completed.length);

    completed.forEach((certificate, index) => {
      expect(cards[index]!.text()).toContain(certificate.title);
      expect(cards[index]!.text()).toContain(certificate.issuer);

      if (certificate.year) {
        expect(cards[index]!.text()).toContain(
          String(certificate.year),
        );
      }
    });
  });

  it("opens completed certificate images in a new tab", () => {
    const wrapper = mountComponent();
    const links = wrapper.findAll(".certificate-image-link");

    expect(links).toHaveLength(6);

    links.forEach((link, index) => {
      const certificate = completed[index]!;

      expect(link.attributes("href")).toBe(certificate.image);
      expect(link.attributes("target")).toBe("_blank");
      expect(link.attributes("rel")).toContain("noopener");
      expect(link.attributes("rel")).toContain("noreferrer");
      expect(link.attributes("aria-label")).toContain(
        certificate.title,
      );
      expect(link.attributes("aria-label")).toContain(
        "opens in a new tab",
      );

      const image = link.find("img");
      expect(image.exists()).toBe(true);
      expect(image.attributes("src")).toBe(certificate.image);
      expect(image.attributes("loading")).toBe("lazy");
    });
  });

  it("renders all three in-progress activities", () => {
    const wrapper = mountComponent();

    const cards = wrapper.findAll(
      ".certificate-card--progress",
    );

    expect(inProgress).toHaveLength(3);
    expect(cards).toHaveLength(inProgress.length);

    inProgress.forEach((certificate, index) => {
      const card = cards[index]!;

      expect(card.text()).toContain(certificate.title);
      expect(card.text()).toContain(certificate.issuer);
      expect(card.find(".certificate-status").text()).toBe(
        "In Progress",
      );

      if (certificate.description) {
        expect(card.find(".certificate-description").text()).toBe(
          certificate.description,
        );
      }
    });
  });

  it("does not render links for in-progress activities", () => {
    const wrapper = mountComponent();

    wrapper.findAll(".certificate-card--progress").forEach(
      (card) => {
        expect(card.find("a").exists()).toBe(false);

        const image = card.find(".certificate-progress-image");
        expect(image.exists()).toBe(true);
        expect(image.attributes("alt")).toBe("");
      },
    );
  });

  it("renders planned certifications as a semantic list", () => {
    const wrapper = mountComponent();

    const roadmap = wrapper.find(".certifications-roadmap");
    const items = roadmap.findAll("li");

    expect(roadmap.element.tagName).toBe("UL");
    expect(planned).toHaveLength(4);
    expect(items).toHaveLength(planned.length);

    planned.forEach((certificate, index) => {
      expect(items[index]!.text()).toContain(certificate.title);
      expect(items[index]!.text()).toContain(certificate.issuer);
      expect(items[index]!.find("a").exists()).toBe(false);
    });
  });

  it("applies reveal animation delays to each section", () => {
    const wrapper = mountComponent();

    const header = wrapper.find("header");
    const categories = wrapper.findAll(".certifications-category");

    expect(header.attributes("style")).toContain(
      "transition-delay: 100ms",
    );

    categories.forEach((category, index) => {
      expect(category.attributes("style")).toContain(
        `transition-delay: ${(index + 2) * 100}ms`,
      );
    });
  });
});

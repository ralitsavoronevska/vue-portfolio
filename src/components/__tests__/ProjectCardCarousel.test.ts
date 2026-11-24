import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";

import ProjectCardCarousel from "@/components/ProjectCardCarousel.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import type { Project } from "@/data/portfolio";

const carouselStub = {
  name: "Carousel",
  props: [
    "itemsToShow",
    "itemsToScroll",
    "gap",
    "snapAlign",
    "wrapAround",
    "touchDrag",
    "mouseDrag",
    "preventExcessiveDragging",
    "breakpoints",
  ],
  template: `
    <div class="carousel-stub">
      <div class="carousel-slides-stub">
        <slot />
      </div>

      <div class="carousel-addons-stub">
        <slot name="addons" />
      </div>
    </div>
  `,
};

const slideStub = {
  name: "Slide",
  template: `
    <div class="slide-stub">
      <slot />
    </div>
  `,
};

const createWrapper = (projects: Project[]) =>
  mount(ProjectCardCarousel, {
    props: { projects },
    global: {
      stubs: {
        Carousel: carouselStub,
        Slide: slideStub,
        ProjectCard: true,
        Navigation: true,
        Pagination: true,
      },
    },
  });

describe("ProjectCardCarousel", () => {
  const createProjects = (): Project[] => [
    { title: "Project 1" } as Project,
    { title: "Project 2" } as Project,
    { title: "Project 3" } as Project,
  ];

  it("renders the carousel component", () => {
    const wrapper = createWrapper(createProjects());

    expect(wrapper.findComponent(Carousel).exists()).toBe(true);
    expect(wrapper.find(".project-carousel").exists()).toBe(true);
  });

  it("renders one slide for each project", () => {
    const projects = createProjects();
    const wrapper = createWrapper(projects);

    expect(wrapper.findAllComponents(Slide)).toHaveLength(
      projects.length,
    );
  });

  it("passes the correct project and index to each ProjectCard", () => {
    const projects = createProjects();
    const wrapper = createWrapper(projects);

    const cards = wrapper.findAllComponents(ProjectCard);

    expect(cards).toHaveLength(projects.length);

    cards.forEach((card, index) => {
      expect(card.props("project")).toEqual(projects[index]);
      expect(card.props("index")).toBe(index);
    });
  });

  it("renders no slides when the projects array is empty", () => {
    const wrapper = createWrapper([]);

    expect(wrapper.findAllComponents(Slide)).toHaveLength(0);
    expect(wrapper.findAllComponents(ProjectCard)).toHaveLength(0);
  });

  it("updates the slides when the projects prop changes", async () => {
    const projects = createProjects();
    const wrapper = createWrapper(projects);

    expect(wrapper.findAllComponents(Slide)).toHaveLength(3);

    await wrapper.setProps({
      projects: projects.slice(0, 1),
    });

    expect(wrapper.findAllComponents(Slide)).toHaveLength(1);
    expect(wrapper.findAllComponents(ProjectCard)).toHaveLength(1);
  });

  it("applies the correct default carousel configuration", () => {
    const wrapper = createWrapper(createProjects());
    const carousel = wrapper.findComponent(Carousel);

    expect(carousel.props()).toMatchObject({
      itemsToShow: 1,
      itemsToScroll: 1,
      gap: 0,
      snapAlign: "center",
      wrapAround: false,
    });
  });

  it("enables mouse and touch dragging", () => {
    const wrapper = createWrapper(createProjects());
    const carousel = wrapper.findComponent(Carousel);

    expect(carousel.props()).toMatchObject({
      touchDrag: true,
      mouseDrag: true,
      preventExcessiveDragging: true,
    });
  });

  it("configures the correct responsive breakpoints", () => {
    const wrapper = createWrapper(createProjects());
    const carousel = wrapper.findComponent(Carousel);

    expect(carousel.props("breakpoints")).toEqual({
      768: {
        itemsToShow: 2,
        gap: 24,
        snapAlign: "start",
      },
      1280: {
        itemsToShow: 3,
        gap: 24,
        snapAlign: "start",
      },
    });
  });

  it("renders navigation and pagination controls", () => {
    const wrapper = createWrapper(createProjects());

    expect(
      wrapper.find(".project-carousel__controls").exists(),
    ).toBe(true);

    expect(wrapper.findComponent(Navigation).exists()).toBe(true);
    expect(wrapper.findComponent(Pagination).exists()).toBe(true);
  });

  it("configures pagination by the number of visible items", () => {
    const wrapper = createWrapper(createProjects());
    const pagination = wrapper.findComponent(Pagination);

    expect(pagination.props("paginateByItemsToShow")).toBe(true);
  });

  it("renders a card wrapper for each project", () => {
    const projects = createProjects();
    const wrapper = createWrapper(projects);

    expect(
      wrapper.findAll(".project-carousel__card-wrapper"),
    ).toHaveLength(projects.length);
  });
});
import { describe, it, expect, vi, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import { ref } from "vue";
import { useInView } from "@/composables/useInView";

type EntryLike = {
  isIntersecting?: boolean;
  target?: unknown;
};

function installMockObserver() {
  const observe = vi.fn();
  const unobserve = vi.fn();
  const disconnect = vi.fn();
  let callback: ((entries: EntryLike[]) => void) | undefined;

  class MockIntersectionObserver {
    constructor(cb: (entries: EntryLike[]) => void) {
      callback = cb;
    }

    observe = observe;
    unobserve = unobserve;
    disconnect = disconnect;
  }

  type MockIntersectionObserverCtor = new (
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit,
  ) => IntersectionObserver;

  (globalThis as typeof globalThis & {
    IntersectionObserver?: MockIntersectionObserverCtor;
  }).IntersectionObserver = MockIntersectionObserver as unknown as MockIntersectionObserverCtor;

  return {
    observe,
    unobserve,
    disconnect,
    trigger: (entries: EntryLike[]) => callback?.(entries),
  };
}

afterEach(() => {
  vi.restoreAllMocks();
  Reflect.deleteProperty(
    globalThis as typeof globalThis & {
      IntersectionObserver?: unknown;
    },
    "IntersectionObserver",
  );
});

describe("useInView", () => {
  it("returns default values when no target is provided", () => {
    const wrapper = mount({
      template: "<div />",
      setup() {
        const { sectionRef, isVisible } = useInView();
        return { sectionRef, isVisible };
      },
    });

    expect(wrapper.vm.sectionRef).toBeNull();
    expect(wrapper.vm.isVisible).toBe(false);
  });

  it("does nothing when IntersectionObserver is unavailable", () => {
    const wrapper = mount({
      template: "<div />",
      setup() {
        const el = document.createElement("section");
        const sectionRef = ref(el);
        const { isVisible } = useInView(sectionRef);
        return { isVisible };
      },
    });

    expect(wrapper.vm.isVisible).toBe(false);
  });

  it("sets visible to true when the target intersects", () => {
    const { trigger } = installMockObserver();
    const el = document.createElement("section");
    const sectionRef = ref(el);

    const wrapper = mount({
      template: "<div />",
      setup() {
        const { isVisible } = useInView(sectionRef);
        return { isVisible };
      },
    });

    trigger([{ isIntersecting: true, target: el }]);

    expect(wrapper.vm.isVisible).toBe(true);
  });

  it("keeps visible false when the target does not intersect", () => {
    const { trigger } = installMockObserver();
    const el = document.createElement("section");
    const sectionRef = ref(el);

    const wrapper = mount({
      template: "<div />",
      setup() {
        const { isVisible } = useInView(sectionRef);
        return { isVisible };
      },
    });

    trigger([{ isIntersecting: false, target: el }]);

    expect(wrapper.vm.isVisible).toBe(false);
  });

  it("disconnects the observer on unmount and unobserves the target after intersection", () => {
    const { trigger, unobserve, disconnect } = installMockObserver();
    const el = document.createElement("section");
    const sectionRef = ref(el);

    const wrapper = mount({
      template: "<div />",
      setup() {
        const { isVisible } = useInView(sectionRef);
        return { isVisible };
      },
    });

    trigger([{ isIntersecting: true, target: el }]);

    expect(unobserve).toHaveBeenCalledWith(el);
    expect(wrapper.vm.isVisible).toBe(true);

    wrapper.unmount();
    expect(disconnect).toHaveBeenCalledTimes(1);
  });
});

import { describe, it, expect, vi, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import { ref } from "vue";
import { useInView } from "@/composables/useInView";

type EntryLike = {
  isIntersecting?: boolean;
  target?: unknown;
};

afterEach(() => {
  vi.restoreAllMocks();
  vi.useRealTimers();

  Reflect.deleteProperty(
    globalThis as typeof globalThis & {
      IntersectionObserver?: unknown;
    },
    "IntersectionObserver",
  );
});

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

  it("sets visible to true after 100ms when IntersectionObserver is unavailable", () => {
    vi.useFakeTimers();
    Reflect.deleteProperty(globalThis, "IntersectionObserver");

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

    vi.advanceTimersByTime(99);

    expect(wrapper.vm.isVisible).toBe(false);

    vi.advanceTimersByTime(1);

    expect(wrapper.vm.isVisible).toBe(true);

    wrapper.unmount();
  });
  
  it("clears the fallback timer when the component is unmounted", () => {
    vi.useFakeTimers();
    Reflect.deleteProperty(globalThis, "IntersectionObserver");

    const state = {
      visibility: ref(false),
    };

    const wrapper = mount({
      template: "<div />",
      setup() {
        const el = document.createElement("section");
        const sectionRef = ref(el);
        const { isVisible } = useInView(sectionRef);

        state.visibility = isVisible;

        return { isVisible };
      },
    });

    expect(state.visibility.value).toBe(false);

    vi.advanceTimersByTime(50);

    wrapper.unmount();

    vi.advanceTimersByTime(100);

    expect(state.visibility.value).toBe(false);
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

  it("updates visibility when the target enters and leaves the viewport with once disabled", () => {
    const { trigger, unobserve } = installMockObserver();
    const el = document.createElement("section");
    const sectionRef = ref(el);

    const wrapper = mount({
      template: "<div />",
      setup() {
        const { isVisible } = useInView(sectionRef, 0.1, {
          once: false,
        });

        return { isVisible };
      },
    });

    expect(wrapper.vm.isVisible).toBe(false);

    trigger([{ isIntersecting: true, target: el }]);

    expect(wrapper.vm.isVisible).toBe(true);

    trigger([{ isIntersecting: false, target: el }]);

    expect(wrapper.vm.isVisible).toBe(false);

    trigger([{ isIntersecting: true, target: el }]);

    expect(wrapper.vm.isVisible).toBe(true);

    expect(unobserve).not.toHaveBeenCalled();

    wrapper.unmount();
  });
});

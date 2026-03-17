import { ref, onMounted, onUnmounted, type Ref } from "vue";

// minimal local shapes for IntersectionObserver-like behavior (avoid lib.dom dependency)
type IOEntry = { isIntersecting?: boolean; target?: unknown };
type IntersectionObserverLike = {
  observe: (target: unknown) => void;
  unobserve?: (target: unknown) => void;
  disconnect?: () => void;
};

export function useInView<T extends Element = Element>(
  targetRef?: Ref<T | null>,
  threshold = 0.1,
) {
  const sectionRef = targetRef ?? ref<T | null>(null);
  const isVisible = ref(false);

  let observer: IntersectionObserverLike | null = null;

  onMounted(() => {
    if (!sectionRef.value) return;

    const IO = (
      globalThis as unknown as {
        IntersectionObserver?: new (
          cb: (entries: IOEntry[]) => void,
          opts?: { threshold?: number },
        ) => IntersectionObserverLike;
      }
    ).IntersectionObserver;
    if (IO) {
      observer = new IO(
        (entries: IOEntry[]) => {
          const entry = entries[0];
          if (entry?.isIntersecting) {
            isVisible.value = true;
            observer?.unobserve?.(entry.target);
          }
        },
        { threshold },
      );

      observer?.observe(sectionRef.value);
    }
  });

  onUnmounted(() => {
    observer?.disconnect?.();
  });

  return { sectionRef, isVisible };
}

import { computed, type Ref } from "vue";
import { useInView } from "@/composables/useInView";

export function useReveal(sectionRef: Readonly<Ref<HTMLElement | null>>){
  const { isVisible } = useInView(sectionRef);

  const revealClasses = computed(() => ({
    "transition-all duration-700 ease-out": true,
    "motion-reduce:opacity-100 motion-reduce:translate-y-0": true,
    "opacity-100 translate-y-0": isVisible.value,
    "opacity-0 translate-y-8": !isVisible.value,
  }));

  const revealStyle = (delay: number) => ({
    transitionDelay: `${ delay }ms`,
  });
  
  return {
    isVisible,
    revealClasses,
    revealStyle,
  }
}
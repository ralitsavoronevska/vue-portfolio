import { ref, onMounted, onUnmounted } from 'vue'

export function useInView(threshold = 0.1) {
  const sectionRef = ref<HTMLElement | null>(null)
  const isVisible = ref(false)

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!sectionRef.value) return

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          isVisible.value = true
          observer?.unobserve(entry.target)
        }
      },
      { threshold }
    )

    observer.observe(sectionRef.value)
  })

  onUnmounted(() => {
    if (observer && sectionRef.value) {
      observer.unobserve(sectionRef.value)
    }
  })

  return { sectionRef, isVisible }
}
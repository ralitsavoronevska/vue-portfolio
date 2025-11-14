import { onMounted, onUnmounted, type Ref, ref, readonly } from 'vue'

interface Options {
  texts: readonly string[]
  typeSpeed?: number
  eraseSpeed?: number
  pause?: number
}

export function useTypewriter(
  elRef: Ref<HTMLElement | null>,
  { texts, typeSpeed = 150, eraseSpeed = 100, pause = 2000 }: Options
) {
  let index = 0
  let char = 0
  let isErasing = false
  let timeoutId: number | null = null

  // Add reactive state for cursor
  const isPaused = ref(false)

  const clear = () => {
    if (timeoutId !== null) {
      window.clearTimeout(timeoutId)
      timeoutId = null
    }
  }

  const type = () => {
    const el = elRef.value
    if (!el) return

    const current = texts[index]
    if (!current) return

    // === TYPING PHASE ===
    if (!isErasing && char < current.length) {
      char++
      el.textContent = current.slice(0, char)
      timeoutId = window.setTimeout(type, typeSpeed)
      isPaused.value = false

    // === FINISHED TYPING → PAUSE ===
    } else if (!isErasing && char === current.length) {
      isPaused.value = true
      timeoutId = window.setTimeout(() => {
        isErasing = true
        isPaused.value = false
        type()
      }, pause)

    // === ERASING PHASE ===
    } else if (isErasing && char > 0) {
      char--
      el.textContent = current.slice(0, char)
      timeoutId = window.setTimeout(type, eraseSpeed)
      isPaused.value = false

    // === FINISHED ERASING → NEXT WORD ===
    } else if (isErasing && char === 0) {
      isErasing = false
      index = (index + 1) % texts.length
      timeoutId = window.setTimeout(type, pause)
      isPaused.value = false
    }
  }

  onMounted(() => {
    const el = elRef.value
    if (el) {
      el.textContent = ''
      type()
    }
  })

  onUnmounted(clear)

  return { isPaused: readonly(isPaused) } // expose only if needed
}
import type { Directive } from 'vue'
import type { RevealOptions } from '@/types/directive'

const vReveal: Directive<HTMLElement, RevealOptions | undefined> = {
  mounted(el, binding) {
    const opts = binding.value ?? {}
    const { delay = 0, direction = 'up', once = true, threshold = 0.1 } = opts

    // Respect user's motion preference — skip all setup, element stays visible
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    el.classList.add('reveal', `reveal--${direction}`)
    if (delay > 0) {
      el.style.setProperty('--reveal-delay', `${delay}ms`)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('reveal--visible')
            if (once) observer.unobserve(el)
          } else if (!once) {
            el.classList.remove('reveal--visible')
          }
        })
      },
      { threshold }
    )

    observer.observe(el)
    ;(el as any).__revealObserver__ = observer
  },

  unmounted(el) {
    const obs = (el as any).__revealObserver__ as IntersectionObserver | undefined
    obs?.disconnect()
  }
}

export default vReveal

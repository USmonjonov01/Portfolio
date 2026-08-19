import { useEffect, useRef } from 'react'

/**
 * Berilgan elementga "reveal" klassi qo'shib, scroll paytida
 * ko'rinadigan bo'lganda yumshoq animatsiya bilan chiqishini ta'minlaydi.
 * Har bir chaqiruv bitta ref qaytaradi - shu ref DOM elementga bog'lanadi.
 */
export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible')
          observer.unobserve(node)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options])

  return ref
}

/**
 * Bir nechta elementlarni ketma-ket (staggered) reveal qilish uchun.
 * containerRef ichidagi [data-reveal-item] elementlariga navbat bilan
 * kichik kechikish bilan "is-visible" qo'shadi.
 */
export function useStaggerReveal(itemSelector = '[data-reveal-item]', staggerMs = 90) {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return
    const items = Array.from(container.querySelectorAll(itemSelector))

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((item, i) => {
            setTimeout(() => item.classList.add('is-visible'), i * staggerMs)
          })
          observer.unobserve(container)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [itemSelector, staggerMs])

  return ref
}

import { useEffect, useRef } from 'react'
import './CustomCursor.css'

const INTERACTIVE_SELECTOR = 'a, button, input, textarea, [data-cursor="hover"]'
const RING_SELECTOR = '[data-cursor="ring"], .btn'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (isTouch || prefersReducedMotion) return

    document.body.classList.add('cursor-active')

    const dot = dotRef.current
    const ring = ringRef.current

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx
    let ry = my

    function onMove(e) {
      mx = e.clientX
      my = e.clientY
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`

      const target = e.target
      if (target.closest && target.closest(RING_SELECTOR)) {
        ring.classList.add('is-ring')
      } else {
        ring.classList.remove('is-ring')
      }

      if (target.closest && target.closest(INTERACTIVE_SELECTOR)) {
        ring.classList.add('is-hover')
        dot.classList.add('is-hover')
      } else {
        ring.classList.remove('is-hover')
        dot.classList.remove('is-hover')
      }
    }

    function onDown() {
      ring.classList.add('is-down')
    }
    function onUp() {
      ring.classList.remove('is-down')
    }

    function raf() {
      rx += (mx - rx) * 0.16
      ry += (my - ry) * 0.16
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`
      requestAnimationFrame(raf)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    const rafId = requestAnimationFrame(raf)

    return () => {
      document.body.classList.remove('cursor-active')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}

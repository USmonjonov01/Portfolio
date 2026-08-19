import { useEffect, useRef } from 'react'
import './BlueprintField.css'

/**
 * Butun sahifa ortidagi juda bosiq fon: chizma stoli uslubidagi
 * nuqta-tugunlar. Sichqoncha harakatiga deyarli sezilmaydigan
 * parallax bilan javob beradi - maqsad diqqatni chalg'itmaslik,
 * faqat "muhandislik" ruhini berish.
 */
export default function BlueprintField() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width, height
    let animationId
    let nodes = []

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    function resize() {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      const cell = 96
      nodes = []
      for (let x = cell; x < width; x += cell) {
        for (let y = cell; y < height; y += cell) {
          if (Math.random() > 0.86) {
            nodes.push({
              x,
              y,
              offset: Math.random() * Math.PI * 2,
              speed: Math.random() * 0.0006 + 0.0003,
            })
          }
        }
      }
    }

    function handleMouseMove(e) {
      mouseRef.current.x = (e.clientX / width - 0.5) * 2
      mouseRef.current.y = (e.clientY / height - 0.5) * 2
    }

    function draw(time) {
      ctx.clearRect(0, 0, width, height)
      const px = mouseRef.current.x * 5
      const py = mouseRef.current.y * 5

      nodes.forEach((n) => {
        const pulse = prefersReducedMotion
          ? 0.5
          : 0.35 + Math.sin(time * n.speed + n.offset) * 0.25
        ctx.beginPath()
        ctx.fillStyle = `rgba(255, 106, 61, ${pulse * 0.35})`
        ctx.arc(n.x + px, n.y + py, 1.6, 0, Math.PI * 2)
        ctx.fill()
      })

      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(draw)
      }
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)
    animationId = requestAnimationFrame(draw)
    if (prefersReducedMotion) draw(0)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="blueprint-field" aria-hidden="true" />
}

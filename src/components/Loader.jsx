import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/profile'
import './Loader.css'

const STEPS = [
  'Tizim ishga tushirilmoqda...',
  'Komponentlar yuklanmoqda...',
  'Loyihalar tekshirilmoqda...',
  'Interfeys tayyorlanmoqda...',
]

export default function Loader({ onDone }) {
  const [stepIndex, setStepIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const doneRef = useRef(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      setStepIndex(STEPS.length)
      setProgress(100)
      finish(300)
      return
    }

    let raf
    const totalDuration = 2600
    const start = performance.now()

    function tick(now) {
      const elapsed = now - start
      const pct = Math.min(100, (elapsed / totalDuration) * 100)
      setProgress(pct)

      const stepDur = totalDuration / STEPS.length
      const idx = Math.min(STEPS.length, Math.floor(elapsed / stepDur))
      setStepIndex(idx)

      if (elapsed < totalDuration) {
        raf = requestAnimationFrame(tick)
      } else {
        finish(650)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function finish(delay) {
    setTimeout(() => {
      setLeaving(true)
      setTimeout(() => {
        if (!doneRef.current) {
          doneRef.current = true
          onDone?.()
        }
      }, 700)
    }, delay)
  }

  return (
    <div className={`loader ${leaving ? 'loader--leaving' : ''}`} role="status" aria-live="polite">
      <div className="loader__stars" aria-hidden="true">
        {Array.from({ length: 60 }).map((_, i) => (
          <span
            key={i}
            style={{
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`,
              '--d': `${Math.random() * 3 + 1.5}s`,
              '--s': `${Math.random() * 1.6 + 0.6}px`,
            }}
          />
        ))}
      </div>

      <div className="loader__core">
        <div className="loader__ring">
          <div className="loader__ring-inner" />
          <span className="loader__ring-glow" />
        </div>

        <div className="loader__log mono" aria-hidden="true">
          {STEPS.map((step, i) => (
            <p
              key={step}
              className={
                i < stepIndex ? 'is-done' : i === stepIndex ? 'is-active' : 'is-pending'
              }
            >
              <span className="loader__bullet">{i < stepIndex ? '✓' : '›'}</span> {step}
            </p>
          ))}
          <p className={stepIndex >= STEPS.length ? 'is-welcome' : 'is-pending'}>
            <span className="loader__bullet">{stepIndex >= STEPS.length ? '✓' : '›'}</span>{' '}
            Welcome, {profile.firstName}.
          </p>
        </div>

        <div className="loader__bar">
          <div className="loader__bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="loader__percent mono">{Math.floor(progress)}%</span>
      </div>
    </div>
  )
}

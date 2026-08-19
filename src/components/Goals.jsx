import { goals } from '../data/skills'
import { useStaggerReveal } from '../hooks/useReveal'
import './Goals.css'

export default function Goals() {
  const containerRef = useStaggerReveal()

  return (
    <section id="goals" className="goals">
      <div className="container">
        <p className="eyebrow">Yo'l xaritasi — keyingi qadamlar</p>
        <h2 className="section-title">Qayerga borishni xohlayman</h2>
        <p className="section-sub">
          Vaqt bo'yicha tartiblangan maqsadlarim - chunki har bir katta
          tizim ham kichik, aniq qadamlardan boshlanadi.
        </p>

        <div ref={containerRef} className="goals__timeline">
          {goals.map((goal) => (
            <div key={goal.year} data-reveal-item className="goals__item reveal">
              <div className="goals__marker" />
              <div className="goals__content">
                <span className="mono goals__year">{goal.year}</span>
                <p>{goal.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

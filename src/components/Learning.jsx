import { learning } from '../data/skills'
import { useStaggerReveal } from '../hooks/useReveal'
import './Learning.css'

export default function Learning() {
  const containerRef = useStaggerReveal()

  return (
    <section id="learning" className="learning">
      <div className="container">
        <p className="eyebrow">Yo'l xaritasi — hozir</p>
        <h2 className="section-title">Faol ustida ishlayotgan yo'nalishlarim</h2>
        <p className="section-sub">
          Rivojlanish - to'xtovsiz jarayon. Quyidagilar hozirgi kunda
          izchil o'rganayotgan yo'nalishlarim.
        </p>

        <div ref={containerRef} className="learning__grid">
          {learning.map((item, i) => (
            <div key={item.title} data-reveal-item className="learning-card reveal">
              <span className="learning-card__index mono">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'
import { skills } from '../data/skills'
import './Skills.css'

const SEGMENTS = 10

function maturityLabel(level) {
  if (level >= 80) return 'Ishonchli qo\u2018llayman'
  if (level >= 65) return 'Amaliyotda sinaganman'
  return "Faol o'rganmoqdaman"
}

function SkillBar({ name, level }) {
  const [filled, setFilled] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFilled(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const activeSegments = Math.round((level / 100) * SEGMENTS)

  return (
    <div ref={ref} className="skill-bar">
      <div className="skill-bar__head">
        <span className="mono skill-bar__name">{name}</span>
        <span className="mono skill-bar__percent">{filled ? maturityLabel(level) : ''}</span>
      </div>
      <div className="skill-bar__track" aria-hidden="true">
        {Array.from({ length: SEGMENTS }).map((_, i) => (
          <span
            key={i}
            className={`skill-bar__seg ${filled && i < activeSegments ? 'is-on' : ''}`}
            style={{ transitionDelay: `${i * 45}ms` }}
          />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const groups = skills.reduce((acc, skill) => {
    acc[skill.group] = acc[skill.group] || []
    acc[skill.group].push(skill)
    return acc
  }, {})

  return (
    <section id="skills" className="skills">
      <div className="container">
        <p className="eyebrow">Ko'nikmalar</p>
        <h2 className="section-title">Texnik stack va amaliy daraja</h2>
        <p className="section-sub">
          Har bir texnologiya uchun raqamlar emas, real amaliy holatni
          ko'rsataman - qayerda ishonchli ishlayman va qayerda hali faol
          o'rganish bosqichidaman.
        </p>

        <div className="dashboard">
          <div className="dashboard__header">
            <div className="dashboard__dots">
              <span /><span /><span />
            </div>
            <span className="mono dashboard__title">skills.dashboard --status=live</span>
            <span className="mono dashboard__blink">●</span>
          </div>

          <div className="skills__grid">
            {Object.entries(groups).map(([group, items]) => (
              <div key={group} className="skills__group">
                <h3 className="skills__group-title mono">// {group}</h3>
                {items.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

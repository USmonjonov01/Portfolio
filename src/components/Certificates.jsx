import { certificates } from '../data/profile'
import { useStaggerReveal } from '../hooks/useReveal'
import './Certificates.css'

export default function Certificates() {
  const containerRef = useStaggerReveal()

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <p className="eyebrow">Sertifikatlar</p>
        <h2 className="section-title">Tasdiqlangan bilimlarim</h2>

        {certificates.length === 0 ? (
          <div className="certificates__empty reveal is-visible">
            <p>
              Hozircha sertifikatlar qo'shilmagan. Kurs yoki dasturni
              tugatganingizdan so'ng, <code className="mono">src/data/profile.js</code>{' '}
              fayliga qo'shishingiz mumkin.
            </p>
          </div>
        ) : (
          <div ref={containerRef} className="certificates__grid">
            {certificates.map((cert) => (
              <a
                key={cert.title}
                href={cert.link || '#'}
                target={cert.link ? '_blank' : undefined}
                rel="noreferrer"
                data-reveal-item
                className="certificate-card reveal"
              >
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                <span className="mono">{cert.date}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

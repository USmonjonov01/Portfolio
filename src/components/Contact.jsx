import { useState } from 'react'
import { profile } from '../data/profile'
import { useReveal } from '../hooks/useReveal'
import './Contact.css'

export default function Contact() {
  const revealRef = useReveal()
  const [form, setForm] = useState({ name: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio orqali xabar - ${form.name}`)
    const body = encodeURIComponent(form.message)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <p className="eyebrow">Bog'lanish</p>
        <h2 className="section-title">Aloqa kanali</h2>
        <p className="section-sub">
          Loyiha taklifi, hamkorlik yoki savolingiz bo'lsa - qulay bo'lgan
          kanal orqali murojaat qiling.
        </p>

        <div ref={revealRef} className="mission-control reveal">
          <div className="mission-control__header">
            <div className="dashboard__dots">
              <span /><span /><span />
            </div>
            <span className="mono">contact.channel --status=open</span>
            <span className="mono mission-control__blink">● ONLINE</span>
          </div>

          <div className="mission-control__grid">
            <div className="contact__cards">
              <a className="contact-card" href={`tel:${profile.phone}`}>
                <span className="contact-card__label mono">// Telefon</span>
                <span>{profile.phone}</span>
              </a>
              <a className="contact-card" href={`mailto:${profile.email}`}>
                <span className="contact-card__label mono">// Email</span>
                <span>{profile.email}</span>
              </a>
              <a className="contact-card" href={profile.telegram} target="_blank" rel="noreferrer">
                <span className="contact-card__label mono">// Telegram</span>
                <span>Xabar yozish</span>
              </a>
              <a className="contact-card" href={profile.github} target="_blank" rel="noreferrer">
                <span className="contact-card__label mono">// GitHub</span>
                <span>Profilni ko'rish</span>
              </a>
            </div>

            <form className="contact__form" onSubmit={handleSubmit}>
              <label htmlFor="name" className="mono">Ismingiz</label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Ismingizni kiriting"
              />

              <label htmlFor="message" className="mono">Xabaringiz</label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Xabaringizni shu yerga yozing"
              />

              <button type="submit" className="btn btn-primary">
                {sent ? 'Xabar yuborildi ✓' : 'Xabar yuborish'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

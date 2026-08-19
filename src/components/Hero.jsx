import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { skills } from '../data/skills'
import HeroScene from './HeroScene'
import './Hero.css'

const METRICS = [
  { value: String(projects.length).padStart(2, '0'), label: 'ishga tushirilgan loyiha' },
  { value: String(skills.length), label: "o'rganilgan texnologiya" },
  { value: '3', label: "yo'nalishda faol o'sish" },
]

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow hero__anim hero__anim--1">Salom, men</p>

          <h1 className="hero__name hero__anim hero__anim--2">
            {profile.firstName} <span>{profile.lastName}</span>
          </h1>

          <p className="hero__role mono hero__anim hero__anim--3">
            {profile.role} · Tizim sifatida fikrlashga intiluvchi muhandis
          </p>

          <p className="hero__desc hero__anim hero__anim--4">
            Men interfeysni bezak emas, balki aniq mantiqqa qurilgan tizim
            sifatida ko'raman. React asosida amaliy loyihalar quraman va
            har bir texnik qarorni oqilona asoslashga harakat qilaman —
            maqsadim frontendni to'liq tizimning bir qismi sifatida
            tushunib, kelajakda katta miqyosdagi dasturiy mahsulotlar
            qurishda ishtirok etish.
          </p>

          <div className="hero__actions hero__anim hero__anim--5">
            <a href="#projects" className="btn btn-primary">
              Loyihalarni ko'rish
            </a>
            <a href={profile.cvFile} download className="btn btn-ghost">
              CV yuklab olish
            </a>
          </div>

          <div className="hero__social hero__anim hero__anim--6">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href={profile.telegram} target="_blank" rel="noreferrer" aria-label="Telegram">
              Telegram
            </a>
          </div>

          <dl className="hero__metrics hero__anim hero__anim--6">
            {METRICS.map((m) => (
              <div key={m.label} className="hero__metric">
                <dt className="mono">{m.value}</dt>
                <dd>{m.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__visual hero__anim hero__anim--3" aria-hidden="true">
          <HeroScene />
          <div className="hero__avatar-ring">
            {profile.avatar ? (
              <img src={profile.avatar} alt={`${profile.firstName} ${profile.lastName}`} />
            ) : (
              <span className="hero__avatar-placeholder mono">
                {profile.firstName?.[0]}
                {profile.lastName?.[0]}
              </span>
            )}
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll-cue" aria-label="Pastga aylantirish">
        <span />
      </a>
    </section>
  )
}

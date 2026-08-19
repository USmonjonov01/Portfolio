import { profile } from '../data/profile'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <svg
        className="footer__signature"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line x1="0" y1="1" x2="1200" y2="1" className="footer__rule" />
        <path d="M60,1 L60,16 M1140,1 L1140,16" className="footer__tick" />
        <path d="M580,1 L580,10 M600,1 L600,10 M620,1 L620,10" className="footer__tick" />
      </svg>

      <div className="container footer__inner">
        <blockquote className="footer__quote">
          "Bugungi aniq mehnat — ertangi ishonchli tizimlarni quradi."
        </blockquote>

        <div className="footer__bottom">
          <span className="mono">
            {profile.firstName} {profile.lastName} &copy; {year}
          </span>
          <div className="footer__links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.telegram} target="_blank" rel="noreferrer">
              Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

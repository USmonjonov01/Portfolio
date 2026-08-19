import { useEffect, useState } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { href: '#about', label: 'Men haqimda' },
  { href: '#skills', label: "Ko'nikmalar" },
  { href: '#projects', label: 'Loyihalar' },
  { href: '#beliefs', label: 'Tamoyillar' },
  { href: '#learning', label: "Yo'l xaritasi" },
  { href: '#certificates', label: 'Sertifikatlar' },
  { href: '#contact', label: "Bog'lanish" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--glass' : ''}`}>
      <nav className="navbar__inner container">
        <a href="#hero" className="navbar__logo mono" onClick={() => setOpen(false)}>
          A.U <span className="navbar__logo-tag">/ eng</span>
        </a>

        <ul className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="navbar__toggle"
          aria-label={open ? 'Menyuni yopish' : 'Menyuni ochish'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  )
}

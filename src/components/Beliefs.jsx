import { useStaggerReveal } from '../hooks/useReveal'
import './Beliefs.css'

const BELIEFS = [
  {
    id: '01',
    title: 'Tizim g\u2018oyadan muhimroq',
    text: "Chiroyli interfeys ortida har doim aniq mantiq turishi kerak. Men avval tizimni, keyin uning ko'rinishini o'ylayman.",
  },
  {
    id: '02',
    title: 'Soddalik - qiyin ish natijasi',
    text: "Oddiy ko'rinadigan interfeys ortida ko'pincha eng ko'p mehnat yotadi. Murakkablikni foydalanuvchidan yashirish - muhandislik vazifasi.",
  },
  {
    id: '03',
    title: "Xato - ma'lumot manbai",
    text: "Har bir bug, har bir noto'g'ri render - tizimni yaxshiroq tushunish uchun imkoniyat, muvaffaqiyatsizlik emas.",
  },
  {
    id: '04',
    title: "To'xtovsiz iteratsiya",
    text: "Birinchi versiya hech qachon yakuniy emas. Men kodni, dizaynni va o'zimni doimiy ravishda qayta ko'rib chiqaman.",
  },
]

export default function Beliefs() {
  const containerRef = useStaggerReveal()

  return (
    <section id="beliefs" className="beliefs">
      <div className="container">
        <p className="eyebrow">Tamoyillar</p>
        <h2 className="section-title">Ishlash falsafam</h2>
        <p className="section-sub">
          Texnologiya o'zgaradi, freymvorklar almashadi - lekin quyidagi
          tamoyillar har qanday loyihada yo'l ko'rsatuvchi bo'lib qoladi.
        </p>

        <div ref={containerRef} className="beliefs__grid">
          {BELIEFS.map((b) => (
            <div key={b.id} data-reveal-item className="belief-card reveal">
              <span className="belief-card__id mono">{b.id}</span>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
              <span className="belief-card__mark" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

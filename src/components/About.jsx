import { useReveal, useStaggerReveal } from '../hooks/useReveal'
import './About.css'

const INTERESTS = [
  'Dasturlash',
  'Muhandislik',
  "Sun'iy intellekt",
  'Astronomiya',
  'Fizika',
  'Elektronika',
  'Robototexnika',
  'Yangi texnologiyalar',
  'Katta tizimlar yaratish',
]

const STRENGTHS = [
  {
    title: 'Mantiqiy fikrlash',
    text: "Masalalarni bosqichma-bosqich, mantiqiy ketma-ketlikda tahlil qilishni yoqtiraman.",
  },
  {
    title: 'Muammoni tahlil qilish',
    text: 'Har qanday muammoning tub sababini topishga qiziqaman, yuzaki yechimlar bilan cheklanmayman.',
  },
  {
    title: 'Sabr va diqqat',
    text: "Koddagi xatolarni topib, tuzatishga yetarlicha sabrim bor - bu jarayonni o'rganish deb bilaman.",
  },
  {
    title: 'Tez o\u2018rganish',
    text: "Yangi texnologiya yoki vositani qisqa vaqtda o'rganib, amaliyotga tatbiq eta olaman.",
  },
]

const TIMELINE = [
  {
    label: 'Boshlanish',
    text: "HTML va CSS bilan tanishib, veb sahifalarning qanday qurilishini o'rgandim.",
  },
  {
    label: 'JavaScript',
    text: "JavaScript asoslarini chuqur o'rganib, dinamik interfeyslar yaratishni boshladim - UzbekMovie shu bosqichning natijasi.",
  },
  {
    label: 'React',
    text: "React ekotizimiga o'tib, komponent asosida fikrlashni va tizim sifatida frontend qurishni o'rgandim - BookList shu davrda yaratildi.",
  },
  {
    label: 'Hozir',
    text: "Backend asoslari va System Design'ni o'rganib, frontendni to'liq tizimning bir qismi sifatida tushunishga harakat qilyapman.",
  },
]

export default function About() {
  const revealRef = useReveal()
  const timelineRef = useStaggerReveal()

  return (
    <section id="about" className="about">
      <div className="container">
        <p className="eyebrow">Men haqimda</p>
        <h2 className="section-title">Frontenddan tizimga qarab boraman</h2>

        <div className="about__grid">
          <div ref={timelineRef} className="about__timeline">
            {TIMELINE.map((item, i) => (
              <div key={item.label} data-reveal-item className="timeline-item reveal">
                <div className="timeline-item__marker">
                  <span className="mono">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="timeline-item__content">
                  <h4 className="mono">{item.label}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div ref={revealRef} className="about__story reveal">
            <div className="about__text">
              <p>
                Men Frontend dasturchiman, lekin o'zimni faqat interfeys
                yozuvchi sifatida emas - foydalanuvchi va tizim o'rtasidagi
                ishonchli qatlamni quruvchi muhandis sifatida ko'raman.
                React asosida bir nechta amaliy loyihani boshidan oxirigacha
                mustaqil ishlab chiqqanman: arxitektura tanlovidan tortib,
                xato holatlarini boshqarishgacha.
              </p>
              <p>
                Chiroyli interfeys - bu ko'rinadigan qism, xolos. Meni
                ko'proq uning ortidagi mantiq qiziqtiradi: nima uchun bu
                komponent shunday tuzilgan, holat qayerda saqlanishi kerak,
                keshlash qanday ishlaydi. Shu sabab hozirda Backend va System
                Design yo'nalishlarini ham izchil o'rganyapman - to'liq
                tizimni tushunmasdan turib, uning bir qismini yaxshi qurib
                bo'lmaydi, deb hisoblayman.
              </p>

              <h3 className="about__subtitle">Diqqatimni jamlagan yo'nalishlar</h3>
              <ul className="about__interests">
                {INTERESTS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="about__strengths">
          {STRENGTHS.map((s) => (
            <div key={s.title} className="strength-card">
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

# Shaxsiy Portfolio

React + Vite asosida qurilgan shaxsiy portfolio sayti.

## Ishga tushirish

```bash
npm install
npm run dev
```

Brauzerda `http://localhost:5173` manzilini oching.

Production uchun build qilish:

```bash
npm run build
npm run preview
```

## Shaxsiy ma'lumotlarni to'ldirish

Barcha shaxsiy ma'lumotlar (ism, telefon, email, GitHub, LinkedIn, Telegram,
CV, profil rasmi) bitta faylda joylashgan:

**`src/data/profile.js`**

Shu fayldagi qiymatlarni o'zingizning haqiqiy ma'lumotlaringiz bilan
almashtiring.

- **Profil rasmi**: rasmni `public/` papkasiga joylab, `avatar` maydoniga
  yo'lini yozing, masalan: `avatar: '/avatar.jpg'`
- **CV**: PDF faylni `public/cv.pdf` nomi bilan joylashtiring (yoki
  `cvFile` maydonini o'zgartiring).

## Loyihalarni qo'shish

`src/data/projects.js` faylida `projects` massivi bor. Namuna (template)
obyektni o'chirib, o'z loyihalaringizni quyidagi shaklda qo'shing:

```js
{
  id: 'unique-id',
  title: 'Loyiha nomi',
  description: 'Qisqa tavsif',
  image: '/projects/loyiha1.png', // public/projects/ papkasiga rasm qo'ying
  tech: ['React', 'Vite'],
  github: 'https://github.com/...',
  demo: 'https://...',
  lessons: 'Nima o\'rgandingiz',
  challenges: 'Qanday qiyinchiliklar bo\'ldi',
  future: 'Kelajakda nima qo\'shmoqchisiz',
}
```

## Skill foizlarini o'zgartirish

`src/data/skills.js` faylida har bir texnologiya uchun `level` (foiz)
qiymatini o'zingizning haqiqiy darajangizga moslang.

## Sertifikat qo'shish

`src/data/profile.js` faylidagi `certificates` massiviga sertifikat
obyektlarini qo'shing (fayl ichida shablon izoh sifatida keltirilgan).

## Papka tuzilishi

```
src/
  components/   - qayta ishlatiladigan UI qismlari (Navbar, Hero, ...)
  pages/        - sahifalar (Home, NotFound)
  data/         - profil, ko'nikma, loyiha ma'lumotlari
  hooks/        - scroll-reveal va count-up animatsiya hook'lari
```

## Nashr qilish (deploy)

`npm run build` buyrug'i `dist/` papkasini yaratadi - uni Vercel, Netlify,
GitHub Pages yoki istalgan static hosting'ga yuklashingiz mumkin.

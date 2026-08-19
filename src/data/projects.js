// Loyihalar ro'yxati.
// Har bir haqiqiy loyihangizni shu massivga quyidagi shablon asosida qo'shing.
// Hozircha bitta NAMUNA (shablon) obyekt qoldirilgan - uni o'chirib,
// o'rniga real loyihalaringizni yozing.
import Images from "../assets/images/image.png"
import UzbekMoviePng from "../assets/images/UzbekMovie.png"
import FinalProjectPng from "../assets/icons/image.png"
export const projects = [
  {
    id: 'booklist',
    codename: 'CASE-01 · BOOKLIST',
    title: 'BookList',
    objective: "Kitoblarni saralash, saqlash va tez qidirib topish uchun tizim yaratish.",
    description: "React'ning komponent modeli va Router bilan amaliy tajriba to'plash maqsadida yaratilgan loyiha. Kitoblarni kategoriya bo'yicha saralash va qidiruv orqali tez topish imkonini beradi.",
    image: Images,
    tech: ['React', 'Vite', 'CSS3'],
    architecture: "React Router asosida sahifalar bo'lingan, holat (state) komponentlar darajasida boshqariladi, uslub styled-component yondashuvi bilan modulга ajratilgan.",
    result: "Router va komponent kombinatsiyasi bo'yicha amaliy tajriba orttirildi, ma'lumotlarni filtrlash va qidirish logikasi mustaqil ishlab chiqildi.",
    github: 'https://github.com/USmonjonov01/BookList',
    demo: '',
    lessons: "Router bilan amaliy ko'nikmalar, styled-component bilan kombinatsiya va API integratsiyasi.",
    challenges: "Responsive dizayn va router bilan bog'liq kelishmovchiliklar asosiy qiyinchilik bo'ldi.",
    future: 'Hozircha loyiha davom ettirilishi rejalashtirilmayapti.',
  },

  {
    id: 'uzbekmovie',
    codename: 'CASE-02 · UZBEKMOVIE',
    title: 'UzbekMovie',
    objective: "Foydalanuvchilarga qulay, chiroyli va tez kino platformasi interfeysini taqdim etish.",
    description: "Sof (vanilla) JavaScript imkoniyatlarini chuqur tushunish uchun freymvorksiz qurilgan loyiha. Hozircha faqat frontend qatlami amalga oshirilgan, backend integratsiyasi keyingi bosqichda rejalashtirilgan.",
    image: UzbekMoviePng,
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    architecture: "Sof JavaScript (vanilla) asosida DOM boshqaruvi, komponentlarga o'xshash struktura uchun qayta ishlatiluvchi funksiyalar, dark/light rejim uchun CSS o'zgaruvchilari.",
    result: "AI vositalar bilan samarali ishlash, murakkab UI holatini frameworksiz boshqarish tajribasi qo'lga kiritildi.",
    github: '',
    demo: 'https://uzbek-movie1.vercel.app/index.html',
    lessons: "AI bilan kombinatsiya va API integratsiyasi bo'yicha chuqur tajriba.",
    challenges: "Responsive dizayn va dark/light rejimlarni sof CSS bilan boshqarish qiyinchilik tug'dirdi.",
    future: 'Hozircha loyiha davom ettirilishi rejalashtirilmayapti.',
  },

  {
    id: 'finalproject',
    codename: 'MISSION-03 · FINAL_ROJECT',
    title: 'Final Project',
    objective: "Foydalanuvchilarga qulay, chiroyli va hisob kitob, kirim chiqimlarini nazorat qilishga yordam berish uchun yaratilgan",
    description: "React.js ni o'rganish davomida yaratilgan va AI bilan ishlash ko'nikmalarimni rivojlantirgan loyiha.",
    image: FinalProjectPng,
    tech: ["React",'JavaScript', 'HTML5', 'CSS3'],
    architecture: "Sof JavaScript (vanilla) asosida DOM boshqaruvi, komponentlar bilan struktura qurish, dark/light rejim uchun styled-components bilan juda yaxshi kombinatsiya qilindi. Axios, Router-dom va boshqa plugin va freymworklar ishlatildi!",
    result: "AI vositalar bilan samarali ishlash, murakkab UI holatini frameworklar bilan boshqarish tajribasi qo'lga kiritildi.",
    github: 'https://github.com/USmonjonov01/React-Project',
    demo: 'https://final-projects-three.vercel.app',
    lessons: "AI bilan kombinatsiya va API integratsiyasi bo'yicha chuqur tajriba.",
    challenges: "Responsive dizayn va dark/light rejimlarni sof CSS bilan boshqarish qiyinchilik tug'dirdi.",
    future: 'Hozircha loyiha davom ettirilishi rejalashtirilmayapti.',
  },

  {
    id: 'TartobOS',
    codename: 'MISSION-04 · TartibOS',
    title: 'TartibOS',
    objective: "Ko'plab insonlarning muammosi bo'lmish intizomsizlikni yo'qotish uhcun yaratilgan",
    description: "React.js dagi bilimlarimni mustahkamlash vatajribamni oshirish, portfolio uchun qilingan loyiha bo'lib sizning intizomingizni nazorat qiluvchi tizimdir",
    image: FinalProjectPng,
    tech: ["React",'JavaScript', 'antd', 'styled-components', 'router-dom', 'svgr', "Axios"],
    architecture: "React.js asosida DOM boshqaruvi, komponentlar bilan struktura qurish, dark rejim uchun styled-components bilan juda yaxshi kombinatsiya qilindi. Axios, Router-dom va boshqa plugin va freymworklar ishlatildi!",
    result: "AI vositalar bilan samarali ishlash, murakkab UI holatini frameworklar bilan boshqarish tajribasi qo'lga kiritildi.",
    github: 'https://github.com/USmonjonov01/TartibOS',
    demo: 'https://tartib-os.vercel.app/',
    lessons: "AI bilan kombinatsiya va API integratsiyasi bo'yicha chuqur tajriba.",
    challenges: "Responsive dizayn va dark rejimlarni styled-components bilan boshqarish qiyinchilik tug'dirdi.",
    future: "TartibOS V2 bo'yicha izlanishlar va jadal ishlar olib borilmoqda",
  },
]

import { lazy, Suspense } from 'react'
import Hero from '../components/Hero'

// Birinchi ekrandan pastdagi bo'limlar lazy-load qilinadi -
// bu boshlang'ich yuklanish tezligini oshiradi (code splitting).
const About = lazy(() => import('../components/About'))
const Skills = lazy(() => import('../components/Skills'))
const Projects = lazy(() => import('../components/Projects'))
const Beliefs = lazy(() => import('../components/Beliefs'))
const Learning = lazy(() => import('../components/Learning'))
const Goals = lazy(() => import('../components/Goals'))
const Certificates = lazy(() => import('../components/Certificates'))
const Contact = lazy(() => import('../components/Contact'))

function SectionFallback() {
  return <div className="section-fallback" aria-hidden="true" />
}

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <About />
        <Skills />
        <Projects />
        <Beliefs />
        <Learning />
        <Goals />
        <Certificates />
        <Contact />
      </Suspense>
    </>
  )
}

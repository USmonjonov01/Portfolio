import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BlueprintField from './components/BlueprintField'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <BrowserRouter>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <CustomCursor />
      <BlueprintField />
      <Navbar />
      <main className={loading ? 'main--hidden' : 'main--visible'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

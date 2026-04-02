import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation()
  useLayoutEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return null
}
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Categories from './components/Categories'
import WhyUs from './components/WhyUs'
import QuoteSection from './components/QuoteSection'
import Footer from './components/Footer'
import CategoryPage from './components/CategoryPage'
import ProductDetail from './components/ProductDetail'
import ProduitsPage from './components/ProduitsPage'
import AProposPage from './components/AProposPage'
import ContactPage from './components/ContactPage'
import DevisPage from './components/DevisPage'
import WhatsAppButton from './components/WhatsAppButton'
import VideoSection from './components/VideoSection'

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Categories />
      <VideoSection />
      <WhyUs />
      <QuoteSection />
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produits" element={<ProduitsPage />} />
        <Route path="/a-propos" element={<AProposPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/devis" element={<DevisPage />} />
        <Route path="/produits/:category" element={<CategoryPage />} />
        <Route path="/produits/:category/:productId" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

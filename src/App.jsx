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
import NotFoundPage from './components/NotFoundPage'
import WhatsAppButton from './components/WhatsAppButton'
import VideoSection from './components/VideoSection'
import SEO from './components/SEO'
import { MobileSearchStrip } from './components/SearchBar'

function HomePage() {
  return (
    <>
      <SEO
        description="IMMI Négoce — Fournisseur de coffrets électriques ABS, goulottes et plinthes pour professionnels au Maroc. Basé à Temara. Devis gratuit."
        url="https://immi-negoce.ma"
      />
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
      <MobileSearchStrip />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produits" element={<ProduitsPage />} />
        <Route path="/a-propos" element={<AProposPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/devis" element={<DevisPage />} />
        <Route path="/produits/:category" element={<CategoryPage />} />
        <Route path="/produits/:category/:productId" element={<ProductDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

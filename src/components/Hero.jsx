import { useState, useEffect, useRef } from 'react'
import './Hero.css'

const mobileSlides = [
  { image: '/images/hero-bg.jpg',             label: 'IMMI Négoce' },
  { image: '/images/coffret-opaque.jpg',      label: 'Coffrets ABS Opaque' },
  { image: '/images/coffret-transparent.jpg', label: 'Coffrets ABS Transparent' },
  { image: '/images/plinthe.jpg',              label: 'Plinthes' },
  { image: '/images/goulotte.jpg',            label: 'Goulottes' },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const touchStartX = useRef(null)

  useEffect(() => {
    function handleResize() { setIsMobile(window.innerWidth <= 768) }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!isMobile) return
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % mobileSlides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [isMobile])

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX
  }

  function handleTouchEnd(e) {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0) setCurrent((i) => (i + 1) % mobileSlides.length)
      else setCurrent((i) => (i - 1 + mobileSlides.length) % mobileSlides.length)
    }
    touchStartX.current = null
  }

  return (
    <section className="hero" id="accueil" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>

      {/* Desktop : photo hero fixe */}
      <div className="hero-slide hero-slide--desktop active" style={{ backgroundImage: `url(/images/hero-bg.jpg)` }} />

      {/* Mobile : carrousel */}
      {isMobile && mobileSlides.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide hero-slide--mobile ${i === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-eyebrow">Solutions Électriques Industrielles</p>
        <h1 className="hero-title">
          L'ÉLECTRICITÉ<br />
          <span>INDUSTRIELLE</span><br />
          EST NOTRE MÉTIER
        </h1>
        <a href="/produits" className="hero-btn">Voir nos produits</a>
      </div>

      {/* Dots mobile uniquement */}
      {isMobile && (
        <div className="hero-dots">
          {mobileSlides.map((_, i) => (
            <button
              key={i}
              className={`hero-dot ${i === current ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={mobileSlides[i].label}
            />
          ))}
        </div>
      )}
    </section>
  )
}

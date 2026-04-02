import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-eyebrow">Solutions Électriques Industrielles</p>
        <h1 className="hero-title">
          L'ÉLECTRICITÉ<br />
          <span>INDUSTRIELLE</span><br />
          EST NOTRE MÉTIER
        </h1>
        <a href="#produits" className="hero-btn">Voir nos produits</a>
      </div>
    </section>
  )
}

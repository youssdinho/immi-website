import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import SEO from './SEO'
import { FaIndustry, FaShieldAlt, FaHandshake, FaLeaf } from 'react-icons/fa'
import './AProposPage.css'

const valeurs = [
  {
    icon: <FaShieldAlt />,
    titre: 'Qualité',
    desc: 'Chaque produit est rigoureusement sélectionné pour répondre aux normes les plus strictes du secteur électrique industriel.',
  },
  {
    icon: <FaIndustry />,
    titre: 'Expertise',
    desc: 'Notre équipe maîtrise les exigences du marché marocain et vous accompagne avec des conseils techniques adaptés à vos projets.',
  },
  {
    icon: <FaHandshake />,
    titre: 'Proximité',
    desc: 'Société 100% marocaine, nous comprenons les réalités locales et offrons un service rapide et personnalisé à nos clients.',
  },
  {
    icon: <FaLeaf />,
    titre: 'Engagement',
    desc: 'Nous sélectionnons des produits durables et fiables pour contribuer à des installations électriques performantes et pérennes.',
  },
]

export default function AProposPage() {
  return (
    <>
      <SEO
        title="À Propos"
        description="IMMI Négoce, société marocaine spécialisée en électricité industrielle depuis 2024. Basée à Temara, nous fournissons des produits de qualité aux professionnels."
        url="https://immi-negoce.ma/a-propos"
      />
      <Navbar />
      <div className="apropos-wrapper">

        {/* Hero */}
        <div className="apropos-hero">
          <div className="apropos-hero-overlay" />
          <div className="apropos-hero-content">
            <h1>À Propos d'IMMI Négoce</h1>
            <p>Votre partenaire de confiance en électricité industrielle au Maroc</p>
          </div>
        </div>

        {/* Intro */}
        <section className="apropos-intro">
          <div className="apropos-container">
            <div className="apropos-intro-grid">
              <div className="apropos-intro-text">
                <span className="apropos-tag">Qui sommes-nous</span>
                <h2>Une entreprise marocaine au service de l'industrie</h2>
                <p>
                  Fondée en <strong>2024</strong>, IMMI Négoce est une société marocaine spécialisée dans la
                  distribution de matériel électrique industriel. Depuis notre création, nous nous sommes
                  engagés à fournir à nos clients des produits de qualité à des prix compétitifs.
                </p>
                <p>
                  Notre cœur de métier est l'<strong>électricité industrielle</strong> : coffrets électriques,
                  goulottes de câblage, plinthes et accessoires. Nous proposons une large gamme de produits
                  soigneusement sélectionnés pour répondre aux besoins des professionnels, installateurs
                  et industriels marocains.
                </p>
                <div className="apropos-stats">
                  <div className="apropos-stat">
                    <span className="stat-number">2024</span>
                    <span className="stat-label">Année de création</span>
                  </div>
                  <div className="apropos-stat">
                    <span className="stat-number">4+</span>
                    <span className="stat-label">Catégories de produits</span>
                  </div>
                  <div className="apropos-stat">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">Marocain</span>
                  </div>
                </div>
              </div>
              <div className="apropos-intro-img">
                <img src="/images/coffret-abs-opaque/img1.jpg" alt="Nos produits" />
              </div>
            </div>
          </div>
        </section>

        {/* Valeurs */}
        <section className="apropos-valeurs">
          <div className="apropos-container">
            <div className="apropos-section-header">
              <h2>Nos Valeurs</h2>
              <p>Ce qui nous guide au quotidien</p>
            </div>
            <div className="apropos-valeurs-grid">
              {valeurs.map((v, i) => (
                <div className="valeur-card" key={i}>
                  <div className="valeur-icon">{v.icon}</div>
                  <h3>{v.titre}</h3>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photos produits */}
        <section className="apropos-galerie">
          <div className="apropos-container">
            <div className="apropos-section-header">
              <h2>Notre Gamme</h2>
              <p>Des produits pour chaque besoin industriel</p>
            </div>
            <div className="apropos-categories-grid">
              {[
                { name: 'Coffret ABS Opaque', image: '/images/coffret-opaque.jpg', slug: 'coffret-abs-opaque' },
                { name: 'Coffret ABS Transparent', image: '/images/coffret-transparent.jpg', slug: 'coffret-abs-transparent' },
                { name: 'Plinthe', image: '/images/plinth.jpg', slug: 'plinthe' },
                { name: 'Goulotte', image: '/images/goulotte.jpg', slug: 'goulotte' },
              ].map((cat) => (
                <Link to={`/produits/${cat.slug}`} key={cat.slug} className="apropos-cat-card">
                  <img src={cat.image} alt={cat.name} />
                  <div className="apropos-cat-overlay">
                    <span>{cat.name}</span>
                    <em>Voir les produits →</em>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="apropos-cta">
          <div className="apropos-container">
            <h2>Vous avez un projet ?</h2>
            <p>Contactez-nous pour un devis personnalisé adapté à vos besoins.</p>
            <a href="/devis" className="apropos-btn">Demander un devis</a>
          </div>
        </section>

      </div>
      <Footer />
    </>
  )
}

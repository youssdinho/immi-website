import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import SEO from './SEO'
import './ProduitsPage.css'

const categories = [
  { name: 'Coffret ABS Opaque', image: '/images/coffret-opaque.jpg', slug: 'coffret-abs-opaque' },
  { name: 'Coffret ABS Transparent', image: '/images/coffret-transparent.jpg', slug: 'coffret-abs-transparent' },
  { name: 'Plinthe', image: '/images/plinthe.jpg', slug: 'plinthe' },
  { name: 'Goulotte', image: '/images/goulotte.jpg', slug: 'goulotte' },
]

export default function ProduitsPage() {
  return (
    <>
      <SEO
        title="Nos Produits"
        description="Découvrez nos coffrets électriques ABS opaques et transparents, goulottes et plinthes. Produits conformes aux normes internationales. Livraison au Maroc."
        url="https://immi-negoce.ma/produits"
      />
      <Navbar />
      <div className="produits-page-wrapper">
        <div className="produits-page">
          <div className="produits-header">
            <h1>Nos Produits</h1>
            <p>Sélectionnez une catégorie pour découvrir nos articles</p>
          </div>

          <div className="produits-grid">
            {categories.map((cat) => (
              <Link to={`/produits/${cat.slug}`} key={cat.slug} className="produits-card">
                <div className="produits-card-img">
                  <img src={cat.image} alt={cat.name} />
                  <div className="produits-card-overlay" />
                </div>
                <div className="produits-card-body">
                  <p className="produits-card-name">{cat.name}</p>
                  <span className="produits-card-arrow">Voir les produits →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

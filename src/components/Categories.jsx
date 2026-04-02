import { Link } from 'react-router-dom'
import './Categories.css'

const categories = [
  { name: 'Coffret ABS Opaque', image: '/images/coffret-opaque.jpg', slug: 'coffret-abs-opaque' },
  { name: 'Coffret ABS Transparent', image: '/images/coffret-transparent.jpg', slug: 'coffret-abs-transparent' },
  { name: 'Plinth', image: '/images/plinth.jpg', slug: 'plinth' },
  { name: 'Goulotte', image: '/images/goulotte.jpg', slug: 'goulotte' },
]

export default function Categories() {
  return (
    <section className="categories" id="produits">
      <div className="categories-container">
        <div className="section-header">
          <h2 className="section-title">NOS PRODUITS</h2>
          <p className="section-subtitle">Catégories Vedettes</p>
          <div className="section-divider" />
        </div>

        <div className="categories-grid">
          {categories.map((cat, i) => {
            const card = (
              <div className={`category-card${cat.slug ? ' clickable' : ''}`} key={i}>
                <div className="category-img-wrap">
                  <img src={cat.image} alt={cat.name} />
                  <div className="category-overlay" />
                </div>
                <p className="category-name">{cat.name}</p>
              </div>
            )
            return cat.slug ? (
              <Link to={`/produits/${cat.slug}`} key={i} style={{ textDecoration: 'none' }}>
                {card}
              </Link>
            ) : card
          })}
        </div>

        <a href="#produits" className="btn-all-products">
          Voir tous les produits
        </a>
      </div>
    </section>
  )
}

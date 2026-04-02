import { useParams, Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { catalog } from '../data/products'
import './CategoryPage.css'

export default function CategoryPage() {
  const { category } = useParams()
  const data = catalog[category]

  if (!data) {
    return (
      <>
        <Navbar />
        <div className="cat-notfound">
          <h2>Catégorie introuvable</h2>
          <Link to="/">Retour à l'accueil</Link>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="cat-page-wrapper">
      <div className="cat-page">
        <div className="cat-breadcrumb">
          <Link to="/">Accueil</Link> / <span>{data.categoryName}</span>
        </div>

        <h1 className="cat-title">{data.categoryName}</h1>
        <p className="cat-count">{data.items.length} produit{data.items.length > 1 ? 's' : ''}</p>

        <div className="cat-grid">
          {data.items.map((item) => (
            <Link
              to={`/produits/${category}/${item.id}`}
              key={item.id}
              className="cat-card"
            >
              <div className="cat-card-img">
                <img src={item.thumbnail} alt={item.name} />
              </div>
              <div className="cat-card-body">
                <p className="cat-card-name">{item.name}</p>
                <p className="cat-card-dims">{item.dimensions}</p>
                <span className="cat-card-btn">Voir le produit →</span>
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

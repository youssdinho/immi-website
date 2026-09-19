import { useParams, Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import SEO from './SEO'
import { catalog } from '../data/products'
import { categoryContent, commonArguments } from '../data/categoryContent'
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

  const content = categoryContent[category]
  const dimensions = [...new Set(data.items.map((item) => item.dimensions))]

  return (
    <>
      {content && (
        <SEO
          title={content.seoTitle}
          description={content.metaDescription}
          url={`https://immi-negoce.ma/produits/${category}`}
        />
      )}
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

        {content && (
          <section className="cat-content">
            <h2>{content.seoTitle}</h2>
            {content.intro.map((p, i) => <p key={i}>{p}</p>)}

            <h3>Utilisations</h3>
            <ul>
              {content.usages.map((u) => <li key={u}>{u}</li>)}
            </ul>

            <h3>Dimensions disponibles</h3>
            <p className="cat-content-dims">{dimensions.join(' · ')}</p>

            <h3>Comment choisir ?</h3>
            <p>{content.choisir}</p>

            <h3>Pourquoi IMMI Négoce ?</h3>
            <ul>
              {commonArguments.map((a) => <li key={a}>{a}</li>)}
            </ul>

            <Link to="/devis" className="cat-content-btn">Demander un devis gratuit</Link>
          </section>
        )}
      </div>
      </div>
      <Footer />
    </>
  )
}

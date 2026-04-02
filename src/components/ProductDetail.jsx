import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { catalog } from '../data/products'
import './ProductDetail.css'

export default function ProductDetail() {
  const { category, productId } = useParams()
  const data = catalog[category]
  const product = data?.items.find((p) => p.id === productId)

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="pd-notfound">
          <h2>Produit introuvable</h2>
          <Link to={`/produits/${category}`}>Retour à la catégorie</Link>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="pd-page-wrapper">
        <ProductView product={product} category={category} categoryName={data.categoryName} />
      </div>
      <Footer />
    </>
  )
}

function ProductView({ product, category, categoryName }) {
  const [mainImg, setMainImg] = useState(0)

  return (
    <div className="pd-page">
      <div className="pd-breadcrumb">
        <Link to="/">Accueil</Link> /{' '}
        <Link to={`/produits/${category}`}>{categoryName}</Link> /{' '}
        <span>{product.name}</span>
      </div>

      <div className="pd-layout">
        {/* Galerie */}
        <div className="pd-gallery">
          <div className="pd-main-img">
            <img src={product.images[mainImg]} alt={product.name} />
          </div>
          <div className="pd-thumbs">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${product.name} ${i + 1}`}
                className={i === mainImg ? 'pd-thumb active' : 'pd-thumb'}
                onClick={() => setMainImg(i)}
              />
            ))}
          </div>
        </div>

        {/* Infos */}
        <div className="pd-info">
          <h1 className="pd-name">{product.name}</h1>
          <p className="pd-desc">{product.description}</p>

          <div className="pd-specs">
            <h3>Caractéristiques techniques</h3>
            <table>
              <tbody>
                {product.specs.map((s, i) => (
                  <tr key={i}>
                    <td className="spec-label">{s.label}</td>
                    <td className="spec-value">{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <a href="/devis" className="pd-btn-devis">
            Demander un devis
          </a>

          <Link to={`/produits/${category}`} className="pd-back">
            ← Retour à la catégorie
          </Link>
        </div>
      </div>
    </div>
  )
}

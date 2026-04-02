import { useState, useEffect, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { catalog } from '../data/products'
import './ProductDetail.css'

function Lightbox({ images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose, onPrev, onNext])

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>✕</button>
      <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); onPrev() }}>‹</button>
      <img
        className="lightbox-img"
        src={images[index]}
        alt={`photo ${index + 1}`}
        onClick={(e) => e.stopPropagation()}
      />
      <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); onNext() }}>›</button>
      <div className="lightbox-counter">{index + 1} / {images.length}</div>
    </div>
  )
}

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
  const [lightbox, setLightbox] = useState(false)

  const closeLightbox = useCallback(() => setLightbox(false), [])
  const prevImg = useCallback(() => setMainImg((i) => (i - 1 + product.images.length) % product.images.length), [product.images.length])
  const nextImg = useCallback(() => setMainImg((i) => (i + 1) % product.images.length), [product.images.length])

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
          {lightbox && (
            <Lightbox
              images={product.images}
              index={mainImg}
              onClose={closeLightbox}
              onPrev={prevImg}
              onNext={nextImg}
            />
          )}
          <div className="pd-main-img pd-main-img--clickable" onClick={() => setLightbox(true)}>
            <img src={product.images[mainImg]} alt={product.name} />
            <div className="pd-zoom-hint">🔍 Cliquer pour agrandir</div>
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

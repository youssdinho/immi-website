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

          <a
            href={`https://wa.me/212661695551?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20produit%20%3A%20${encodeURIComponent(product.name)}%20(R%C3%A9f%3A%20${encodeURIComponent(product.id)}).%20Pouvez-vous%20me%20donner%20plus%20d%27informations%20%3F`}
            className="pd-btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.523 5.845L.057 23.082a.75.75 0 0 0 .921.921l5.237-1.466A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.65-.49-5.18-1.348l-.372-.214-3.856 1.08 1.08-3.856-.214-.372A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
            Commander via WhatsApp
          </a>

          <Link to={`/produits/${category}`} className="pd-back">
            ← Retour à la catégorie
          </Link>
        </div>
      </div>
    </div>
  )
}

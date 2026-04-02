import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { catalog } from '../data/products'
import './SearchBar.css'

export function MobileSearchStrip() {
  return (
    <div className="mobile-search-strip">
      <SearchBar />
    </div>
  )
}

const allProducts = Object.entries(catalog).flatMap(([slug, cat]) =>
  cat.items.map((p) => ({ ...p, categorySlug: slug, categoryName: cat.categoryName }))
)

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)
  const wrapperRef = useRef(null)
  const navigate = useNavigate()

  const results = query.trim().length >= 2
    ? allProducts.filter((p) => {
        const haystack = `${p.name} ${p.dimensions ?? ''}`.toLowerCase()
        const tokens = query.trim().toLowerCase().split(/\s+/)
        return tokens.every((token) => haystack.includes(token))
      }).slice(0, 6)
    : []

  useEffect(() => {
    function handleClick(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setFocused(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  function goTo(p) {
    navigate(`/produits/${p.categorySlug}/${p.id}`)
    setQuery('')
    setFocused(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (results.length > 0) goTo(results[0])
  }

  return (
    <div className="searchbar-wrapper" ref={wrapperRef}>
      <form className="searchbar-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          placeholder="Rechercher un produit..."
          className="searchbar-input"
        />
        <button type="submit" className="searchbar-btn" aria-label="Rechercher">
          <FaSearch />
        </button>
      </form>

      {focused && query.trim().length >= 2 && (
        <ul className="searchbar-results">
          {results.length > 0 ? results.map((p) => (
            <li key={p.id} onMouseDown={() => goTo(p)}>
              <img src={p.thumbnail} alt={p.name} />
              <div>
                <p className="sr-name">{p.name}</p>
                <p className="sr-cat">{p.categoryName}</p>
              </div>
            </li>
          )) : (
            <li className="sr-empty">Aucun produit trouvé</li>
          )}
        </ul>
      )}
    </div>
  )
}

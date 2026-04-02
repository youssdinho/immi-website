import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-immi">IMMI</span>
          <span className="logo-sub">NÉGOCE</span>
        </Link>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/#accueil" onClick={() => setMenuOpen(false)}>Accueil</Link></li>
          <li><Link to="/produits" onClick={() => setMenuOpen(false)}>Produits</Link></li>
          <li><Link to="/a-propos" onClick={() => setMenuOpen(false)}>À propos</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>

        <Link to="/devis" className="btn-devis" onClick={() => setMenuOpen(false)}>
          Demander un Devis
        </Link>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  )
}

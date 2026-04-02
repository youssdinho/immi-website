import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import './NotFoundPage.css'

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <div className="notfound-wrapper">
        <div className="notfound-content">
          <div className="notfound-code">404</div>
          <div className="notfound-divider" />
          <h1>Page introuvable</h1>
          <p>La page que vous recherchez n'existe pas ou a été déplacée.</p>
          <div className="notfound-actions">
            <Link to="/" className="notfound-btn-primary">Retour à l'accueil</Link>
            <Link to="/produits" className="notfound-btn-secondary">Voir nos produits</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

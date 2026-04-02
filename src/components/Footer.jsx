import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo-immi">IMMI</span>
            <span className="footer-logo-sub">NÉGOCE</span>
            <p className="footer-tagline">L'électricité industrielle est notre métier</p>
          </div>

          <div className="footer-links">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/produits">Produits</Link></li>
              <li><Link to="/a-propos">À propos</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/devis">Devis</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <p>📞 0661 695 551</p>
            <p>📍 Avenue Mohamed 5, Temara</p>
            <p>✉️ immi.negoce@gmail.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 IMMI Négoce. Tous droits réservés.</p>
          <div className="footer-socials">
            <a href="https://www.facebook.com/p/Immi-Negoce-61575701594035/" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://www.instagram.com/immi_negoce/" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://x.com/IMMINEGOCE" target="_blank" rel="noreferrer" aria-label="X"><FaXTwitter /></a>
            <a href="mailto:immi.negoce@gmail.com" aria-label="Email"><FaEnvelope /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

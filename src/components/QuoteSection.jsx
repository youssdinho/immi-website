import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './QuoteSection.css'

export default function QuoteSection() {
  return (
    <section className="quote-section" id="devis">
      <div className="quote-container">
        <div className="quote-border">
          <p className="quote-label">DEMANDEZ UN DEVIS GRATUIT</p>
          <p className="quote-sub">Contactez nos experts dès aujourd'hui !</p>

          <div className="quote-info">
            <div className="quote-info-item">
              <FaPhone className="quote-icon" />
              <div>
                <p className="quote-info-label">Appelez-nous</p>
                <p className="quote-info-value">0661 695 551</p>
              </div>
            </div>

            <Link to="/devis" className="btn-quote">Demander un Devis</Link>

            <div className="quote-info-item">
              <FaMapMarkerAlt className="quote-icon" />
              <div>
                <p className="quote-info-label">Visitez-nous</p>
                <p className="quote-info-value">Avenue Mohamed 5, Temara</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

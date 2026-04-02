import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Navbar from './Navbar'
import Footer from './Footer'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'
import './ContactPage.css'

const EMAILJS_SERVICE  = 'service_iqu4cqb'
const EMAILJS_TEMPLATE = 'template_2n0970l'
const EMAILJS_KEY      = 'roUdnqBYBa0YGf_En'

const infos = [
  {
    icon: <FaMapMarkerAlt />,
    titre: 'Adresse',
    lignes: ['Avenue Mohamed V, Temara', 'Maroc'],
  },
  {
    icon: <FaPhone />,
    titre: 'Téléphone',
    lignes: ['06 61 69 55 51'],
  },
  {
    icon: <FaEnvelope />,
    titre: 'Email',
    lignes: ['immi.negoce@gmail.com'],
  },
  {
    icon: <FaClock />,
    titre: 'Horaires',
    lignes: ['Lun – Ven : 9h00 – 19h00', 'Samedi : 9h00 – 17h00'],
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ nom: '', email: '', telephone: '', sujet: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          nom: form.nom,
          societe: '—',
          email: form.email,
          telephone: form.telephone || '—',
          articles: `Sujet : ${form.sujet}`,
          message: form.message,
        },
        EMAILJS_KEY
      )
      setSent(true)
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer ou nous appeler directement.')
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <Navbar />
      <div className="contact-wrapper">

        {/* Hero */}
        <div className="contact-hero">
          <div className="contact-hero-overlay" />
          <div className="contact-hero-content">
            <h1>Contactez-Nous</h1>
            <p>Notre équipe est à votre disposition pour répondre à toutes vos questions</p>
          </div>
        </div>

        <div className="contact-body">

          {/* Info cards */}
          <div className="contact-infos">
            {infos.map((info, i) => (
              <div className="contact-info-card" key={i}>
                <div className="contact-info-icon">{info.icon}</div>
                <div>
                  <h3>{info.titre}</h3>
                  {info.lignes.map((l, j) => <p key={j}>{l}</p>)}
                </div>
              </div>
            ))}
          </div>

          {/* Form + Map */}
          <div className="contact-main">

            {/* Form */}
            <div className="contact-form-card">
              <h2>Envoyer un message</h2>
              <p className="contact-form-sub">Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.</p>

              {sent ? (
                <div className="contact-success">
                  <div className="contact-success-icon">✓</div>
                  <h3>Message envoyé !</h3>
                  <p>Merci de nous avoir contactés. Nous reviendrons vers vous très prochainement.</p>
                  <button onClick={() => setSent(false)}>Envoyer un autre message</button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Nom complet *</label>
                      <input type="text" name="nom" value={form.nom} onChange={handleChange} placeholder="Votre nom" required />
                    </div>
                    <div className="form-group">
                      <label>Email *</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="votre@email.com" required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Téléphone</label>
                      <input type="tel" name="telephone" value={form.telephone} onChange={handleChange} placeholder="+212 6XX XXX XXX" />
                    </div>
                    <div className="form-group">
                      <label>Sujet *</label>
                      <select name="sujet" value={form.sujet} onChange={handleChange} required>
                        <option value="">Sélectionner un sujet</option>
                        <option>Demande de devis</option>
                        <option>Renseignement produit</option>
                        <option>Service après-vente</option>
                        <option>Partenariat</option>
                        <option>Autre</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Décrivez votre besoin..." rows={5} required />
                  </div>
                  <button type="submit" className="contact-submit" disabled={sending}>
                    {sending ? 'Envoi en cours...' : 'Envoyer le message'}
                  </button>
                  {error && <p className="contact-error">{error}</p>}
                </form>
              )}
            </div>

            {/* Map placeholder */}
            <div className="contact-map">
              <iframe
                title="Localisation IMMI Négoce"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53222.76!2d-6.9157!3d33.9272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda70c9e73ae1db5%3A0x62d5b26ca3d1fa5e!2sAvenue%20Mohammed%20V%2C%20Tem%C3%A2ra%2C%20Maroc!5e0!3m2!1sfr!2sma!4v1690000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

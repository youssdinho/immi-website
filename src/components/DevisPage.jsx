import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Navbar from './Navbar'
import Footer from './Footer'
import SEO from './SEO'
import { FaCheckCircle, FaPlus, FaTrash } from 'react-icons/fa'
import { catalog } from '../data/products'
import './DevisPage.css'

const EMAILJS_SERVICE  = 'service_iqu4cqb'
const EMAILJS_TEMPLATE = 'template_2n0970l'
const EMAILJS_KEY      = 'roUdnqBYBa0YGf_En'

const categoryOptions = [
  { label: 'Coffret ABS Opaque', key: 'coffret-abs-opaque' },
  { label: 'Coffret ABS Transparent', key: 'coffret-abs-transparent' },
  { label: 'Plinthe', key: 'plinth' },
  { label: 'Goulotte', key: 'goulotte' },
  { label: 'Autre', key: null },
]

function emptyLine() {
  return { id: Date.now() + Math.random(), categorie: '', produit: '', quantite: '' }
}

const steps = ['Vos coordonnées', 'Votre besoin', 'Confirmation']

export default function DevisPage() {
  const [step, setStep] = useState(0)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    nom: '', societe: '', email: '', telephone: '', message: '',
  })
  const [lignes, setLignes] = useState([emptyLine()])

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function updateLigne(id, field, value) {
    setLignes(lignes.map((l) => l.id === id ? { ...l, [field]: value, ...(field === 'categorie' ? { produit: '' } : {}) } : l))
  }

  function addLigne() {
    setLignes([...lignes, emptyLine()])
  }

  function removeLigne(id) {
    if (lignes.length === 1) return
    setLignes(lignes.filter((l) => l.id !== id))
  }

  function next(e) {
    e.preventDefault()
    setStep((s) => s + 1)
  }

  function prev() {
    setStep((s) => s - 1)
  }

  async function submit(e) {
    e.preventDefault()
    setSending(true)
    setError('')

    const articlesText = lignes
      .map((l) => `• ${l.categorie}${l.produit ? ' — ' + l.produit : ''} × ${l.quantite || '?'}`)
      .join('\n')

    try {
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          nom: form.nom,
          societe: form.societe || '—',
          email: form.email,
          telephone: form.telephone,
          articles: articlesText,
          message: form.message || '—',
        },
        EMAILJS_KEY
      )
      setSent(true)
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.')
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <SEO
        title="Demander un Devis"
        description="Demandez un devis gratuit pour vos coffrets électriques, goulottes et plinthes. Réponse sous 24h. Sans engagement."
        url="https://immi-negoce.ma/devis"
      />
      <Navbar />
      <div className="devis-wrapper">

        <div className="devis-hero">
          <div className="devis-hero-overlay" />
          <div className="devis-hero-content">
            <h1>Demander un Devis</h1>
            <p>Gratuit · Sans engagement · Réponse sous 24h</p>
          </div>
        </div>

        <div className="devis-body">

          {sent ? (
            <div className="devis-success">
              <FaCheckCircle className="devis-success-icon" />
              <h2>Demande envoyée !</h2>
              <p>Merci <strong>{form.nom}</strong>, votre demande de devis a bien été reçue.<br />
              Notre équipe vous contactera dans les plus brefs délais sur <strong>{form.email}</strong>.</p>
              <a href="/" className="devis-success-btn">Retour à l'accueil</a>
            </div>
          ) : (
            <div className="devis-card">

              {/* Stepper */}
              <div className="devis-stepper">
                {steps.map((label, i) => (
                  <div key={i} className={`devis-step ${i === step ? 'active' : ''} ${i < step ? 'done' : ''}`}>
                    <div className="devis-step-circle">{i < step ? '✓' : i + 1}</div>
                    <span>{label}</span>
                    {i < steps.length - 1 && <div className="devis-step-line" />}
                  </div>
                ))}
              </div>

              {/* Step 1 */}
              {step === 0 && (
                <form className="devis-form" onSubmit={next}>
                  <h2>Vos coordonnées</h2>
                  <div className="devis-row">
                    <div className="devis-group">
                      <label>Nom complet *</label>
                      <input name="nom" value={form.nom} onChange={update} placeholder="Votre nom" required />
                    </div>
                    <div className="devis-group">
                      <label>Société</label>
                      <input name="societe" value={form.societe} onChange={update} placeholder="Nom de votre société" />
                    </div>
                  </div>
                  <div className="devis-row">
                    <div className="devis-group">
                      <label>Email *</label>
                      <input type="email" name="email" value={form.email} onChange={update} placeholder="votre@email.com" required />
                    </div>
                    <div className="devis-group">
                      <label>Téléphone *</label>
                      <input type="tel" name="telephone" value={form.telephone} onChange={update} placeholder="06 XX XX XX XX" required />
                    </div>
                  </div>
                  <div className="devis-actions">
                    <button type="submit" className="devis-btn-next">Suivant →</button>
                  </div>
                </form>
              )}

              {/* Step 2 */}
              {step === 1 && (
                <form className="devis-form" onSubmit={next}>
                  <h2>Votre besoin</h2>

                  <div className="devis-lignes-header">
                    <span>Catégorie</span>
                    <span>Produit</span>
                    <span>Qté</span>
                    <span />
                  </div>

                  {lignes.map((ligne, i) => {
                    const catKey = categoryOptions.find(c => c.label === ligne.categorie)?.key
                    const produits = catKey && catalog[catKey] ? catalog[catKey].items : []
                    return (
                      <div className="devis-ligne" key={ligne.id}>
                        <select
                          value={ligne.categorie}
                          onChange={(e) => updateLigne(ligne.id, 'categorie', e.target.value)}
                          required
                        >
                          <option value="">Catégorie *</option>
                          {categoryOptions.map((c) => <option key={c.label}>{c.label}</option>)}
                        </select>

                        {produits.length > 0 ? (
                          <select
                            value={ligne.produit}
                            onChange={(e) => updateLigne(ligne.id, 'produit', e.target.value)}
                          >
                            <option value="">Tous les produits</option>
                            {produits.map((p) => <option key={p.id} value={p.name}>{p.name}</option>)}
                          </select>
                        ) : (
                          <input
                            value={ligne.produit}
                            onChange={(e) => updateLigne(ligne.id, 'produit', e.target.value)}
                            placeholder="Préciser le produit"
                          />
                        )}

                        <input
                          type="number"
                          value={ligne.quantite}
                          onChange={(e) => updateLigne(ligne.id, 'quantite', e.target.value)}
                          placeholder="Qté"
                          min="1"
                        />

                        <button type="button" className="devis-remove-ligne" onClick={() => removeLigne(ligne.id)}>
                          <FaTrash />
                        </button>
                      </div>
                    )
                  })}

                  <button type="button" className="devis-add-ligne" onClick={addLigne}>
                    <FaPlus /> Ajouter un article
                  </button>

                  <div className="devis-group">
                    <label>Message / Précisions</label>
                    <textarea name="message" value={form.message} onChange={update} rows={3} placeholder="Délai souhaité, conditions particulières..." />
                  </div>

                  <div className="devis-actions">
                    <button type="button" className="devis-btn-prev" onClick={prev}>← Retour</button>
                    <button type="submit" className="devis-btn-next">Suivant →</button>
                  </div>
                </form>
              )}

              {/* Step 3 — Recap */}
              {step === 2 && (
                <form className="devis-form" onSubmit={submit}>
                  <h2>Confirmation</h2>
                  <p className="devis-recap-intro">Vérifiez vos informations avant d'envoyer.</p>

                  <div className="devis-recap">
                    <div className="devis-recap-section">
                      <h3>Coordonnées</h3>
                      <div className="devis-recap-grid">
                        <span>Nom</span><span>{form.nom}</span>
                        <span>Société</span><span>{form.societe || '—'}</span>
                        <span>Email</span><span>{form.email}</span>
                        <span>Téléphone</span><span>{form.telephone}</span>
                      </div>
                    </div>
                    <div className="devis-recap-section">
                      <h3>Articles demandés</h3>
                      <table className="devis-recap-table">
                        <thead>
                          <tr><th>Catégorie</th><th>Produit</th><th>Qté</th></tr>
                        </thead>
                        <tbody>
                          {lignes.map((l) => (
                            <tr key={l.id}>
                              <td>{l.categorie || '—'}</td>
                              <td>{l.produit || 'Non précisé'}</td>
                              <td>{l.quantite || '—'}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {form.message && <p className="devis-recap-msg"><strong>Message :</strong> {form.message}</p>}
                    </div>
                  </div>

                  <div className="devis-actions">
                    <button type="button" className="devis-btn-prev" onClick={prev}>← Modifier</button>
                    <button type="submit" className="devis-btn-submit" disabled={sending}>
                      {sending ? 'Envoi en cours...' : 'Envoyer la demande'}
                    </button>
                  </div>
                  {error && <p className="devis-error">{error}</p>}
                </form>
              )}

            </div>
          )}

        </div>
      </div>
      <Footer />
    </>
  )
}

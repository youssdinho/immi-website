import { FaTags, FaShieldAlt, FaTools } from 'react-icons/fa'
import './WhyUs.css'

const reasons = [
  { icon: <FaTags />, title: 'Prix Compétitifs', desc: 'Des tarifs adaptés aux professionnels et aux entreprises industrielles.' },
  { icon: <FaShieldAlt />, title: 'Qualité', desc: 'Des produits conformes aux normes internationales les plus exigeantes.' },
  { icon: <FaTools />, title: 'Expertise Technique', desc: 'Notre équipe vous accompagne avec un conseil personnalisé.' },
]

export default function WhyUs() {
  return (
    <section className="whyus" id="pourquoi-nous">
      <div className="whyus-overlay" />
      <div className="whyus-container">
        <div className="section-header">
          <h2 className="section-title">POURQUOI NOUS CHOISIR ?</h2>
          <div className="section-divider" />
        </div>
        <div className="whyus-grid">
          {reasons.map((r, i) => (
            <div className="whyus-card" key={i}>
              <span className="whyus-icon">{r.icon}</span>
              <h3 className="whyus-title">{r.title}</h3>
              <p className="whyus-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { FaShieldAlt, FaTags, FaHeadset } from 'react-icons/fa'
import './Features.css'

const features = [
  { icon: <FaTags />, title: 'Prix Compétitifs', desc: 'Les meilleurs tarifs pour vos équipements industriels' },
  { icon: <FaShieldAlt />, title: 'Qualité Garantie', desc: 'Des produits sélectionnés aux normes les plus strictes' },
  { icon: <FaHeadset />, title: 'Expertise Technique', desc: 'Notre équipe vous conseille pour chaque besoin' },
]

export default function Features() {
  return (
    <section className="features">
      <div className="features-container">
        {features.map((f, i) => (
          <div className="feature-item" key={i}>
            <span className="feature-icon">{f.icon}</span>
            <div>
              <p className="feature-title">{f.title}</p>
              <p className="feature-desc">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

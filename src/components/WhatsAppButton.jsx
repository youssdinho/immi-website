import { FaWhatsapp } from 'react-icons/fa'
import './WhatsAppButton.css'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/212661695551"
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter sur WhatsApp"
    >
      <FaWhatsapp />
    </a>
  )
}

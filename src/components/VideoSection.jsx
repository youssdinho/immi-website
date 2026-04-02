import './VideoSection.css'

export default function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-container">

        <div className="video-text">
          <span className="video-tag">NOS PRODUITS EN ACTION</span>
          <h2>Découvrez la qualité<br />IMMI Négoce</h2>
          <p>
            Des coffrets ABS, goulottes et plinthes de haute qualité,
            conçus pour répondre aux exigences des professionnels
            de l'électricité industrielle au Maroc.
          </p>
          <a href="/produits" className="video-btn">Voir nos produits →</a>
        </div>

        <div className="video-frame-wrapper">
          <div className="video-phone-frame">
            <iframe
              src="https://www.youtube.com/embed/ByRLcqAQKrA?autoplay=0&rel=0&modestbranding=1"
              title="IMMI Négoce — Coffrets électriques"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

      </div>
    </section>
  )
}

import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, url = 'https://immi-negoce.ma' }) {
  const fullTitle = title ? `${title} | IMMI Négoce` : 'IMMI Négoce — Électricité Industrielle au Maroc'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph (Facebook, WhatsApp) */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://immi-negoce.ma/images/hero-bg.jpg" />
      <meta property="og:locale" content="fr_MA" />

      {/* Twitter/X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://immi-negoce.ma/images/hero-bg.jpg" />

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  )
}

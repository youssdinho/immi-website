// Génère public/sitemap.xml à partir du catalogue (lancé automatiquement avant `vite build`).
import { writeFileSync } from 'node:fs'
import { catalog } from '../src/data/products.js'

const BASE = 'https://immi-negoce.ma'

const pages = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/produits', priority: '0.9', changefreq: 'monthly' },
  ...Object.entries(catalog).flatMap(([slug, cat]) => [
    { path: `/produits/${slug}`, priority: '0.8', changefreq: 'monthly' },
    ...cat.items.map((item) => ({ path: `/produits/${slug}/${item.id}`, priority: '0.6', changefreq: 'monthly' })),
  ]),
  { path: '/a-propos', priority: '0.7', changefreq: 'yearly' },
  { path: '/contact', priority: '0.8', changefreq: 'yearly' },
  { path: '/devis', priority: '0.8', changefreq: 'yearly' },
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url>
    <loc>${BASE}${p.path}</loc>
    <priority>${p.priority}</priority>
    <changefreq>${p.changefreq}</changefreq>
  </url>`).join('\n')}
</urlset>
`

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml)
console.log(`sitemap.xml : ${pages.length} URL`)

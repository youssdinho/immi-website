import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { cloudflare } from '@cloudflare/vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Le fallback SPA est forcé ici et pas seulement dans wrangler.jsonc :
    // la commande de build Cloudflare supprime wrangler.jsonc avant `vite build`,
    // et sans ce réglage toutes les URL autres que / renvoient 404.
    cloudflare({
      config: { assets: { not_found_handling: 'single-page-application' } },
    }),
  ],
})

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Déploiement

Site en production : **https://immi-negoce.ma** (+ `www.immi-negoce.ma`)

- Hébergement : Cloudflare Workers (assets statiques, `not_found_handling: single-page-application`)
- Worker : `immi-website`
- Configuration : **`wrangler.jsonc`** — seul fichier de config wrangler du projet.
  Le plugin `@cloudflare/vite-plugin` le lit au build et génère `dist/wrangler.json`.
  (Un `wrangler.toml` redondant a été supprimé : wrangler donne la priorité au `.jsonc`,
  le `.toml` n'était jamais lu et ses routes n'ont jamais été appliquées.)
- **Les domaines personnalisés sont rattachés depuis le tableau de bord Cloudflare**,
  pas depuis ce dépôt. Ne pas ajouter de `routes` dans `wrangler.jsonc` sans vérifier
  d'abord la configuration du tableau de bord, au risque de casser le domaine.

### Publication : automatique via GitHub

Le dépôt `youssdinho/immi-website` est **connecté au Worker Cloudflare** (Workers Builds).

> ⚠️ **Tout `git push` sur `main` redéploie le site en production immédiatement.**
> Il n'y a pas d'environnement de préproduction. Toujours vérifier en local
> avec `npm run dev` avant de pousser.

`npm run deploy` (déploiement manuel via wrangler) n'est donc pas nécessaire
en temps normal, et demanderait un `npx wrangler login` sur le compte
Cloudflare `Immi.negoce@gmail.com`.

### Commandes

```bash
npm run dev      # serveur de développement (http://localhost:5173)
npm run build    # build de production dans dist/
npm run preview  # build + aperçu via wrangler en local
npm run deploy   # build + déploiement sur Cloudflare (nécessite `npx wrangler login`)
```

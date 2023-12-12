## 🕯️ smol-flame

A tiny template for minimalism on the edge. Maximum legibility, zero magic.

Combines:
- Hono
- Tailwind + PostCSS
- Bun (dev/build)
- Cloudflare Pages (deploy via github)

To use: 

```
$ git clone https://github.com/kpwebb/smol-flame
$ bun install
$ bun make
```

Edit  page template in `src/template.tsx` and edit routes and page content in `src/main.tsx`

To build (Cloudflare Pages support via Github integration):

```$ bun bake```

To deploy (WIP Cloudflare Workers support):

```$ bun shake```

WIP:
- client side script build process
- deployment directly to CF Workers or to non-CF servers.

Issues welcome in the form of pull requests.

## 🕯️ smol-flame

A tiny template for minimalism on the edge. Maximum legibility, zero magic.

Combines:
- Bun (dev/build)
- Hono
- Tailwind + PostCSS
- Cloudflare Pages (deploy via github)

To use: 

```
$ git clone https://github.com/kpwebb/smol-flame
$ bun install
$ bun make
```

Edit  page template in `src/template.tsx` and edit routes and page content in `src/main.tsx`. Files in `static/` are recursively copied into `dist/` build directory and served from `site.com/static`

To build (Cloudflare Pages support via Github integration):

```$ bun bake```

To deploy (WIP Cloudflare Workers support):

```$ bun shake```

WIP:
- client side script build process
- deployment directly to CF Workers or to non-CF servers.

Issues welcome in the form of pull requests.

await Bun.build({
    entrypoints: ['./src/server.tsx'],
    outdir: './dist',
    minify: true
  });
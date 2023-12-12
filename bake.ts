import fs from 'fs';

try {
await Bun.build({
    entrypoints: ['./src/server.tsx'],
    outdir: './dist',
    minify: true,
    format: "esm"
  });
}
catch {
  console.log("ERROR: production build failed");
}

try {
fs.mkdirSync('./dist/static', {recursive: true})
}
catch {
  console.log("WARN: copy static files failed");
}

// remove dev css before syncing files
try {
fs.rmSync('./static/main.css')
}
catch {
  console.log("WARN: copy static files failed");
}

// copy contents from ./static to ./dist/static
try {
fs.cpSync('./static', './dist/static', {recursive: true});
}
catch {
  console.log("WARN: copy static files failed");
}


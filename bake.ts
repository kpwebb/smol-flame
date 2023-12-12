import fs from 'fs';

// remove dev css before syncing files
try {
  fs.rmdirSync('./dist/', {recursive:true})
  }
catch {
  console.log("WARN: rm dist files failed");
}

try {
  fs.mkdirSync('./dist/static', {recursive: true})
}
catch {
  console.log("WARN: mkdir dist files failed");
}


try {
await Bun.build({
    entrypoints: ['./src/server_prod.ts'],
    outdir: './dist',
    //minify: true,
    format: "esm"
  });

  fs.renameSync('./dist/server_prod.js', './dist/_worker.js'); 
}
catch {
  console.log("ERROR: production build failed");
}


// remove dev css before syncing files
try {
  fs.rmSync('./static/main.css')
}
catch {
  console.log("WARN: rm static/main.css file failed");
}

// copy contents from ./static to ./dist/static
try {
  fs.cpSync('./static', './dist/static', {recursive: true});
}
catch {
  console.log("WARN: copy static files failed");
}

// copy favicon to root
try {
  fs.cpSync('./static/favicon.ico', './dist/favicon.ico');
}
  catch {
    console.log("WARN: copy favicon failed");
}
  




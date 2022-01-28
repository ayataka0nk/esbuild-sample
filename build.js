const { build } = require("esbuild");

const isDev = process.env.NODE_ENV === '"development"';

build({
  define: { "process.env.NODE_ENV": process.env.NODE_ENV },
  target: "es2015",
  platform: "browser",
  entryPoints: ["src/index.tsx"],
  outdir: "public",
  bundle: true,
  minify: !isDev,
  sourcemap: isDev,
  watch: {
    onRebuild(err, result) {
      err && console.log(JSON.stringify(err.errors));
      result && console.log(JSON.stringify(result.warnings));
    },
  },
})
  .then(() => {
    console.log("===========================================");
    console.log(`${new Date().toLocaleString()}: watching...`);
  })
  .catch((err) => console.log(`Error: ${JSON.stringify(err)}`));

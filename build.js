const esbuild = require('esbuild');
const { dtsPlugin } = require("esbuild-plugin-d.ts");

async function build(){

  // make lib js
  await esbuild.build({
    logLevel: 'info',
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify: true,
    format: 'cjs',
    sourcemap: 'external',
    outfile: `dist/esbuild/index.js`,
    plugins: [
      dtsPlugin()
    ]
  });
}


build().catch((e) => {
  console.error('cannot build', e);
  process.exit(1);
});


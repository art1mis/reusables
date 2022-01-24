import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import gzip from 'rollup-plugin-gzip';

const plugins = [
  postcss({
    plugins: [],
    minimize: true,
  }),
  babel({
    exclude: 'node_modules/**',
    presets: ['@babel/preset-react'],
  }),
  external(),
  terser(),
  resolve(),
  gzip(),
];

export default [
  {
    input: 'src/index.js',
    output: [
      {
        format: 'cjs',
        file: 'dist/index.js',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
      },
    ],
    plugins,
  },
];

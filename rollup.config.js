import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import gzip from "rollup-plugin-gzip";

export default {
  input: "./index.js",
  output: [
    {
      format: "cjs",
      file: "./dist/index.js",
    },
    {
      file: "./dist/index.mjs",
      format: "esm",
    },
  ],
  plugins: [
    resolve(),
    postcss({
      plugins: [],
      minimize: true,
    }),
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-react"],
    }),
    external(),
    terser(),
    gzip(),
  ],
};

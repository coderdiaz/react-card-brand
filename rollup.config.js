import TypescriptPlugin from "rollup-plugin-typescript2";
import NodeResolve from "rollup-plugin-node-resolve";
import CommonJs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";

const config = [
  // ESM build to be used with webpack/rollup.
  {
    input: "src/index.ts",
    output: {
      file: "dist/react-card-brand.esm.js",
      format: "esm",
    },
    external: [
      "react",
      "react-dom",
    ],
    plugins: [
      TypescriptPlugin(),
      NodeResolve(),
      CommonJs(),
    ],
  },
  // CommonJs
  {
    input: "src/index.ts",
    output: {
      file: "dist/react-card-brand.cjs.js",
      format: "cjs",
    },
    external: [
      "react",
      "react-dom",
    ],
    plugins: [
      TypescriptPlugin(),
      NodeResolve(),
      CommonJs(),
    ],
  },
  // Browser build
  {
    input: "src/index.ts",
    output: {
      file: "dist/react-card-brand.js",
      format: "iife",
      name: "ReactCardBrand",
      globals: {
        "react": "React",
      },
    },
    external: [
      "react",
      "react-dom",
    ],
    plugins: [
      TypescriptPlugin(),
      terser(),
      NodeResolve(),
      CommonJs(),
    ],
  },
];

export default config;

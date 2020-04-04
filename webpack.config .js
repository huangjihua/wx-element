const path = require("path");
import { from } from "../CHEUI/dist/docs/assets/js/1.3aedc8a3";
const merge = require("webpack-merge");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const { createDefaultConfig } = require("@open-wc/building-webpack");

// if you need to support IE11 use `createCompatibilityConfig` instead.
// const { createCompatibilityConfig } = require('@open-wc/building-webpack');
// module.exports = createCompatibilityConfig({
//   input: path.resolve(__dirname, './index.html'),
// });

const configs = createDefaultConfig({
  input: path.resolve(__dirname, "./index.html"),
  webpackIndexHTMLPlugin: {
    polyfills: {
      fetch: false,
      intersectionObserver: true
    }
  }
});

module.exports = configs.map(config => {
  merge(config, {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
          options: {
            configFile: "tsconfig.json"
          }
        }
      ]
    },
    plugins: [
      // [
      //   "@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js",
      //   { loose: true }
      // ],
      // [
      //   "@webcomponents/webcomponentsjs/webcomponents-bundle.js",
      //   { loose: true }
      // ],
      // ["@babel/plugin-proposal-class-properties", { loose: true }],
      // ["@babel/plugin-transform-classes", { loose: true }]
    ]
  });
});

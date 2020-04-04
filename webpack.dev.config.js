const path = require("path");
const dist = path.resolve(__dirname, "dist");
// const merge = require("webpack-merge");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHardDiskPlugin = require("html-webpack-harddisk-plugin");
const Buildding = require("@open-wc/building-webpack");
module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: dist
  },
  devtool: "inline-source-map",
  mode: "development",
  watch: true,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          configFile: "tsconfig.json"
        }
      },
      {
        test: /\.css|\.s(c|a)ss$/,
        use: [
          {
            loader: "lit-scss-loader",
            options: {
              minify: true // defaults to false
            }
          },
          "extract-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.svg$/,
        include: [path.resolve(__dirname, "../static/icons")],
        loader: "svg-sprite-loader",
        options: {
          symbolId: "icon-[name]"
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              outputPath: "dist/static/images|svg/",
              publicPath: "dist/static/images|svg/"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    allowedHosts: ["wx.com"],
    contentBase: dist,
    compress: true,
    historyApiFallback: true, // 不跳转
    inline: true, // 实时刷新
    port: 3001
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "LitElement Typescript Example",
      filename: "index.html",
      template: "src/index.html",
      alwaysWriteToDisk: true,
      minify: false
    }),
    new HtmlWebpackHardDiskPlugin({
      outputPath: dist
    }),
    new CopyWebpackPlugin([
      { from: "static", to: path.join(__dirname, "dist") },
      {
        from: path.join(__dirname, "dist/bundle.js"),
        to: path.join(__dirname, "src/docs/")
      },
      {
        from: path.join(__dirname, "static/"),
        to: path.join(__dirname, "src/docs/")
      }
    ])
  ]
};

const PATH = require("path")
const CopyWebpackPlugin = require('copy-webpack-plugin')

const buildDirectory = PATH.resolve(__dirname, './build')

module.exports = {
  entry: {
    'script/nav.bundle.js': PATH.resolve(__dirname, './src/nav/App.tsx'),
    'script/detail.bundle.js': PATH.resolve(__dirname, './src/detail/App.tsx'),
  },
  output: {
    path: buildDirectory,
    filename: '[name]'
  },
  module: {
    rules: [
      {
        test: /\.ts.*?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
    ]
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: PATH.resolve( __dirname, './src/nav/index.html' ),
        to: buildDirectory
      }
    ])
  ]
}
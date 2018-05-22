const PATH = require("path")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const configShared = require('./webpack.config.shared.js')

const {module: sharedModule, resolve: sharedResolve} = configShared


module.exports = {
  entry: {
    'detail/script/detail.bundle.js': PATH.resolve(__dirname, './src/detail/app.tsx'),
  },
  output: {
    path: PATH.resolve(__dirname, './build'),
    filename: '[name]'
  },
  module: sharedModule,
  resolve: sharedResolve,
  plugins: [
    new CopyWebpackPlugin([
      {
        from: PATH.resolve(__dirname, './build/nav/script/nav.bundle.js'),
        to: PATH.resolve(__dirname, './build/detail/script/nav.bundle.js'),
      },
      {
        from: PATH.resolve( __dirname, './src/nav/index.html' ),
        to: PATH.resolve( __dirname, './build/detail/index.html' ),
      },
      {
        from: PATH.resolve(__dirname, './src/shared/static/category'),
        to: PATH.resolve(__dirname, './build/detail/category'),
      },
      {
        from: PATH.resolve(__dirname, './src/shared/static/tag'),
        to: PATH.resolve(__dirname, './build/detail/tag'),
      },
      {
        from: PATH.resolve(__dirname, './src/shared/static/2018'),
        to: PATH.resolve(__dirname, './build/detail/2018'),
      },
      {
        from: PATH.resolve(__dirname, './src/shared/static/category.json'),
        to: PATH.resolve(__dirname, './build/detail/category.json'),
      },
      {
        from: PATH.resolve(__dirname, './src/shared/static/tag.json'),
        to: PATH.resolve(__dirname, './build/detail/tag.json'),
      },
      {
        from: PATH.resolve(__dirname, './src/shared/static/newest.json'),
        to: PATH.resolve(__dirname, './build/detail/newest.json'),
      },
    ])
  ]
}
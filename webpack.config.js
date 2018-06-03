const PATH = require("path")
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const buildDirectory = PATH.resolve(__dirname, './build')

const webpack = require('webpack')

module.exports = {
  entry: {
    'script/nav.bundle.js': PATH.resolve(__dirname, './src/nav/entry.tsx'),
    'script/detail.bundle.js': PATH.resolve(__dirname, './src/detail/entry.tsx'),
  },
  output: {
    path: buildDirectory,
    filename: '[name]'
  },
  devServer: {
    contentBase: buildDirectory,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.ts*?/,
        use: "ts-loader",
        // include: __dirname
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js'
    ],
  },
  devtool: 'source-map',
  plugins: [
    new CopyWebpackPlugin([
      {
        from: PATH.resolve(__dirname, './src/nav/index.html'),
        to: buildDirectory
      },
    ]),

    // new HtmlWebpackPlugin({
    //   template: PATH.resolve( __dirname, 'src/nav/index.html' )
    // }),
    
    new webpack.HotModuleReplacementPlugin()
  ]
}
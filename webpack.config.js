const PATH = require("path")
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const buildDirectory = PATH.resolve(__dirname, './build')

const webpack = require('webpack')

module.exports = {
  entry: {
    'scripts/nav.bundle.js': [  "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000", PATH.resolve(__dirname, './src/nav/entry.tsx')],
    'scripts/detail.bundle.js': [ "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000", PATH.resolve(__dirname, './src/detail/entry.tsx')  ],
  },
  output: {
    path: buildDirectory,
    filename: '[name]',
    // publicPath: buildDirectory
  },
  devServer: {
    contentBase: buildDirectory,
    hot: true,
    openPage: 'All/staticBlogs/blogs/Test/blog.html'
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
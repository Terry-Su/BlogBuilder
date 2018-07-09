const PATH = require( "path" )
const CopyWebpackPlugin = require( "copy-webpack-plugin" )
const HtmlWebpackPlugin = require( "html-webpack-plugin" )
const CleanWebpackPlugin = require( "clean-webpack-plugin" )

const buildDirectory = PATH.resolve( __dirname, "./build" )

const webpack = require( "webpack" )

module.exports = ( env, argv ) => {
  const isProduction = argv.mode === "production"
  return {
    entry: {
      "scripts/nav.bundle.js": [
        PATH.resolve( __dirname, "./src/nav/entry.tsx" )
      ].concat(
        isProduction ?
          [] :
          [ "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000" ]
      ),
      "scripts/detail.bundle.js": [
        PATH.resolve( __dirname, "./src/detail/entry.tsx" )
      ].concat(
        isProduction ?
          [] :
          [ "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000" ]
      )
    },
    output: {
      path    : buildDirectory,
      filename: "[name]"
      // publicPath: buildDirectory
    },
    // devServer: {
    //   contentBase: buildDirectory,
    //   hot: true,
    //   openPage: 'All/staticBlogs/blogs/Test/blog.html'
    // },
    module: {
      rules: [
        {
          test   : /\.ts*?/,
          use    : "ts-loader",
          // include: __dirname
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use : [ "style-loader", "css-loader" ]
        },
        {
          test: /\.scss$/,
          use : [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS
          ]
        },
        { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=10000000' }
      ]
    },
    resolve: {
      extensions: [ ".ts", ".tsx", ".js" ]
    },
    devtool: isProduction ? false : "source-map",
    plugins: [].concat(
      isProduction ?
        [ new CleanWebpackPlugin( [ "build" ] ) ] :
        [ new webpack.HotModuleReplacementPlugin() ]
    )
  }
}

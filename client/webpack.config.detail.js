const PATH = require( "path" )
const CopyWebpackPlugin = require( "copy-webpack-plugin" )
const configShared = require( './webpack.config.shared.js' )

const { module: sharedModule, resolve: sharedResolve } = configShared


module.exports = {
  entry: {
    'detail/script/detail.bundle.js': PATH.resolve( __dirname, './src/detail/app.tsx' ),
  },
  output: {
    path: PATH.resolve( __dirname, './build' ),
    filename: '[name]'
  },
  module: sharedModule,
  resolve: sharedResolve,
  plugins: [
    new CopyWebpackPlugin( [
      {
        from: PATH.resolve( __dirname, './src/detail/index.html' ),
        to: PATH.resolve( __dirname, './build/detail/index.html' ),
      },
    ] )
  ]
}
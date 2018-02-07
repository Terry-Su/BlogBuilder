const PATH = require( "path" )
const CopyWebpackPlugin = require( "copy-webpack-plugin" )
const configShared = require( './webpack.config.shared.js' )

const { module: sharedModule } = configShared


module.exports = {
  entry: {
    'nav/script/nav.bundle.js': PATH.resolve( __dirname, './src/nav/app.tsx' ),
  },
  output: {
    path: PATH.resolve( __dirname, './build' ),
    filename: '[name]'
  },
  module: sharedModule,
  plugins: [
    new CopyWebpackPlugin( [
      {
        from: PATH.resolve( __dirname, './src/nav/index.html' ),
        to: PATH.resolve( __dirname, './build/nav/index.html' ),
      },
    ] )
  ]
}
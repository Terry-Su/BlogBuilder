const PATH = require( "path" )
const CopyWebpackPlugin = require( "copy-webpack-plugin" )
const configShared = require( './webpack.config.shared.js' )

const { module: sharedModule, resolve: sharedResolve } = configShared


module.exports = {
  entry: {
    'nav/script/nav.bundle.js': PATH.resolve( __dirname, './src/nav/app.tsx' ),
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
        from: PATH.resolve( __dirname, './build/detail/script/detail.bundle.js' ),
        to: PATH.resolve( __dirname, './build/nav/script/detail.bundle.js' ),
      },
      {
        from: PATH.resolve( __dirname, './src/nav/index.html' ),
        to: PATH.resolve( __dirname, './build/nav/index.html' ),
      },
      {
        from: PATH.resolve( __dirname, './src/shared/static/category' ),
        to: PATH.resolve( __dirname, './build/nav/category' ),
      },
      {
        from: PATH.resolve( __dirname, './src/shared/static/tag' ),
        to: PATH.resolve( __dirname, './build/nav/tag' ),
      },
      {
        from: PATH.resolve( __dirname, './src/shared/static/2018' ),
        to: PATH.resolve( __dirname, './build/nav/2018' ),
      },
      {
        from: PATH.resolve( __dirname, './src/shared/static/category.json' ),
        to: PATH.resolve( __dirname, './build/nav/category.json' ),
      },
      {
        from: PATH.resolve( __dirname, './src/shared/static/tag.json' ),
        to: PATH.resolve( __dirname, './build/nav/tag.json' ),
      },
      {
        from: PATH.resolve( __dirname, './src/shared/static/newest.json' ),
        to: PATH.resolve( __dirname, './build/nav/newest.json' ),
      },
      
    ] )
  ]
}
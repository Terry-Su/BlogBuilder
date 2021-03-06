const express = require( 'express' )
const PATH = require( 'path' )
const webpack = require( 'webpack' )
const webpackConfig = require( './webpack.config.js' )
const buildDirectory = PATH.resolve(__dirname, './build')

const combinedWebpackConfig = {
  ...webpackConfig,
  mode: "development",
}

const app = express()
const compiler = webpack( combinedWebpackConfig )

const port = 5000


// webpck hmr
app.use(
  require( 'webpack-dev-middleware' )( compiler, {
    noInfo: true,
    publicPath: combinedWebpackConfig.output.publicPath
  } )
)

app.use( require( 'webpack-hot-middleware' )( compiler ) )

app.use( express.static( buildDirectory ) )

app.get( "/", ( req, res ) => {
  res.sendFile( PATH.resolve( __dirname, 'build/index.html' ) )
} )

app.get( "/detail", ( req, res ) => {
  res.sendFile( PATH.resolve( __dirname, 'build/All/bar/Test1/blog.html' ) )
} )

app.listen( port, () => { console.log( `listening on the port ${ port }` ) } )
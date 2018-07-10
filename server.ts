const express = require( 'express' )
const PATH = require( 'path' )
const webpack = require( 'webpack' )
const webpackConfig = require( './webpack.config.js' )
const root = PATH.resolve(__dirname, './')
const buildDirectory = PATH.resolve(__dirname, './build')

const combinedWebpackConfig = {
  ...webpackConfig( {},{} ),
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
app.use( express.static( root ) )

app.get( "/", ( req, res ) => {
  res.sendFile( PATH.resolve( __dirname, 'build/index.html' ) )
} )

app.get( "/detail", ( req, res ) => {
  res.sendFile( PATH.resolve( __dirname, 'build/blogsOutputExceptNavHtml/details/test.html' ) )
} )

// app.get( "/props.json", ( req, res ) => {
//   res.sendFile( PATH.resolve( __dirname, 'build/All/Technology/__Geometry Algorithms in Javascript/props.json' ) )
// } )

app.listen( port, () => { console.log( `listening on the port ${ port }` ) } )
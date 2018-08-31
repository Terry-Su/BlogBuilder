import setGlobalVariable from "./setGlobalVariable"
setGlobalVariable()

const express = require( "express" )
const PATH = require( "path" )
const webpack = require( "webpack" )
const webpackConfig = require( "./config/webpack.config.ts" )
const buildDirectory = PATH.resolve( __dirname, "../build" )
import { PORT } from "./../config"
import { __DEV__ } from "./global"

const compiler = webpack( webpackConfig )

if ( !__DEV__ ) {
  compiler.run( ( err, stats ) => {
    if ( err ) {
      console.error( err )
      return
    }

    console.log(
      stats.toString( {
        chunks: false,
        colors: true
      } )
    )
  } )
}

if ( __DEV__ ) {
  const app = express()

  // webpck hmr
  app.use(
    require( "webpack-dev-middleware" )( compiler, {
      noInfo    : true,
      publicPath: webpackConfig.output.publicPath
    } )
  )

  app.use( require( "webpack-hot-middleware" )( compiler ) )

  app.use( express.static( buildDirectory ) )

  app.get( "/", ( req, res ) => {
    res.sendFile( PATH.resolve( buildDirectory, "index.html" ) )
  } )

  app.get( "/detail", ( req, res ) => {
    res.sendFile(
      PATH.resolve( buildDirectory, "blogsOutputExceptNavHtml/details/test.html" )
    )
  } )

  // app.get( "/props.json", ( req, res ) => {
  //   res.sendFile( PATH.resolve( __dirname, 'build/All/Technology/__Geometry Algorithms in Javascript/props.json' ) )
  // } )

  app.listen( PORT, () => {
    console.log( `listening on the port ${PORT}` )
  } )
}

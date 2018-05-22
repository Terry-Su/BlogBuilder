const PATH = require( "path" )
const build = require( "../main/index" )
const BS = require( 'browser-sync' )
const gulp = require( 'gulp' )

const origin = PATH.resolve( __dirname, "./static/blogs" )
const output = PATH.resolve( __dirname, "./build" )

const serverConfig = {
  server: {
    baseDir: output
  },
  files: [ `${output}/**` ],
  open : true,
  port : 8000
}


buildToOutput()

gulp.watch( `${ origin }/**`, buildToOutput )
		
BS.init( serverConfig )

function buildToOutput() {
  console.log( 'Built' )
  build( origin, output )
}

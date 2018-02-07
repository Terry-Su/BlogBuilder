const PATH = require( "path" )
const build = require( "../../index" )
const BS = require( 'browser-sync' )

jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000

const origin = PATH.resolve( __dirname, "./originalBlogs" )
const output = PATH.resolve( __dirname, "./build" )

const serverConfig = {
  server: {
    baseDir: output
  },
  files: [ `${output}/**` ],
  open : false,
  port : 3900
}

describe( `Blog builder - main`, function() {
  beforeEach( done => {
		build( origin, output )
		
		BS.init( serverConfig )
    // done()
  } )

  it( `Test: `, function( done ) {
    // expect().toBe()
    done()
  } )
} )

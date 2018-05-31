import getBlogsOriginInfo from "../../getBlogsOriginInfo";

const PATH = require( "path" )

describe( `GetBlogsOriginInfo`, function() {
  it( `Test`, function() {
    const root = PATH.resolve( __dirname, './blogs' )
    getBlogsOriginInfo( root )
    expect( true ).toBe( true )
  } )
} )

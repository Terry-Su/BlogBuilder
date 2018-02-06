import main from "../../index";

const PATH = require( "path" )

describe( `GetBlogsOriginInfo`, function() {
  it( `Test`, function() {
    const root = PATH.resolve( __dirname, './blogs' )
    const output = PATH.resolve( __dirname, './output' )
    main( root, output )
    expect( true ).toBe( true )
  } )
} )

const PATH = require( "path" )

const isDeveloping = true

module.exports = {
  clientNavScript: isDeveloping ?
    PATH.resolve( __dirname, "../client/build/nav/script/nav.bundle.js" ):
    PATH.resolve( __dirname, "../client/publish/nav.bundle.js" ),
  clientDetailScript: isDeveloping ?
    PATH.resolve( __dirname, "../client/build/detail/script/detail.bundle.js" ) :
    PATH.resolve( __dirname, "../client/publish/detail.bundle.js" ),
  homeHtml: PATH.resolve( __dirname, "../client/publish/home.html" )
}

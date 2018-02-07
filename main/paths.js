const PATH = require( 'path' )

module.exports = {
  clientNavScript: PATH.resolve( __dirname, '../client/publish/nav.bundle.js' ),
  clientDetailScript: PATH.resolve( __dirname, '../client/publish/detail.bundle.js' ),
  homeHtml: PATH.resolve( __dirname, '../client/publish/home.html' )
}
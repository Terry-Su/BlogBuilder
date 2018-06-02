const PATH = require( "path" )

module.exports = {
  clientNavScriptDirectory: PATH.resolve( __dirname, "../client/build/script" ),

  clientHomeHtmlPath: PATH.resolve( __dirname, "../client/build/index.html" ),

  publishNavScriptDirectory: PATH.resolve( __dirname, "../client/publish/script" ),

  publishHomeHtmlPath: PATH.resolve( __dirname, "../client/publish/index.html" ),

}

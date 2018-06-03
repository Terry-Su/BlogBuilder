const PATH = require( "path" )

module.exports = {
  clientNavScriptDirectory: PATH.resolve( __dirname, "../build/scripts" ),

  clientHomeHtmlPath: PATH.resolve( __dirname, "../build/index.html" ),

  publishNavScriptDirectory: PATH.resolve( __dirname, "../publish/scripts" ),

  publishHomeHtmlPath: PATH.resolve( __dirname, "../publish/index.html" ),

}

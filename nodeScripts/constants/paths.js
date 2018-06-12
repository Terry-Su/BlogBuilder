const PATH = require( "path" )

module.exports = {
  CLIENT_NAV_SCRIPT_DIRECTORY: PATH.resolve( __dirname, "../../build/scripts" ),

  PUBLISH_NAV_SCRIPT_DIRECTORY : PATH.resolve( __dirname, "../../publish/scripts" ),


  CLIENT_HOME_HTML_PATH: PATH.resolve( __dirname, "../static/nav.html" ),


  PUBLISH_HOME_HTML_PATH : PATH.resolve( __dirname, "../../publish/index.html" ),

}

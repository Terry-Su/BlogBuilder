const PATH = require( 'path' )
const FS = require( 'fs-extra' )
const { CLIENT_NAV_SCRIPT_DIRECTORY, CLIENT_HOME_HTML_PATH, PUBLISH_NAV_SCRIPT_DIRECTORY, PUBLISH_HOME_HTML_PATH } = require( './constants/paths' )

const publishDirectory = PATH.resolve( __dirname, '../publish' )



FS.mkdirpSync( publishDirectory )
FS.copyFileSync( CLIENT_HOME_HTML_PATH, PUBLISH_HOME_HTML_PATH )
FS.copySync( CLIENT_NAV_SCRIPT_DIRECTORY, PUBLISH_NAV_SCRIPT_DIRECTORY )


const PATH = require( 'path' )
const FS = require( 'fs-extra' )
const { clientNavScriptDirectory, clientHomeHtmlPath, publishNavScriptDirectory, publishHomeHtmlPath } = require( './utils/paths' )

const publishDirectory = PATH.resolve( __dirname, 'publish' )



FS.mkdirpSync( publishDirectory )
FS.copyFileSync( clientHomeHtmlPath, publishHomeHtmlPath )
FS.copySync( clientNavScriptDirectory, publishNavScriptDirectory )


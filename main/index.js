const { default: build } = require( '../server/build/index' )
const { publishNavScriptDirectory, publishHomeHtmlPath } = require( './paths' )
const FS = require( 'fs-extra' )

/**
 * Build blog
 * @param {*} root Original blogs' source path 
 * @param {*} output Output path 
 */
module.exports = function ( src, output ) {
  build( src, output )
  buildClientNavHtml( output )
  buildClientScripts( output )
}

function buildClientNavHtml( output ) {
  FS.copyFileSync( publishHomeHtmlPath, `${ output }/index.html` )
}

function buildClientScripts( output ) {
  FS.copySync( publishNavScriptDirectory, `${ output }/script` )
}
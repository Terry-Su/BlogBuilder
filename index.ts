const { default: buildBlogContents } = require( "../TSBlogContentsBuilder/build/index" )
const { PUBLISH_NAV_SCRIPT_DIRECTORY, PUBLISH_HOME_HTML_PATH } = require( './nodeScripts/constants/paths' )
const FS = require( 'fs-extra' )

/**
 * Build blog
 * @param {*} root Original blogs' source path 
 * @param {*} output Output path 
 */
module.exports = function( src, output, config = {} ) {
  const combinedConfig = {
    ...config
  }
  buildBlogContents( src, output, combinedConfig )
  buildNavHtml( output )
// buildScripts(output)
}

function buildNavHtml( output ) {
  FS.copyFileSync( PUBLISH_HOME_HTML_PATH, `${ output }/index.html` )
}

function buildScripts( output ) {
  FS.copySync( PUBLISH_NAV_SCRIPT_DIRECTORY, `${ output }/scripts` )
}
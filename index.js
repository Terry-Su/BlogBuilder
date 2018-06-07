const {default: buildBlogContents} = require("../BlogContentsBuilder/build/index")
const {publishNavScriptDirectory, publishHomeHtmlPath} = require('./nodeScripts/utils/paths')
const FS = require('fs-extra')
const initialConfig = require( './nodeScripts/shared/initialConfig' )

/**
 * Build blog
 * @param {*} root Original blogs' source path 
 * @param {*} output Output path 
 */
module.exports = function(src, output, config=initialConfig) {
  const combinedConfig = {
    ...initialConfig,
    ...config
  }
  buildBlogContents(src, output, combinedConfig)
  buildNavHtml(output)
  buildScripts(output)
}

function buildNavHtml(output) {
  FS.copyFileSync(publishHomeHtmlPath, `${ output }/index.html`)
}

function buildScripts(output) {
  FS.copySync(publishNavScriptDirectory, `${ output }/scripts`)
}
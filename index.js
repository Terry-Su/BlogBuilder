const {default: buildBlogContents} = require("../BlogContentsBuilder/build/index")
const {publishNavScriptDirectory, publishHomeHtmlPath} = require('./nodeScripts/utils/paths')
const FS = require('fs-extra')

/**
 * Build blog
 * @param {*} root Original blogs' source path 
 * @param {*} output Output path 
 */
module.exports = function(src, output, config={}) {
  buildBlogContents(src, output, config)
  buildNavHtml(output)
  buildScripts(output)
}

function buildNavHtml(output) {
  FS.copyFileSync(publishHomeHtmlPath, `${ output }/index.html`)
}

function buildScripts(output) {
  FS.copySync(publishNavScriptDirectory, `${ output }/scripts`)
}
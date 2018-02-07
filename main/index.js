const { default: build } = require( '../server/build/index' )


/**
 * Build blog
 * @param {*} root Original blogs' source path 
 * @param {*} output Output path 
 */
module.exports = function ( src, output ) {
  build( src, output )
}
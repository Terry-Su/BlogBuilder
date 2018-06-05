const files = require.context('.', false, /\.ts$/)

const models = { }
files.keys().forEach( (key) => {
 if ( key === './index.ts' ) return
 models[ key.replace( /(\.\/|\.ts)/g, '' ) ] = files( key ).default
} )

export default models
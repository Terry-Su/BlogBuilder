const PATH = require("path")
const { default: build } = require("../server/build/index")
const BS = require('browser-sync')
const gulp = require('gulp')

const { asyncDelete } = require( '../main/utils' )

const origin = PATH.resolve(__dirname, "./static/blogs")
const output = PATH.resolve(__dirname, "./build")

const serverConfig = {
  server: {
    baseDir: output
  },
  files: [`${output}/**`],
  open: true,
  port: 8000
}


buildToOutput()
gulp.watch(`${ origin }/**`, buildToOutput)

BS.init(serverConfig)

function buildToOutput() {
  build(origin, output)
  // asyncDelete(output).then(() => {
  //   console.log('Built')
    
  // })
}

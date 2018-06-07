const PATH = require("path")
const {default: buildBlogContents} = require("../../BlogContentsBuilder/build/index")
const gulp = require('gulp')
const initialConfig = require( './shared/initialConfig' ) 

const origin = PATH.resolve(__dirname, "../src/staticBlogs")
const output = PATH.resolve(__dirname, "../build")

build()
gulp.watch(`${ origin }/**`, build)


function build() {
  buildBlogContents(origin, output, {
    ...initialConfig,
    textLogo: 'Custom',
    slogan: 'Custom slogan'
  })
}

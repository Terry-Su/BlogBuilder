import { KATEX_CSS_URL, KATEX_JS_URL } from "../../Terry-Su.github.io/scripts/constants/urls";

const PATH = require("path")
const {default: buildBlogContents} = require("../../BlogContentsBuilder/build/index")
const gulp = require('gulp')

const origin = PATH.resolve(__dirname, "../src/staticBlogs")
const output = PATH.resolve(__dirname, "../build")

build()
gulp.watch(`${ origin }/**`, build)


function build() {
  const textLogo =  'Custom'
  const slogan = 'Custom slogan'
  buildBlogContents(origin, output, {
    nameOfDirectoryPlacingDataExceptNavHtml: 'blogsOutputExceptNavHtml',
    // lang: 'cn',
    lang: 'cn',


    nav: {
      textLogo,
      slogan,
      scripts: [
        '<script src="/scripts/nav.bundle.js"></script>'
      ],
      symbolUpdatingLocalstorage: new Date(),
      
    },
    
    detail: {
      textLogo,
      slogan,
      scripts: [
        '<script src="/scripts/detail.bundle.js"></script>'
      ],
      commentRoot: 'https://api.github.com/repos/terry-su/tsblogcomments-en/issues/',
      commentPageRoot: 'https://github.com/Terry-Su/TSBlogComments-En/issues/',
      home: '/',
      mathCssUrl: KATEX_CSS_URL,
      mathJsUrl: KATEX_JS_URL,
    },

    
    
  })

  console.log('built')
}

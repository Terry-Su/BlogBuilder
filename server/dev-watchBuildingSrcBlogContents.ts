import { CN, EN } from "../../Terry-Su.github.io/scripts/constants/names";
import { GET_SHARED_NAV, GET_SHARED_DETAIL } from "../../Terry-Su.github.io/scripts/shared";

const PATH = require( "path" )
const {
  default: buildBlogContents
} = require( "../../BlogContentsBuilder/build/index" )
const gulp = require( "gulp" )

const origin = PATH.resolve( __dirname, "../src/staticBlogs" )
const output = PATH.resolve( __dirname, "../build" )

build()
gulp.watch( `${origin}/**`, build )

function build() {
  // const lang = CN
  const lang = EN
  const textLogo = "Custom"
  const slogan = "Custom slogan"
  buildBlogContents( origin, output, {
    nameOfDirectoryPlacingDataExceptNavHtml: "blogsOutputExceptNavHtml",
    lang,
    nav: {
      ...GET_SHARED_NAV( lang ),
      textLogo,
      slogan,
      scripts                   : [ '<script src="/scripts/nav.bundle.js"></script>' ],
    },
    detail: {
      ...GET_SHARED_DETAIL( lang ),
      textLogo,
      slogan,
      scripts    : [ '<script src="/scripts/detail.bundle.js"></script>' ],
    }
  } )

  console.log( "built" )
}

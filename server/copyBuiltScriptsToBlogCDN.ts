import * as PATH from "path"
import {
  OUTPUT_NAV_FILE_PATH,
  BLOG_CDN_SCRIPTS_NAV_FILE_PATH,
  OUTPUT_DETAIL_FILE_PATH,
  BLOG_CDN_SCRIPTS_DETAIL_FILE_PATH
} from "./constants/paths"
const FS = require( "fs-extra" )

const SOURCE = PATH.resolve( __dirname, "../build/scripts" )
const TARGET = PATH.resolve( __dirname, "../../BlogCDN/scripts" )

FS.mkdirpSync( TARGET )
FS.copySync( SOURCE, TARGET )

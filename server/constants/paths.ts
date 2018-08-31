import * as PATH from 'path'
import { OUTPUT_NAV_FILE_NAME, OUTPUT_DETAIL_FILE_NAME } from './names';
const { resolve } = PATH

export const ROOT = resolve( __dirname, '../../' )
export const OUTPUT_NAV_FILE_PATH = resolve( ROOT, `build/scripts/${ OUTPUT_NAV_FILE_NAME} ` )
export const OUTPUT_DETAIL_FILE_PATH = resolve( ROOT, `build/scripts/${ OUTPUT_DETAIL_FILE_NAME }` )

export const BLOG_CDN = resolve( ROOT, '../BlogCDN'  )
export const BLOG_CDN_SCRIPTS = resolve( BLOG_CDN, 'scripts'  )
export const BLOG_CDN_SCRIPTS_NAV_FILE_PATH = resolve( BLOG_CDN_SCRIPTS, OUTPUT_NAV_FILE_NAME  )
export const BLOG_CDN_SCRIPTS_DETAIL_FILE_PATH = resolve( BLOG_CDN_SCRIPTS, OUTPUT_DETAIL_FILE_NAME  )
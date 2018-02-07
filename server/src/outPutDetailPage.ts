import * as PATH from 'path'
import * as marked from 'marked'
import readFileText from './util/readFileText';
import * as FS from 'fs-extra';
import { BlogOriginInfo, Path } from './interface/index';
import pathSrcToBuild from './util/pathSrcToBuild';
import { EXT_HTML } from './store/constant';
import pathReplaceExt from './util/pathReplaceExt';
import checkIfSameHtml from './checkIfSameHtml'

const { outputFileSync } = FS

export default function ( output: Path ) {
  return function ( blogOriginInfo: BlogOriginInfo ) {
    const {
      blogPath
    }: {
      blogPath: Path
    } = blogOriginInfo

    const markdownText = readFileText( blogPath )
    const html: string = marked( markdownText )

    const outputBlogPath: Path = getOutputBlogPath( blogPath, output ) 

    /**
     * Output html only when html changes
     */
    if ( !checkIfSameHtml( html,outputBlogPath ) ) {
      outputFileSync( outputBlogPath, html )
    }

    function getOutputBlogPath( blogPath: Path, output: Path ): Path {
      const src = PATH.resolve( blogPath, '../../../' )
      const markdownPath: Path = pathSrcToBuild( blogPath, src, output )
      const htmlPath = pathReplaceExt( markdownPath, EXT_HTML )
      return htmlPath
    }
}
}
 


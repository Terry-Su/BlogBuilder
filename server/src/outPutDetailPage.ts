import * as PATH from 'path'
import * as marked from 'marked'
import readFileText from './util/readFileText';
import * as FS from 'fs-extra';
import { BlogOriginInfo, Path } from './interface/index';
import pathSrcToBuild from './util/pathSrcToBuild';
import { EXT_HTML } from './store/constant';
import pathReplaceExt from './util/pathReplaceExt';

const { outputFileSync } = FS

export default function ( blogOriginInfo: BlogOriginInfo, output: Path ) {
    const {
      blogPath
    }: {
      blogPath: Path
    } = blogOriginInfo

    const markdownText = readFileText( blogPath )
    const html: string = marked( markdownText )

    const outputBlogPath: Path = getOutputBlogPath( blogPath, output ) 

    outputFileSync( outputBlogPath, html )

    function getOutputBlogPath( blogPath: Path, output: Path ): Path {
      const src = PATH.resolve( blogPath, '../../../' )
      const markdownPath: Path = pathSrcToBuild( blogPath, src, output )
      const htmlPath = pathReplaceExt( markdownPath, EXT_HTML )
      return htmlPath
    }
}
 


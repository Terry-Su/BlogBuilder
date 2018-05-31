import { Path } from './interface/index';
import { getOutputHomeHtmlPath } from './store/index';
import copyFile from './util/copyFile';
const paths = require( "../../main/paths" )


export default function( output: Path ) {
  const { homeHtml }: { homeHtml: string } =paths

    const outputPath = getOutputHomeHtmlPath( output )
    copyFile( homeHtml, outputPath )
}

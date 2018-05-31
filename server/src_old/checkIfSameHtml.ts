import { Path } from "./interface/index"
import existFile from "./util/existFile";
import readFileText from "./util/readFileText";

/**
 * When updating html, check if output path isn't empty
 * or the content of output path is same with
 * the content of html ready to update
 */
export default function( currentContent: string, outputPath: Path ): boolean {
  let res = false
  if ( existFile( outputPath ) ) {
    const originalContent: string = readFileText( outputPath )
    res = originalContent === currentContent
  }
  return res
}


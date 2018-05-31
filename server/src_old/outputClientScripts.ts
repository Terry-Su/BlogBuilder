import { Path } from "./interface/index"
import * as PATH from "path"
import { getOutputScriptPath } from "./store/index"
import { copyFileSync, outputFileSync } from "fs-extra"
import readFileText from "./util/readFileText";
import copyFile from "./util/copyFile";
const paths = require( "../../main/paths" )

export default function( output: Path ) {
  const {
    clientNavScript,
    clientDetailScript
  }: { clientNavScript: Path; clientDetailScript: Path } = paths

  const navBaseName = PATH.basename( clientNavScript )
  const outputNavPath = getOutputScriptPath( navBaseName, output )
  copyFile( clientNavScript, outputNavPath )
  

  const detailBaseName = PATH.basename( clientDetailScript )
  const outputDetailPath = getOutputScriptPath( detailBaseName, output )
  copyFile( clientDetailScript, outputDetailPath )
}

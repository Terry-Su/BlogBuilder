import { Path } from '../interface/index';
import existFile from './existFile';
import readFileText from './readFileText';
import { outputFile } from '_@types_fs-extra@5.0.0@@types/fs-extra';
import { outputFileSync } from 'fs-extra';


export default function( path: Path, output: Path ) {
  if ( existFile( path ) ) {
    const content: string = readFileText( path )
    outputFileSync( output, content )
  }
}
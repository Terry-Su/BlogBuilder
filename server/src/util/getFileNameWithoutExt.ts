import { Path } from '../interface/index';
import * as PATH from 'path';
import existFile from './existFile';


export default function ( path: Path ) {
  const baseName = PATH.basename( path )
  let res = baseName

  if ( existFile( path ) ) {
    const ext = PATH.extname( path )
    /**
     * Regexp
     */
    const r: RegExp = new RegExp( `${ext}$` ) 

    res = baseName.replace( r, '' )
  }

  return res
}
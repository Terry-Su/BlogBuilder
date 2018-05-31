import * as FS from 'fs-extra'
import existFile from './existFile';

export default function ( path: string ) {
  let res: string = ''

  if ( existFile( path ) ) {
    res = FS.readFileSync( path, { encoding: 'utf8' } )
  }

  return res
}
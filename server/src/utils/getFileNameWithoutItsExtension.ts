import * as PATH from 'path';


export default function ( path: Path ) {
  return PATH.basename( path, PATH.extname( path ) )
}
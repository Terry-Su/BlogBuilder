import * as PATH from "path"

export default function( path: string, src: string, build: string ) {
  const relative = PATH.relative( src, path )
  const res: string = PATH.resolve( build, relative )
  return res
}

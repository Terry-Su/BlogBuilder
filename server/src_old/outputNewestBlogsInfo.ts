import {
  Path,
  BlogOriginInfo,
  BlogInfo,
  BlogPropComputed
} from "./interface/index"
import {
  getBlogPropComputed,
  getOutputNewestBlogsInfoPath
} from "./store/index"
import { outputJSONSync } from "fs-extra"
import { slice } from "lodash"

export default function( blogsOriginInfo: BlogOriginInfo[], output: Path ) {
  const blogsInfo: BlogInfo[] = getNewestBlogsInfo( blogsOriginInfo )
  const path = getOutputNewestBlogsInfoPath( output )
  outputJSONSync( path, blogsInfo )

  function getNewestBlogsInfo(
    blogsOriginInfo: BlogOriginInfo[]
  ): BlogInfo[] {
    const all: BlogInfo[] = blogsOriginInfo.map( getBlogInfo )
    const blogsInfo: BlogInfo[] = slice( all, 0, 5 )

    return blogsInfo

    function getBlogInfo( blogOriginInfo: BlogOriginInfo ): BlogInfo {
      const blogPropComputed: BlogPropComputed = getBlogPropComputed(
        blogOriginInfo
      )
      return blogPropComputed
    }
  }
}

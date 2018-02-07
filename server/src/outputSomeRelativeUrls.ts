import {
  Path,
  BlogOriginInfo,
  BlogRelativeUrl,
  BlogPropComputed
} from "./interface/index"
import {
  getBlogPropComputed,
  getOutputSomeRelativeUrlsPath
} from "./store/index"
import { outputJSONSync } from "fs-extra"
import { slice } from "lodash"

export default function( blogsOriginInfo: BlogOriginInfo[], output: Path ) {
  const urls: BlogRelativeUrl[] = getSomeRelativeUrls( blogsOriginInfo )
  const path = getOutputSomeRelativeUrlsPath( output )
  outputJSONSync( path, urls )

  function getSomeRelativeUrls(
    blogsOriginInfo: BlogOriginInfo[]
  ): BlogRelativeUrl[] {
    const allUrls: BlogRelativeUrl[] = blogsOriginInfo.map( getUrl )
    const urls: BlogRelativeUrl[] = slice( allUrls, 0, 5 )

    return urls

    function getUrl( blogOriginInfo: BlogOriginInfo ): BlogRelativeUrl {
      const blogPropComputed: BlogPropComputed = getBlogPropComputed(
        blogOriginInfo
      )
      const { relativeUrl }: { relativeUrl: BlogRelativeUrl } = blogPropComputed
      return relativeUrl
    }
  }
}

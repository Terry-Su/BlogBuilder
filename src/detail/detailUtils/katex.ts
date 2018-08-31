import { notNil } from "../../shared/utils/lodash"
import { mathCssUrl, mathJsUrl } from "../store/global"
import { loadCssLink, loadScript } from "../../shared/utils/dom"

/**
 * Transform math formula codes to real formuals by katex
 */
export default function() {
  const codes = Array.from( document.getElementsByTagName( "code" ) )
  const mathCodes = codes.filter(
    dom => dom.getAttribute( "class" ) === "language-math"
  )
  if ( mathCodes.length > 0 && notNil( mathCssUrl ) && notNil( mathJsUrl ) ) {
    loadCssLink( mathCssUrl )
    loadScript( mathJsUrl, () => {
      const katex = window[ "katex" ]
      if ( katex ) {
        mathCodes.map( mathCode => {
          mathCode.innerHTML = katex.renderToString( mathCode.innerHTML )
        } )
      }
    } )
  }
}

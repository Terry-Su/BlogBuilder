import { loadScript } from '../../shared/utils/dom'
import { mermaidJsUrl } from '../store/global'

export default function() {
  const codes = Array.from( document.getElementsByTagName( "code" ) )
  const mermaidCodes = codes.filter(
    dom => {
      const html = dom.innerHTML
      return html.startsWith( `graph` )
    }
  )

  if ( mermaidCodes.length > 0 ) {
    mermaidCodes.map( code => {
      code.setAttribute( 'class', `mermaid` )
    } )
    

    loadScript( mermaidJsUrl, () => {
      const mermaid = window[ 'mermaid' ]
      mermaid.initialize( { startOnLoad: true } )
    } )
  }
}
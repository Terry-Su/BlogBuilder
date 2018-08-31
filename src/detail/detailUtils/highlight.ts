import hljs from "highlight.js/lib/highlight"
import javascript from "highlight.js/lib/languages/javascript"
import css from "highlight.js/lib/languages/css"
import xml from "highlight.js/lib/languages/xml"
import htmlbars from "highlight.js/lib/languages/htmlbars"
import typescript from "highlight.js/lib/languages/typescript"
import bash from "highlight.js/lib/languages/bash"
import java from "highlight.js/lib/languages/java"
import python from "highlight.js/lib/languages/python"

export default function() {
  const langs = [
    { javascript },
    // { css },
    // { xml },
    // { htmlbars },
    // { typescript },
    // { bash },
    // { java },
    // { python },
  ]
  
  langs.forEach( object => {
    const key: string = Object.keys( object )[ 0 ]
    const value = object[ key ]
    hljs.registerLanguage( key, value )
  } )

  // hljs.registerLanguage( 'javascript', javascript )
  hljs.initHighlightingOnLoad()
}

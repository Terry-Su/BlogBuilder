import React, { Component } from "react"
import mapStateAndStyle from "../../../shared/utils/mapStateAndStyle"
import { MAX_ARTICLE_WITH } from "../../constants/styles"
import hljs from "highlight.js"
// import katex from "../../assets/js/katex.js"
import { loadCssLink, loadScript } from "../../../shared/utils/dom"
import { markedHtml, mathCssUrl, mathJsUrl } from "../../store/global"
import { notNil } from "../../../shared/utils/lodash";

// import '../../assets/css/katex.css'

const styles = {
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "center"
  },
  contentContainer: {
    width: "100%",
    maxWidth: MAX_ARTICLE_WITH,
    padding: "0 20px",
    boxSizing: "border-box"
  }
}
hljs.initHighlightingOnLoad()
export default mapStateAndStyle(styles)(
  class TheBody extends Component<any, any> {
    constructor(props) {
      super(props)
    }
    componentDidMount() {
      const codes = Array.from(document.getElementsByTagName("code"))
      const mathCodes = codes.filter(
        dom => dom.getAttribute("class") === "language-math"
      )
      if (mathCodes.length > 0 && notNil( mathCssUrl ) && notNil( mathJsUrl )) {
        loadCssLink(
          mathCssUrl
        )
        loadScript(
          mathJsUrl,
          () => {
            const katex = window["katex"]
            if (katex) {
              mathCodes.map(mathCode => {
                mathCode.innerHTML = katex.renderToString(mathCode.innerHTML)
              })
            }
          }
        )
      }
    }
    render() {
      const { classes: c } = this.props
      return (
        <div className={`${c.container}`}>
          <div
            className={`${c.contentContainer}`}
            dangerouslySetInnerHTML={{ __html: markedHtml }}
          />
        </div>
      )
    }
  }
)

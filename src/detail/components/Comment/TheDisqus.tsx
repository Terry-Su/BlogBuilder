import React, { Component } from "react"
import { GVData } from "../../../shared/store/global";

export default class TheDisqus extends Component {
  componentDidMount() {
    /**
     *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
     *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/

    const { uniqueHtmlName: PAGE_IDENTIFIER } = GVData
    const PAGE_URL = location.href
    var disqus_config = function() {
      this.page.url = PAGE_URL // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = PAGE_IDENTIFIER // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    }

    setTimeout(() => {
      // DON'T EDIT BELOW THIS LINE
      var d = document,
        s = d.createElement("script")
      s.src = "https://terrysu.disqus.com/embed.js"
      s.setAttribute("data-timestamp", (+new Date()).toString())
      ;(d.head || d.body).appendChild(s)
    }, 0)
  }
  render() {
    return (
      <div>
        <div id="disqus_thread" />

        <noscript>
          Please enable JavaScript to view the{" "}
          <a href="https://disqus.com/?ref_noscript">
            comments powered by Disqus.
          </a>
        </noscript>
      </div>
    )
  }
}

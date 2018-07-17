
export function initializeIframeResizing() {
  window.addEventListener('DOMContentLoaded', function(e) {
    var iframes = Array.from( document.querySelectorAll("iframe") );
    iframes.map( resizeIframeToFitContent )
  } )

  function resizeIframeToFitContent( iframe ) {
    iframe.width  = iframe.contentWindow.document.body.scrollWidth;
    iframe.height = iframe.contentWindow.document.body.scrollHeight;
  }
}

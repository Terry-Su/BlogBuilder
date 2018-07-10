export function loadCssLink( src: string, callback = () => {} ) {
  const link = document.createElement( "link" )
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = src
  link.onload = callback
  document.head.appendChild( link )
}

export function loadScript(src, callback = () => {}) {
  const script = document.createElement('script')
  script.src = src
  script.onload = callback
  document.head.appendChild(script)
}

export function applyStyle(styleText) {
  const style = document.createElement('style')
  style.type = 'text/css';
  style.appendChild(document.createTextNode(styleText));
  document.head.appendChild(style)
}
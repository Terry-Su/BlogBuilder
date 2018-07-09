export function loadCssLink( src: string, callback?: any ) {
  const link = document.createElement( "link" )
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = src
  link.onload = callback || function() {}
  document.head.appendChild( link )
}

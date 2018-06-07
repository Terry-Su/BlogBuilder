import fetch from "dva/fetch"

export default async function( url, options = {} ) {
  const response = await fetch( url, options )
  checkStatus( response )
  return response.json() || {}
}

function checkStatus( response ) {
  if ( response.status >= 200 && response.status < 300 ) {
    return response
  }

  const error: any = new Error( response.statusText )
  error.response = response
  throw error
}

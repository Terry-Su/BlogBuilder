import { BACK_FROM_ONE_PAGE, BACK_FROM_ONE_PAGE_REGEXP } from "./../constants/urls"


export const removeBackInfoFromUrl = () => {
  const currentHref = location.href
  const regexp = new RegExp( `${BACK_FROM_ONE_PAGE_REGEXP}$`, 'g' )
  const newHref = currentHref.replace( regexp, '' )
  location.replace( newHref )
}

export const appendBackInfoToUrl = () => {
  removeBackInfoFromUrl()
  const currentHref = location.href
  location.replace( `${currentHref}${BACK_FROM_ONE_PAGE}` )
}



export const isBackFromOnePage = () => {
  const currentHref = location.href
  const regexp = new RegExp( `${BACK_FROM_ONE_PAGE_REGEXP}$` )
  const match = currentHref.match( regexp )
  return match && match.length > 0
}
import { notNil } from "../../shared/utils/lodash"

export const getGithubIssueCommentsUrl = ( commentRoot, comment ) =>
  `${commentRoot}${comment}/comments`
  
export const getGithubIssuePageUrl = ( commentPageRoot, comment ) =>
  notNil( commentPageRoot ) && notNil( comment ) ?
    `${commentPageRoot}${comment}` :
    null

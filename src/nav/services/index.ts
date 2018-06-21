import request from "../../shared/utils/request"
import { notNil } from "../../shared/utils/lodash"

const { config = {} } = window[ "GV" ]
const { nameOfDirectoryPlacingDataExceptNavHtml } = config
const root = notNil( nameOfDirectoryPlacingDataExceptNavHtml ) ?
  `./${nameOfDirectoryPlacingDataExceptNavHtml}/` :
  `./`

export const fetchCategoryBlogs = sequence => {
  const url = `${root}${sequence.reduce(
    ( accumulator, current ) => `${accumulator}/${current}`
  )}/category.json`
  return request( url )
}

export const fetchTagBlogs = tagName => request( `${root}tags/${tagName}.json` )

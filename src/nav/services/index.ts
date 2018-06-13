import request from "../../shared/utils/request"

export const fetchCategoryBlogs = sequence => {
  const url = `/${sequence.reduce(
    ( accumulator, current ) => `${accumulator}/${current}`
  )}/category.json`
  return request( url )
}

export const fetchTagBlogs = tagName => request( `/tags/${tagName}.json` )

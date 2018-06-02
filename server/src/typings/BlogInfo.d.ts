import {
  BLOG_INFO_PATH,
  BLOG_INFO_NAME,
  BLOG_INFO_CREATE_TIME,
  BLOG_INFO_TAGS
} from "../constants/fields"

interface BlogInfo {
  [BLOG_INFO_PATH]: Path
  [BLOG_INFO_NAME]: string
  [BLOG_INFO_CREATE_TIME]: string
  [BLOG_INFO_TAGS]: string[]
}

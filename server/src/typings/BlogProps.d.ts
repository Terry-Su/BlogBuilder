import {
  BLOG_PROPS_NAME,
  BLOG_PROPS_CREATE_TIME,
  BLOG_PROPS_TAGS
} from "../constants/fields"

interface BlogProps {
  [BLOG_PROPS_NAME]?: string
  [BLOG_PROPS_CREATE_TIME]?: string
  [BLOG_PROPS_TAGS]?: string[]
}

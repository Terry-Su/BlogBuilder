import { DETAIL, BLOG_PROPS, HOME } from "../constants/names"
import { GVConfig, GVData } from "../../shared/store/global"
import { getGithubIssuePageUrl } from "../constants/url"
import { notNil } from "../../shared/utils/lodash"
export const GVConfigDetail = GVConfig[ DETAIL ]
export const GVDataBlogProps = GVData[ BLOG_PROPS ]

const { comment } = GVDataBlogProps
const { commentPageRoot } = GVConfigDetail

export const githubIssueCommentsUrl = getGithubIssuePageUrl(
  commentPageRoot,
  comment
)
export const shouldShowGithubIsuueComments = notNil( githubIssueCommentsUrl )

export const homeUrl = GVConfigDetail[ HOME ] || "#"

const markedHtmlDom = document.getElementById( "markedHtml" )
export const markedHtml = markedHtmlDom ? markedHtmlDom.innerHTML : ""

const { mathCssUrl, mathJsUrl, mermaidJsUrl, bottomText } = GVConfigDetail
export  { mathCssUrl, mathJsUrl, mermaidJsUrl, bottomText } 

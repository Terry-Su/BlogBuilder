import request from "../../shared/utils/request"
import { GVData } from "../../shared/store/global";
import { GVConfigDetail, GVDataBlogProps } from "../store/global";
import { notNil } from "../../shared/utils/lodash";
import { getGithubIssueCommentsUrl } from "../constants/url";

const { comment } = GVDataBlogProps
const { commentRoot } = GVConfigDetail

let fetchGithubIssueComments

if ( notNil( comment ) && notNil( commentRoot ) ) {
  const url = getGithubIssueCommentsUrl( commentRoot, comment )
  fetchGithubIssueComments = () => request(url)
}
  

export { fetchGithubIssueComments }
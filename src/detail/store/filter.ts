export function filterGithubIssueComments( data: any[] ): GithubIssueComment[] {
  return data.map(
    ( { user = {}, created_at = "", updated_at = "", body = "" }: any ) => ( {
      avatorUrl : user.avatar_url || "",
      name      : user.login || "",
      createTime: created_at,
      updateTime: updated_at,
      content   : body
    } )
  )
}

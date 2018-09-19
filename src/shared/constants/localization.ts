import { CN } from './../../shared/constants/names'
import { getLangString } from "../../shared/commonUtils/lang"
import { EN } from "../../shared/constants/names"
import { STYLE_FONT_LIBRE_BASKERVILLE, STYLE_JULIUS_SANS_ONE } from './styles'

export const POST_TIME = getLangString( {
  [ EN ]: "Posted",
  [ CN ]: "发布时间"
} )





export const CSS_FONT = getLangString( {
  [ EN ]: `
  ${STYLE_FONT_LIBRE_BASKERVILLE}
  ${STYLE_JULIUS_SANS_ONE}
`,
  [ CN ]: `
  ${STYLE_JULIUS_SANS_ONE}
` 
} )

export const CSS_STYLE = getLangString( {
  [ EN ]: `
${ CSS_FONT }
body {
  font-family: "Libre Baskerville",  serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Julius Sans One", sans-serif;
}
`,
  [ CN ]: `
${ CSS_FONT }
body {
  font-family: "Songti SC","Times", serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Julius Sans One", "Microsoft Yahei", sans-serif;
}
`
} )


export const SWITCH_LANG_ICON_URL = getLangString( {
  [ EN ]: "中文博客",
  [ CN ]: "EN Blog"
} )

export const HOME_PAGE_URL = getLangString( {
  [ EN ]: "/",
  [ CN ]: "/cn"
} )

export const SWITCH_LANG_ICON_LINK = getLangString( {
  [ EN ]: "https://terry-su.github.io/cn",
  [ CN ]: "https://terry-su.github.io"
} )
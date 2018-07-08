import React, { Component } from "react"
import mapStateAndStyle from "../../../shared/utils/mapStateAndStyle"
import Tag from "./Tag"
import CategoryCell from "./CategoryCell"
import { notEmptyString } from "../../../shared/utils/string"
import { notNil } from "../../../shared/utils/lodash"
import { POST_TIME } from "../../../shared/constants/localization"
import { REPRINT_NOTE, REPRINT_NOTE_DETAIL, HOME_PAGE } from "../../constants/localization"
import { MAX_ARTICLE_WITH } from "../../constants/styles"
const styles = {
  container: {
    width: "100%",
    maxWidth: MAX_ARTICLE_WITH,
    fontSize: "14px",
    textAlign: "right"
  },
  postTime: {
    display: "flex",
    justifyContent: "flex-end"
    // color: "#2166f1"
  },
  categorySequence: {
    display: "flex",
    justifyContent: "flex-end",
    // color: "#21aff1"
  },
  tags: {
    display: "flex",
    justifyContent: "flex-end",
    // color: "#c64725"
  },
  reprintingNote: {
    display: "flex",
    justifyContent: "flex-end",
    // color: "#2166f1"
  }
}

export default mapStateAndStyle(styles)(
  class TheInfo extends Component<any, any> {
    render() {
      const { classes: c, app } = this.props
      const { createTime, categorySequence, tags } = app
      return (
        <div className={c.container}>
          {notNil(createTime) && notEmptyString(createTime) ? (
            <div className={c.postTime}>
              {POST_TIME}: {createTime}
            </div>
          ) : null}
          <div className={c.categorySequence}>
           <CategoryCell name={ HOME_PAGE } />
            {categorySequence.map((name, key) => (
              <CategoryCell name={name} key={key} />
            ))}
          </div>
          <div className={c.tags}>
            {tags.map((name, key) => <Tag name={name} key={key} />)}
          </div>
          <div className={c.reprintingNote}>
            {REPRINT_NOTE}: {REPRINT_NOTE_DETAIL}
          </div>
        </div>
      )
    }
  }
)

import React, { Component } from "react"
import mapStateAndStyle from "../../../shared/utils/mapStateAndStyle"
import Tag from "./Tag"
import CategoryCell from "./CategoryCell"
import { notEmptyString } from '../../../shared/utils/string';
import { notNil } from '../../../shared/utils/lodash';
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  subContainer: {
    width: "700px",
    fontSize: "16px",
  },
  postTime: {
    display: "flex",
    justifyContent: "flex-end",
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
          <div className={c.subContainer}>
            {
              notNil(createTime) && notEmptyString( createTime ) ? <div className={c.postTime}>Posted: { createTime }</div>: null
            }
            <div className={c.categorySequence}>
              {categorySequence.map((name, key) => (
                <CategoryCell name={name} key={key} />
              ))}
            </div>
            <div className={c.tags}>
              {tags.map((name, key) => <Tag name={name} key={key} />)}
            </div>
            <div className={c.reprintingNote}>
              Reprinting Note: This article is original, reprint please indicate
              the source
            </div>
          </div>
        </div>
      )
    }
  }
)

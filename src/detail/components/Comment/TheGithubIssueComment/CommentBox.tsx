import React, { Component } from "react"
import mapStateAndStyle from "../../../../shared/utils/mapStateAndStyle"

const styles = {
  container: {
    display: "flex",
    // boxSizing: "border-box",
    // border: "1px solid blue",
    fontSize: "14px"
  },
  avatarContainer: {
    display: "flex",
    minWidth: "60px",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  avatarImage: {
    width: "50px",
    height: "50px",
    borderRadius: "5px"
  },
  mainContainer: {
    display: "flex",
    padding: '15px',
    boxSizing: 'border-box',
    flex: "auto",
    flexDirection: "column",
    border: "1px solid grey",
    borderRadius: "5px"
  },
  titleContainer: {
    display: "flex",
    alignItems: "center"
  },
  title: {
    display: "inline-flex",
    fontSize: "16px",
    fontWeight: "bold"
  },
  time: {
    margin: "0 0 0 10px",
    color: "#586069"
  },
  contentContainer: {
    margin: "5px 0 0 0"
  }
}

export default mapStateAndStyle(styles)(
  class CommentBox extends Component<any, any> {
    render() {
      const { classes: c, data = {} } = this.props
      const { avatorUrl, name, createTime, updateTime, content } = data

      return (
        <div className={c.container}>
          <div className={c.avatarContainer}>
            <img
              className={c.avatarImage}
              src={ avatorUrl }
              alt=""
            />
          </div>
          <div className={c.mainContainer}>
            <div className={c.titleContainer}>
              <span className={c.title}>{ name }</span>
              <span className={c.time}>{ createTime }</span>
            </div>
            <div className={c.contentContainer} dangerouslySetInnerHTML={{
              __html: content
            }}>
            </div>
          </div>
        </div>
      )
    }
  }
)

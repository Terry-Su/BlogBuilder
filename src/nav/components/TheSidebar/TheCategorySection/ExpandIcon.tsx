import React, { Component } from "react"
import mapStateAndStyle from "../../../../shared/utils/mapStateAndStyle"
import { RIGHT, BOTTOM } from "../../../constants/names"

const styles = {
  container: {
    width: '10px',
    height: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // background: 'blue'
  },
  commonTriangle: {
    width: "0px",
    height: "0px",
    border: "5px solid transparent"
  },
  [RIGHT]: {
    margin: '0 0 0 5px',
    borderLeft: "5px solid grey"
  },
  [BOTTOM]: {
    margin: '5px 0 0 0',
    borderTop: "5px solid grey"
  }
}

interface Props {
  direction: string
  classes: any
}

export default mapStateAndStyle(styles)(
  class ExpandIcon extends Component<Props> {
    render() {
      const { classes: c, direction = RIGHT } = this.props
      const computedContainerClassName = c.container
      const computedTriangleClassName =
        direction === RIGHT
          ? `${c.commonTriangle} ${c[RIGHT]}`
          : `${c.commonTriangle} ${c[BOTTOM]}`

      return (
        <div className={computedContainerClassName}>
          <div className={computedTriangleClassName} />
        </div>
      )
    }
  }
)

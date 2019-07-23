import React, { useContext } from "react"
import { createUseStyles } from "react-jss"

import BizzContext from "contexts/bizzContext"
import { BCardStyles } from "./jssStyles"

const BCard = ({ children }) => {
  const { bizzState } = useContext(BizzContext)

  const useStyles =
    !bizzState.inTestingEnviroment && createUseStyles(BCardStyles)

  const style = !bizzState.inTestingEnviroment ? useStyles() : {}

  const renderChildren = () => {
    const title = []
    const rest = []
    // Separates the children into Title and Rest, so title is always displayed above
    const arrayChildren = React.Children.toArray(children)
    arrayChildren.forEach(child => {
      if (child.type && child.type.name === "BCardTitle") {
        title.push(child)
      } else {
        rest.push(child)
      }
    })
    return (
      <div className={style.cardContainer}>
        <div>{title.length !== 0 && title[0]}</div>
        <div>{rest}</div>
      </div>
    )
  }
  return renderChildren()
}

export default BCard

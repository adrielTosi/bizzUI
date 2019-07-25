import React, { useContext } from "react"
import { createUseStyles } from "react-jss"

import BizzContext from "contexts/bizzContext"
import { BCardTitleStyles } from "./jssStyles"

const BCardTitle = ({ title }) => {
  const { bizzState } = useContext(BizzContext)
  const useStyles =
    !bizzState.inTestingEnviroment && createUseStyles(BCardTitleStyles)
  const style = !bizzState.inTestingEnviroment ? useStyles() : {}
  return (
    <div className={style.cardTitleContainer}>
      <span className={style.cardTitle}>{title}</span>
    </div>
  )
}

export default BCardTitle

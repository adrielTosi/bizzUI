import React, { useContext } from "react"
import { createUseStyles } from "react-jss"

import BizzContext from "contexts/bizzContext"

const BCardTitle = ({ title }) => {
  const { bizzState } = useContext(BizzContext)
  const useStyles =
    !bizzState.inTestingEnviroment &&
    createUseStyles({
      cardTitleContainer: {
        width: "100%",
        minHeight: "20%",
        display: "flex",
        alignItems: "center",
        fontFamily: "'Krub', sans-serif",
        marginBottom: "1em",
      },
      cardTitle: {
        fontWeight: "500",
        fontSize: "1.6em",
        color: "#4F4F4F",
      },
    })
  const style = !bizzState.inTestingEnviroment ? useStyles() : {}
  return (
    <div className={style.cardTitleContainer}>
      <span className={style.cardTitle}>{title}</span>
    </div>
  )
}

export default BCardTitle

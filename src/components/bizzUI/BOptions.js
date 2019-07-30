import React, { useContext } from "react"
import { createUseStyles } from "react-jss"

import BizzContext from "contexts/BizzUI/bizzContext"

const BOptions = ({ children }) => {
  const { bizzState } = useContext(BizzContext)

  const useStyles =
    !bizzState.inTestingEnviroment &&
    createUseStyles({
      optionContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        height: "100%",
      },
    })
  const style = !bizzState.inTestingEnviroment ? useStyles() : {}
  return <div className={style.optionContainer}>{children}</div>
}

export default BOptions

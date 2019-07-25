import { useContext } from "react"
import { createUseStyles } from "react-jss"

import BizzContext from "contexts/bizzContext"
import { BCardStyles } from "./jssStyles"
import { renderCardChildren } from "components/helpers"

const BCard = ({ children }) => {
  const { bizzState } = useContext(BizzContext)

  const useStyles =
    !bizzState.inTestingEnviroment && createUseStyles(BCardStyles)

  const style = !bizzState.inTestingEnviroment ? useStyles() : {}

  /**
   * `renderCardChildren()` divides children between two:
   * `Title`: is always displayed above and renders only the first `BCardTitle` passed to children
   * `Rest`: all the other childrens
   */
  return renderCardChildren(children, style)
}

export default BCard

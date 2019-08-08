import React from "react"
import Switcher from "./Switcher"
import PState from "contexts/Portfolio/pState"

const PortfolioContainer = () => (
  <PState>
    <Switcher />
  </PState>
)
export default PortfolioContainer

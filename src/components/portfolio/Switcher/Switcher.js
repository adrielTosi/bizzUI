import React, { useContext, useEffect } from "react"

import SwitcherContainer from "./SwitcherContainer"
import pContext from "contexts/Portfolio/pContext"
import Tab from "./Tab"

const tabs = [
  {
    id: "stack",
    label: "Stack",
    highlight: false,
  },
  {
    id: "projects",
    label: "Projects",
    highlight: false,
  },
  {
    id: "about",
    label: "About me",
    highlight: false,
  },
  {
    id: "hire",
    label: "Hire!",
    highlight: true,
  },
]
const Switcher = () => {
  const context = useContext(pContext)

  return (
    <SwitcherContainer>
      {tabs.map(tab => (
        <Tab
          key={tab.id}
          id={tab.id}
          label={tab.label}
          highlight={tab.highlight}
          currentTab={context.pState.currentTab}
          action={context.setTab}
        />
      ))}
    </SwitcherContainer>
  )
}

export default Switcher

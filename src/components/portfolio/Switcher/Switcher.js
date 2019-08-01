import React, { useContext } from "react"

import SwitcherContainer from "./SwitcherContainer"
import Display from "components/portfolio/Display"
import pContext from "contexts/Portfolio/pContext"
import Tab from "./Tab"

const tabs = [
  {
    id: "stack",
    label: "Stack",
  },
  {
    id: "projects",
    label: "Projects",
  },
  {
    id: "about",
    label: "About me",
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
      <div className="col-12">
        {context.pState.currentTab && (
          <Display tabs={tabs} currentTab={context.pState.currentTab} />
        )}
      </div>
    </SwitcherContainer>
  )
}

export default Switcher

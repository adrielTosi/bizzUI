import React, { useContext, useEffect } from "react"

import SwitcherContainer from "./SwitcherContainer"
import pContext from "contexts/Portfolio/pContext"
import style from "./switcher.module.scss"

const Tab = ({ id, label, currentTab, highlight, action }) => {
  const selected = currentTab === id ? style.selected : ""
  const highlighted = highlight ? style.highlighted : ""
  return (
    <div
      className={`col-auto  ${style.item} ${selected} ${highlighted}`}
      onClick={() => action(id)}
    >
      <span>{label}</span>
    </div>
  )
}

const Switcher = () => {
  const context = useContext(pContext)

  return (
    <SwitcherContainer>
      <Tab
        id="stack"
        label="Stack"
        currentTab={context.pState.currentTab}
        action={context.setTab}
      />
      <Tab
        id="projects"
        label="Projects"
        currentTab={context.pState.currentTab}
        action={context.setTab}
      />
      <Tab
        id="about"
        label="About Me"
        currentTab={context.pState.currentTab}
        action={context.setTab}
      />
      <Tab
        id="hire"
        label="Hire!"
        currentTab={context.pState.currentTab}
        highlight
        action={context.setTab}
      />
    </SwitcherContainer>
  )
}

export default Switcher

import React from "react"
import style from "./switcher.module.scss"

const Tab = ({ id, label, currentTab, highlight, action }) => {
  const selected = currentTab === id && !highlight ? style.selected : ""
  const highlighted = highlight ? style.highlighted : ""
  const selectedHighlight =
    highlight && currentTab === id ? style.highlightSelected : ""

  return (
    <div
      className={`col-auto  ${style.item} ${highlighted} ${selected} ${selectedHighlight}`}
      onClick={() => action(id)}
    >
      <span>{label}</span>
    </div>
  )
}

export default Tab

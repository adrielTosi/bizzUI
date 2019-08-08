import React from "react"
import style from "./switcher.module.scss"
import PropTypes from "prop-types"

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
      <span className="m-1">{label}</span>
    </div>
  )
}

Tab.refName = "Tab"
Tab.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  currentTab: PropTypes.string.isRequired,
  highlight: PropTypes.bool,
  action: PropTypes.func.isRequired,
}

Tab.defaultProps = {
  highlight: false,
}
export default Tab

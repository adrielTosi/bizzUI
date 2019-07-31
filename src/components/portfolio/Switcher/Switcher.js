import React from "react"

const Item = ({ label, isSelected, highlight }) => (
  <div className="col-auto">
    <span>{label}</span>
  </div>
)

const Switcher = () => {
  return (
    <div className="row justify-content-center">
      <Item label="Stack" />
      <Item label="Projects" />
      <Item label="About Me" />
      <Item label="Hire!" />
    </div>
  )
}

export default Switcher

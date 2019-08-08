import React from "react"
import "styles/check.scss"
import bee from "images/BizzUI/bee.png"

const CheckedSign = ({ checked }) => {
  return (
    <div className="check">
      <img src={bee} alt="checked" />
    </div>
  )
}

export default CheckedSign

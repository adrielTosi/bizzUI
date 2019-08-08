import React from "react"
import loading from "images/BizzUI/loading.gif"
const Loading = () => {
  return (
    <div style={{ width: "100%", maxWidth: "450px", textAlign: "center" }}>
      <img src={loading} width="30px" alt="Loading..." />
    </div>
  )
}

export default Loading

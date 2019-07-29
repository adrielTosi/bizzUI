import React from "react"

const ProgressBar = ({ percentage, barColor }) => {
  return (
    <div className="mt-3 mb-1" style={{ textAlign: "center" }}>
      <span>{`${percentage} %`}</span>
      <div className="progress w-100" style={{ height: "8px" }}>
        <div
          className={`progress-bar ${barColor}`}
          style={{
            width: `${percentage}%`,
          }}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    </div>
  )
}

export default ProgressBar

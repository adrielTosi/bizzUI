import React from "react"
import "styles/title.scss"

const Titles = ({ currentPath }) => {
  const title = currentPath === "bizzUI" ? "Quizz" : "Answers"
  const hasSubtitle = currentPath === "bizzUI"
  return (
    <div className="title-container">
      <div className="title">{title}</div>
      {hasSubtitle && (
        <div className="subtitle">
          The quizz is about your personal preferences, so others will have
          different perspectives when creating their websites!
        </div>
      )}
    </div>
  )
}

export default Titles

import React from "react"
import Header from "./Header"

import "../../styles/BQuestionsLayout.scss"

const BQuestionsLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="mt-4">
        <div className="container">{children}</div>
      </main>
    </div>
  )
}

export default BQuestionsLayout

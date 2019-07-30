import React from "react"
import Header from "./Header"

import "../../styles/BQuestionsLayout.scss"
import Footer from "./Footer"

const BQuestionsLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="mt-4" style={{ minHeight: "100vh" }}>
        <div className="container">{children}</div>
      </main>
      <Footer />
    </div>
  )
}

export default BQuestionsLayout

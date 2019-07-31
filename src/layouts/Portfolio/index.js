import React from "react"

import Header from "./Header"
import "bootstrap/dist/css/bootstrap.css"
import "styles/index.scss"

const PortfolioLayout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <main className="row justify-content-center">
        <div className="col-12 col-md-10">{children}</div>
      </main>
    </div>
  )
}

export default PortfolioLayout

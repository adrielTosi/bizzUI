import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <nav className="header navbar">
      <div className="container">
        <div className="col">
          <span className="lead navbar-brand">
            <Link to="/BizzUI">Bizz UI</Link>
          </span>
        </div>
        <div className="col row">
          <div className="ml-auto">
            <span>
              <Link to="/answers">Answers</Link>
            </span>
            <span className="ml-5">About</span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header

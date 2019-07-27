import React from "react"
import { Link } from "gatsby"
import logo from "images/logo-color-with-name.svg"

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light header">
      <div className="container">
        <Link className="navbar-brand" to="/BizzUI">
          <img src={logo} alt="logo" height="38" />
        </Link>

        <ul className="ml-auto row links">
          <li className="nav-item">
            <Link className="nav-link" to="/answers">
              Answers
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header

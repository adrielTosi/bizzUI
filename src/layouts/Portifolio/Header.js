import React from "react"

import logo from "images/Portfolio/logo-portfolio.svg"

const Header = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-8">
        <div className="row">
          <div className="col-12 text-center">
            <img src={logo} alt="logo" height="240px" />
          </div>
          <div
            className="col-12 text-center font-weight-bold"
            style={{ fontFamily: "'Montserrat'", fontWeight: "600" }}
          >
            <h4>Adriel Tosi</h4>
            <h6 className="lead">Front-end developer.</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

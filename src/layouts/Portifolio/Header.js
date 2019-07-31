import React from "react"

import logo from "images/Portfolio/logo-portfolio.svg"

const Header = () => {
  return (
    <div className="row justify-content-center mb-2">
      <div className="col-12 col-md-8">
        <div className="row" style={{ borderBottom: "1px solid black" }}>
          <div className="col-12 text-center">
            <img src={logo} alt="logo" height="240px" />
          </div>
          <div
            className="col-12 text-center"
            style={{ fontFamily: "'Montserrat'" }}
          >
            <h4 className="font-weight-bold">Adriel Tosi</h4>
            <h6 style={{ fontSize: "0.9em" }}>Front-end developer.</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

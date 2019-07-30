import React from "react"
import { Link } from "gatsby"
import logo from "images/logo-white-with-name.svg"
import bee from "images/bee.png"

const Footer = () => {
  return (
    <footer
      style={{
        width: "100vw",
        minHeight: "80px",
        backgroundColor: "#8de971",
        padding: "1em",
        fontSize: "0.9em",
        fontFamily: "Montserrat",
      }}
      className="pt-4 pt-md-3 border-top"
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-2">
            <img src={logo} alt="logo" width="80" />
            <small className="d-block mb-3 text-white">
              © 2019 -{" "}
              <a
                href="https://github.com/adrielTosi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted"
              >
                Adriel Tosi
              </a>
            </small>
          </div>
          <div className="col-6 col-md">
            <h6 className="text-white">Pages:</h6>
            <ul className="list-unstyled text-small">
              <li>
                <Link className="text-white" to="/answers">
                  {" "}
                  Answers
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-2 col-md-4 align-text-center">
            <img src={bee} alt="bee" width="120px" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

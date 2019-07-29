import React from "react"
import { Link } from "gatsby"

import "styles/sidenav.scss"
import study from "images/study.svg"
import github from "images/github-icon.svg"

const Item = ({ children, icon }) => {
  return (
    <div className="sidenav-item">
      <div className="item-icon">
        <img src={icon} alt="icon" height="20px" width="20px" />
      </div>
      <div className="item-message">{children}</div>
    </div>
  )
}

const Sidenav = () => {
  return (
    <div className="sidenav-container mb-4">
      <Item icon={study}>
        To learn more about this project visit the{" "}
        <Link to="/about">About</Link> page
      </Item>

      <div className="separator" />

      <Item icon={github}>
        To see the code, visit the{" "}
        <a
          href="https://github.com/adrielTosi/bizzUI"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>{" "}
        page
      </Item>
    </div>
  )
}

export default Sidenav

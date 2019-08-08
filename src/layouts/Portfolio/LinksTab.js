import React from "react"

import style from "./portfolio.module.scss"
import linkedin from "images/Portfolio/icons/linkedin.svg"
import github from "images/Portfolio/icons/github.svg"

const LinksTab = () => {
  return (
    <div className={`position-absolute ${style.position}`}>
      <div className={style.tab}>
        <a
          href="https://www.linkedin.com/in/adrieltosi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
        <a
          href="https://github.com/adrieltosi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github" />
        </a>
      </div>
    </div>
  )
}

export default LinksTab

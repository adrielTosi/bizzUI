import React from "react"
import { Link } from "gatsby"

import bizzImg from "images/Portfolio/bizz-01.png"
import bookArchiveImg from "images/Portfolio/book-archive-01.png"
import style from "./options.module.scss"

const Card = ({ img, title, text, githubLink, siteLink, isRoute, primary }) => {
  const border = primary ? style.cardPrimary : ""
  return (
    <div className="col-12 col-md-6 col-lg-5">
      <div className={`card ${border} m-1 mb-3`}>
        <div className={`card-header ${style.cardHeader}`}>{title}</div>
        <img className="card-img-top" src={img} alt="project" />
        <div className={`card-body ${style.cardBody}`}>
          <p className="card-text text-muted small">{text}</p>
          <div className="row text-center">
            <div className="col-6">
              <a href={githubLink}>Github</a>
            </div>
            <div className="col-6">
              {isRoute ? (
                <Link to={siteLink}>Visit website</Link>
              ) : (
                <a href={siteLink}>Visit website</a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <div className="row justify-content-center">
      <Card
        img={bizzImg}
        primary
        title="Bizz UI"
        text="A quizz to help designers and front-end developers to better understand how users feel about UI pieces."
        githubLink="https://github.com/adrielTosi/bizzUI"
        siteLink="/BizzUI"
        isRoute
      />
      <Card
        img={bookArchiveImg}
        title="Book Archive"
        text="An app to archive the books your have read. (credentials: demo@demo.com password: 123456"
        githubLink="https://github.com/adrielTosi/book-archive"
        siteLink="https://book-archives.firebaseapp.com/"
      />
    </div>
  )
}

export default Projects

import React from "react"
import style from "./options.module.scss"

import reactIcon from "images/Portfolio/icons/react-icon.png"
import sass from "images/Portfolio/icons/scss.png"
import gatsbyIcon from "images/Portfolio/icons/gatsby.png"
import vue from "images/Portfolio/icons/vue.png"
import apollo from "images/Portfolio/icons/apollo.png"
import quasar from "images/Portfolio/icons/quasar.png"
import node from "images/Portfolio/icons/node.png"
import mongodb from "images/Portfolio/icons/mongodb.png"
import jss from "images/Portfolio/icons/jss.png"
import email from "images/Portfolio/icons/email.png"
import git from "images/Portfolio/icons/git.png"
import responsive from "images/Portfolio/icons/responsive.png"
import UI from "images/Portfolio/icons/UI.png"
import bootstrap from "images/Portfolio/icons/bootstrap.png"
import firebase from "images/Portfolio/icons/firebase.png"
import design from "images/Portfolio/icons/design.png"

const stack = {
  Main: [
    {
      label: "React JS",
      url: reactIcon,
    },
    {
      label: "Sass (CSS)",
      url: sass,
    },
  ],
  "Messed with": [
    {
      label: "Gatsby",
      url: gatsbyIcon,
    },
    {
      label: "VueJS",
      url: vue,
    },
    {
      label: "Apollo / GraphQL",
      url: apollo,
    },
    {
      label: "Quasar (Vue)",
      url: quasar,
    },
    {
      label: "Node REST API",
      url: node,
    },
    {
      label: "MongoDB",
      url: mongodb,
    },
    {
      label: "CSS in JS",
      url: jss,
    },
    {
      label: "Email templates",
      url: email,
    },
    {
      label: "Firebase",
      url: firebase,
    },
  ],
  "Soft Skills": [
    {
      label: "Git and Gitflow",
      url: git,
    },
    {
      label: "Responsive Design",
      url: responsive,
    },
    {
      label: "UI/UX",
      url: UI,
    },
    {
      label: "Bootstrap",
      url: bootstrap,
    },
    {
      label: "Visual Design",
      url: design,
    },
  ],
}

const Skill = ({ label, url }) => {
  return (
    <div className="row align-content-center ml-1">
      <span style={{ marginRight: "16px" }}>
        <img src={url} alt={label} style={{ width: "15px" }} />
      </span>
      <span className={style.skill}>{label}</span>
    </div>
  )
}

const Stack = () => {
  return (
    <div className="row justify-content-center">
      {Object.entries(stack).map(([key, value]) => {
        return (
          <div className="col-12 col-md-4 mb-3">
            <div className="mb-2 font-weight-bold list-title">{key}</div>
            <div className={style.unList}>
              {value.map(skill => (
                <Skill label={skill.label} url={skill.url} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Stack

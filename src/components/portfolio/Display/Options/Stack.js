import React from "react"
import style from "./options.module.scss"

const stack = {
  Main: ["React JS", "Sass (CSS)"],
  "Messed with": [
    "Gatsby",
    "VueJS",
    "Apollo / GraphQL",
    "Quasar Framework(Vue)",
    "Node REST API",
    "MongoDB",
    "CSS in JS",
    "Email templates",
  ],
  "Soft Skills": [
    "Git and Gitflow",
    "React testing",
    "Responsive design",
    "UI/UX",
    "Bootstrap",
    "Firebase",
    "Visual Design",
  ],
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
                <div className={style.skill}>{skill}</div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Stack

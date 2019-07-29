import React from "react"

import Layout from "layouts/BQuestionLayout"
import "styles/title.scss"
import "styles/about.scss"

const about = () => {
  return (
    <Layout>
      <div className="title-container mb-3">
        <div className="title">About</div>
        <div className="subtitle">This page is under construction.</div>
      </div>
      <div className="stack">
        <div className="stack-title">Stack used:</div>
        <ul>
          <li>Gatsby / React</li>
          <li>Apollo</li>
          <li>GraphQL database (GraphCMS)</li>
          <li>Jest and Testing Library</li>
          <li>SCSS as CSS preprocessor</li>
          <li>react-jss for CSS in JS</li>
        </ul>
      </div>
    </Layout>
  )
}

export default about

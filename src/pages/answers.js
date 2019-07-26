import React from "react"

import BQuizzContainer from "../components/bizzUI/BQuizzContainer"
import Layout from "layouts/BQuestionLayout"

import "bootstrap/dist/css/bootstrap.css"
import "styles/index.scss"

const answers = ({ location }) => {
  return (
    <Layout>
      <BQuizzContainer location={location} />
    </Layout>
  )
}

export default answers

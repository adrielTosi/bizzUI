import React from "react"

import BQuizzContainer from "components/BizzUI/BQuizzContainer.js"
import Layout from "layouts/BQuestionLayout"

import "bootstrap/dist/css/bootstrap.css"
import "styles/index.scss"

const BizzUI = ({ location }) => {
  return (
    <Layout>
      <BQuizzContainer location={location} />
    </Layout>
  )
}

export default BizzUI

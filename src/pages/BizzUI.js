import React from "react"

import BQuizzContainer from "components/BizzUI/BQuizzContainer.js"
import Layout from "layouts/BQuestionLayout"

import "bootstrap/dist/css/bootstrap.css"
import "styles/index.scss"

const BizzUI = () => {
  return (
    <Layout>
      <BQuizzContainer />
    </Layout>
  )
}

export default BizzUI

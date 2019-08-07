import React from "react"

import SEO from "../components/common/seo"
import BQuizzContainer from "../components/bizzUI/BQuizzContainer"
import Layout from "layouts/BizzUILayout"

import "bootstrap/dist/css/bootstrap.css"
import "styles/index.scss"

const BizzUI = ({ location }) => {
  return (
    <Layout>
      <SEO
        title="Bizz UI"
        description={`A quizz to better understand how users feel about UI pieces.`}
      />
      <BQuizzContainer location={location} />
    </Layout>
  )
}

export default BizzUI

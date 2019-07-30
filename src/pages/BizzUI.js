import React from "react"

import BQuizzContainer from "../components/bizzUI/BQuizzContainer"
import Layout from "layouts/BizzUILayout"

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

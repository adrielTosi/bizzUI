import React from "react"

import SEO from "../components/common/seo"
import Layout from "layouts/Portifolio"
import Switcher from "components/portfolio/Switcher"
import "bootstrap/dist/css/bootstrap.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Switcher />
  </Layout>
)

export default IndexPage

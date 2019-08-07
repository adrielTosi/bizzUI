import React from "react"

import SEO from "../components/common/seo"
import Layout from "layouts/Portfolio"
import Switcher from "../components/portfolio/Switcher"
import icon from "../images/Portfolio/logo-portifolio-icon.png"
import "bootstrap/dist/css/bootstrap.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Adriel Tosi" icon={icon} />
    <Switcher />
  </Layout>
)

export default IndexPage

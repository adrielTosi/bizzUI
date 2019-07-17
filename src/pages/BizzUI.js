import React from 'react'

import BQuizz from 'components/BizzUI/BQuizz.js'
import Layout from 'layouts/BQuestionLayout'

import 'bootstrap/dist/css/bootstrap.css'
import 'styles/index.scss'

const BizzUI = () => {
  return (
    <Layout>
      <BQuizz />
    </Layout>
  )
}

export default BizzUI
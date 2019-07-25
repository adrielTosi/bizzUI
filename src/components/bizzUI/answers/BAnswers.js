import React from "react"
import { Query } from "react-apollo"

import { questionsMapper } from "components/helpers"
import { GET_ANSWERS } from "components/querys"

const BAnswers = ({ location }) => {
  return (
    <Query query={GET_ANSWERS}>
      {({ loading, error, data }) => {
        if (loading) return <p>loading...</p>
        if (error) return <p>{error.message}</p>
        return questionsMapper(data.questionItems, location.pathname)
      }}
    </Query>
  )
}

export default BAnswers

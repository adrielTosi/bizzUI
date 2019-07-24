import React, { useEffect } from "react"
import { Query } from "react-apollo"

import { questionsMapper } from "components/helpers"
import { GET_ANSWERS } from "components/querys"

const BAnswers = ({ location }) => {
  useEffect(() => {
    console.log("BAnswers rendered")
  })

  return (
    <Query query={GET_ANSWERS}>
      {({ loading, error, data, refetch }) => {
        if (loading) return <p>loading...</p>
        if (error) return <p>{error.message}</p>
        console.log(data.questionItems)
        return questionsMapper(data.questionItems, location.pathname)
      }}
    </Query>
  )
}

export default BAnswers

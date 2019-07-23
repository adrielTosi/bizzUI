import React from "react"
import gql from "graphql-tag"
import { Query } from "react-apollo"

import { questionsMapper } from "components/helpers"

const GET_ANSWERS = gql`
  {
    questionItems {
      totalVotes
      id
      title
      options {
        id
        votes
        blockWidth
        img {
          url
        }
      }
    }
  }
`

const BAnswers = ({ location }) => {
  console.log(`------> ${process.env.AUTH_TOKEN_MUTATION}}`)
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

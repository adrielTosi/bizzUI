import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const BQuizz = () => {
  const { Bizz } = useStaticQuery(graphql`
    query {
      Bizz {
        questions {
          allQuestionsTotalVotes
          questionItems{
            id
            title
            totalVotes
            options {
              id
              title
              subtitle
              votes
              img {
                id
                url
              }
            } 
          }
        }
      }
    }
  `)

  return (
    <h2>
      {Bizz.questions[0].allQuestionsTotalVotes}
    </h2>
  )
}

export default BQuizz
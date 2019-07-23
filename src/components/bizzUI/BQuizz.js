import React, { useContext, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import bizzContext from "contexts/bizzContext"
import { questionsMapper } from "components/helpers"

const BQuizz = ({ location }) => {
  const query = useStaticQuery(graphql`
    query {
      Bizz {
        questionItems {
          totalVotes
          id
          title
          options {
            id
            title
            votes
            subtitle
            blockWidth
            img {
              url
            }
          }
        }
      }
    }
  `)

  const context = useContext(bizzContext)

  useEffect(() => {
    if (query) {
      context.setQuestions(query.Bizz.questionItems)
      context.setCheckedKeyToOptions(query.Bizz.questionItems)
    }
    /**
     * Set `location.pathname` to context
     */
    if (location) {
      context.setLocationPathname(location)
    }
  }, [])

  const { stateQuestionItems, pathname } = context.bizzState

  return (
    <div data-testid="bquizz-component">
      <div className="titleContainer">
        <h3>Quizz</h3>
        {context.bizzState.hasVoted && (
          <span className="display-6">Thank you for voting!</span>
        )}
      </div>
      {questionsMapper(stateQuestionItems, pathname)}
    </div>
  )
}

export default BQuizz

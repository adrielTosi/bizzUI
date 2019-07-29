import React, { useContext, useState } from "react"
import { Mutation } from "react-apollo"

import BButton from "components/bizzUI/BButton"
import bizzContext from "contexts/bizzContext"
import { UPDATE_VOTES_MUTATION, GET_ANSWERS } from "components/querys"
import {
  defineMutationVariables,
  allQuestionsHaveAnswer,
  removeCheckedKeyFromOptions,
  updateQuestionsAndOptionsVotes,
} from "components/helpers"

const BSubmit = () => {
  const context = useContext(bizzContext)

  const { stateQuestionItems, hasVoted } = context.bizzState
  const [hasError, setError] = useState(false)

  const afterVoting = () => {
    setTimeout(context.setHasVoted(true), 0)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const updateVotes = (mutation, client) => {
    if (allQuestionsHaveAnswer(stateQuestionItems)) {
      setError(false)

      let valuesToUpdate = []

      stateQuestionItems.forEach(question => {
        const { mutationVariables } = defineMutationVariables(question)
        valuesToUpdate.push(mutationVariables.variables)
        console.log(mutationVariables)
        mutation(mutationVariables)
      })

      const questionsWithNoCheckedKey = removeCheckedKeyFromOptions(
        stateQuestionItems
      )

      const updatedQuestionItems = updateQuestionsAndOptionsVotes(
        questionsWithNoCheckedKey,
        valuesToUpdate
      )
      /**
       * Writes to the cache the same questionItems sent to the server through the mutation above,
       * so when the user visits "/answers", if he has voted, no query will be sent to the server.
       * And when coming from "/answers" back to "/BizzUI" the votes will be already updated.
       * So when sending the mutation, it will be based on updated data.
       */
      client.writeData({
        query: GET_ANSWERS,
        data: {
          questionItems: updatedQuestionItems,
        },
      })
      afterVoting()
    } else {
      setError(true)
    }
  }

  const tryQuery = client => {
    try {
      return client.readQuery({ query: GET_ANSWERS })
    } catch (err) {
      return null
    }
  }
  return (
    <Mutation mutation={UPDATE_VOTES_MUTATION}>
      {(apolloUpdateVotes, { loading, error, data, client }) => {
        const localData = tryQuery(client)
        return (
          <div style={{ float: "right" }}>
            {hasError && (
              <div className="small text-danger">
                Please answer all questions.
              </div>
            )}
            {localData ? (
              <BButton
                action={() => updateVotes(apolloUpdateVotes, client)}
                loading={loading}
                error={error}
                disable={hasVoted}
              />
            ) : null}

            {error && <p>{error.message}</p>}
          </div>
        )
      }}
    </Mutation>
  )
}

export default BSubmit

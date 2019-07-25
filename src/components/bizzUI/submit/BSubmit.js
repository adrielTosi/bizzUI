import React, { useContext, useState } from "react"
import { Mutation } from "react-apollo"

import BSubmitButton from "components/bizzUI/submit/BSubmitButton"
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

  const { stateQuestionItems } = context.bizzState
  const [hasError, setError] = useState(false)

  const afterVoting = () => {
    setTimeout(context.setHasVoted(true), 0)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const updateVotes = (mutation, client) => {
    console.log(`---------> ${process.env.AUTH_TOKEN}`)

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
       * so when the user visits "/answer", if he has voted, no query will be sent to the server
       */
      client.writeData({
        query: GET_ANSWERS,
        data: {
          questionItems: updatedQuestionItems,
          hasVoted: true,
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
        console.log(localData)
        return (
          <div>
            {loading && <p>Loading...</p>}
            {data && <p>THANK YOU</p>}
            {hasError && (
              <span className="small">
                Please answer all questions before submiting
              </span>
            )}
            {localData && localData.hasVoted === true ? (
              <p>Thank you for participating.</p>
            ) : (
              <BSubmitButton
                action={() => updateVotes(apolloUpdateVotes, client)}
                loading={loading}
                error={error}
                data={data}
              />
            )}

            {error && <p>{error.message}</p>}
          </div>
        )
      }}
    </Mutation>
  )
}

export default BSubmit

import React, { useContext, useState } from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"

import BSubmitButton from "components/bizzUI/submit/BSubmitButton"
import bizzContext from "contexts/bizzContext"

//prettier-ignore
const UPDATE_VOTES_MUTATION = gql`
  mutation UpdateQuestionItem (
    $questionId: ID!,
    $questionTotalVotes: Int!,
    $optionId: ID!,
    $optionVotes: Int!
    ) {
    updateQuestionItem(
      where: {
        id: $questionId
      }
      data:{
        totalVotes: $questionTotalVotes
        options:{
          update:[{
            where:{
              id: $optionId
            }
            data:{
              votes: $optionVotes
            }
          }]
        }
      }
    ){
      totalVotes
      options {
        id
        votes
      }
    }
  }
`
const allQuestionsHaveAnswer = questions => {
  let passed = true
  questions.forEach(question => {
    const hasAnswer = question.options.some(option => option.checked === true)
    if (!hasAnswer) passed = false
  })
  return passed
}

const BSubmit = () => {
  const context = useContext(bizzContext)
  const { stateQuestionItems } = context.bizzState
  const [hasError, setError] = useState(false)

  const afterVoting = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setTimeout(context.setHasVoted(true), 0)
  }

  const updateVotes = mutation => {
    console.log("updateVotes called")
    if (allQuestionsHaveAnswer(stateQuestionItems)) {
      setError(false)
      stateQuestionItems.forEach(question => {
        const updatedQuestionTotalVotes = parseInt(question.totalVotes) + 1
        const checkedOption = question.options.filter(
          option => option.checked === true
        )
        const checkedOptionId = checkedOption[0].id
        const updatedOptionVotes = parseInt(checkedOption[0].votes) + 1

        const mutationVariables = {
          variables: {
            questionId: question.id,
            questionTotalVotes: updatedQuestionTotalVotes,
            optionId: checkedOptionId,
            optionVotes: updatedOptionVotes,
          },
        }
        mutation(mutationVariables)
        afterVoting()
      })
    } else {
      setError(true)
    }
  }
  return (
    <Mutation mutation={UPDATE_VOTES_MUTATION}>
      {(apolloUpdateVotes, { loading, error, data }) => {
        return (
          <div>
            {loading && <p>Loading...</p>}
            {data && <p>THANK YOU</p>}
            {hasError && (
              <span className="small">
                Please answer all questions before submiting
              </span>
            )}
            <BSubmitButton
              action={() => updateVotes(apolloUpdateVotes)}
              loading={loading}
              error={error}
              data={data}
            />
            {error && <p>{error.message}</p>}
          </div>
        )
      }}
    </Mutation>
  )
}

export default BSubmit

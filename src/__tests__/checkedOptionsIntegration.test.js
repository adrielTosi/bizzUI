/**
 * TESTS: CHECKED FUNCTIONALITY
 * To make sure that when more than one option is clicked in the same question
 * only one is checked.
 */
import React, { useContext, useEffect } from "react"
import { render, fireEvent } from "@testing-library/react"

import BizzState from "contexts/bizzState"
import BQuizz from "components/bizzUI/BQuizz"
import BizzContext from "contexts/bizzContext"
import { questionsMapper } from "components/helpers"
import { questionItems, ids } from "../testHelpers"

/**
 * Does what BQuizz originally does: `set the questions` received by query to context
 * using a `context Action`
 */
const BQuizzWrapper = () => {
  const { stateQuestionItems } = questionItems
  const context = useContext(BizzContext)
  useEffect(() => {
    context.setQuestions(stateQuestionItems)
  }, [])
  return <BQuizz />
}

/**
 * `Simulates BQuizzContainer`, which is just a presentational component that renders
 * BQuizz with BizzState context
 * @param {Obj} initialState Additional `state` for bizzState
 * @param {Obj} providerValue Additional values for `value` prop in bizzState `Provider`
 */
const BQuizzContainer = (initialState, providerValue) => (
  <BizzState initialStateForTests={{ inTestingEnviroment: true }}>
    <BQuizzWrapper />
  </BizzState>
)

describe("Checked functionality", () => {
  test("renders without errors", () => {
    const { getByTestId } = render(<BQuizzContainer />)
    const BQuizz = getByTestId("bquizz-component")
    expect(BQuizz).toBeInTheDocument()
  })
  test("only one option is selected after clicking in more that one option", () => {
    const { getByTestId } = render(<BQuizzContainer />)

    const { firstQuestion } = ids

    const firstOptionFromFirstQuestion = getByTestId(
      `option-item-${firstQuestion.id}-${firstQuestion.options.firstId}`
    )
    const secondOptionFromFirstQuestion = getByTestId(
      `option-item-${firstQuestion.id}-${firstQuestion.options.secondId}`
    )
    // Click on first Option
    fireEvent.click(firstOptionFromFirstQuestion)
    const checkedfirstOptionFromFirstQuestion = getByTestId(
      `checked-${firstQuestion.id}-${firstQuestion.options.firstId}`
    )
    // Check if first option is checked
    expect(checkedfirstOptionFromFirstQuestion).toBeInTheDocument()

    // Click second Option
    fireEvent.click(secondOptionFromFirstQuestion)
    const checkedsecondOptionFromFirstQuestion = getByTestId(
      `checked-${firstQuestion.id}-${firstQuestion.options.secondId}`
    )
    // Check if second option is checked and the first one is not
    expect(checkedsecondOptionFromFirstQuestion).toBeInTheDocument()
    expect(checkedfirstOptionFromFirstQuestion).not.toBeInTheDocument()
  })
})

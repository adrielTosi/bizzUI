/**
 * `INTEGRATION` -
 *
 * To make sure that when more than one option is clicked in the same question
 * only one is checked.
 */
import React, { useContext, useEffect } from "react"
import { render, fireEvent } from "@testing-library/react"

import BizzState from "contexts/bizzState"
import BQuizz from "components/bizzUI/BQuizz"
import BizzContext from "contexts/bizzContext"
import { questionItems, ids, myQuestions } from "./testHelpers"

const questionOne = "QUESTION_ONE"
const questionTwo = "QUESTION_TWO"
const optionOne = "OPTION_ONE"
const optionTwo = "OPTION_TWO"

/**
 * Does what BQuizz originally does: `setQuestions()` - Set questions to context
 * @param {func} setQuestions - BizzContext action.
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
 * `Simulates BQuizzContainer`, which is just a presentational compTWOnt that renders
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

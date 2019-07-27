/**
 * `INTEGRATION` -
 *
 * To make sure that when more than one option is clicked in the same question
 * only one is checked.
 */
import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { MockedProvider } from "react-apollo/test-utils"
import wait from "waait"

import BizzState from "contexts/bizzState"
import BQuizz from "components/bizzUI/BQuizz"
import { questionItems, ids } from "./testHelpers"
import { GET_ANSWERS } from "components/querys"

/**
 * `QUERY MOCK`
 */
const mocks = [
  {
    request: {
      query: GET_ANSWERS,
    },
    result: {
      data: {
        questionItems: questionItems.stateQuestionItems,
      },
    },
  },
]

/**
 * Does what BQuizz originally does: `setQuestions()` - Set questions to context
 * @param {func} setQuestions - BizzContext action.
 */
const BQuizzWrapper = () => {
  return (
    <MockedProvider mocks={mocks} addTypename={false}>
      <BQuizz />
    </MockedProvider>
  )
}

/**
 * `Simulates BQuizzContainer`, which is just a presentational component that renders
 * BQuizz with BizzState context. The original component depends on `location` props
 * to render correctly, which is why is being mocked here.
 */
const BQuizzContainer = () => (
  <BizzState initialStateForTests={{ inTestingEnviroment: true }}>
    <BQuizzWrapper />
  </BizzState>
)

describe("Checked functionality", () => {
  test("renders without errors", async () => {
    const { getByTestId } = render(<BQuizzContainer />)
    await wait(200)
    const BQuizz = getByTestId("bquizz-component")
    expect(BQuizz).toBeInTheDocument()
  })
  test("only one option is selected after clicking in more that one option", async () => {
    const { getByTestId } = render(<BQuizzContainer />)

    const { firstQuestion } = ids
    await wait(200)

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

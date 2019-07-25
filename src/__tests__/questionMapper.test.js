/**
 * Test the functionality of questionMapper, which renders all questions
 * in both bizzUI and answers pages.
 */
import React from "react"
import { render, fireEvent } from "@testing-library/react"

import BizzContext from "contexts/bizzContext"
import { questionsMapper } from "components/helpers"
import { questionItems, hasOnlyOneCheckedOption, ids } from "./testHelpers"
import { checkSelectedOption } from "contexts/bizzActions"

/**
 * BOptionItem takes checkSelectedOption() from context to update the specific question
 * so only the clicked option is checked.
 * This additional function serves as a spy, so to make sure the function from context is called.
 * @param {Array} spyQuestionItems List of Items with checked keys in options
 * @param {String} questionId Question unique ID
 * @param {String} optionId Option unique ID
 */

const QuestionState = ({ bizzStateProps, contextValueProps }) => {
  const testCheckSelectedOption = (spyQuestionItems, questionId, optionId) => {
    const { stateQuestionItems } = checkSelectedOption(
      spyQuestionItems,
      questionId,
      optionId,
      {}
    )
    return stateQuestionItems
  }

  const { stateQuestionItems } = questionItems

  const bizzState = {
    inTestingEnviroment: true,
    stateQuestionItems,
    ...bizzStateProps,
  }
  return (
    <BizzContext.Provider
      value={{
        bizzState,
        checkSelectedOption: testCheckSelectedOption,
        ...contextValueProps,
      }}
    >
      {questionsMapper(stateQuestionItems, "")}{" "}
    </BizzContext.Provider>
  )
}

describe("questionMapper functionality", () => {
  test("Renders withour errors", () => {
    const { getByTestId } = render(<QuestionState />)
    const questionMapper = getByTestId("questions-mapper")
    expect(questionMapper).toBeInTheDocument()
  })

  test("checkselectedOption gets called when option is clicked", () => {
    const spyCheckSelectedOption = jest.fn()
    const { getByTestId } = render(
      <QuestionState
        contextValueProps={{ checkSelectedOption: spyCheckSelectedOption }}
      />
    )
    const { firstQuestion } = ids

    const firstOptionFromFirstQuestion = getByTestId(
      `option-item-${firstQuestion.id}-${firstQuestion.options.firstId}`
    )

    fireEvent.click(firstOptionFromFirstQuestion)
    expect(spyCheckSelectedOption).toHaveBeenCalled()
  })
})

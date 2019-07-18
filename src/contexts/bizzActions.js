export const setQuestions = (questions, state) => {
  return {
    ...state,
    stateQuestionItems: questions,
  }
}

export const setCheckedKeyToOptions = (questions, state) => {
  const newQuestionItems = questions.map(item => {
    return {
      ...item,
      options: item.options.map(option => {
        return {
          ...option,
          checked: false,
        }
      }),
    }
  })
  return {
    ...state,
    stateQuestionItems: newQuestionItems,
  }
}

export const uncheckAllQuestionOptions = (questions, questionId) => {
  questions.forEach(question => {
    if (question.id === questionId) {
      question.options.forEach(option => (option.checked = false))
    }
  })
  return questions
}

/**
 * TODO: WRITE UNIT TESTS
 */
export const checkSelectedOption = (questions, questionId, optionId, state) => {
  const newQuestionItems = uncheckAllQuestionOptions(questions, questionId)
  newQuestionItems.forEach(question => {
    if (question.id === questionId) {
      question.options.forEach(option => {
        if (option.id === optionId) {
          option.checked = true
        }
      })
    }
  })
  return {
    ...state,
    stateQuestionItems: newQuestionItems,
  }
}

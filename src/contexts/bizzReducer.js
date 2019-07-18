import { SET_QUESTIONS } from "./bizzTypes"

const setQuestions = (questions, state) => {
  console.log("setQuestions was called in reducer file")
  return {
    ...state,
    stateQuestionItems: questions,
  }
}

const bizzReducer = (state, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return setQuestions(action.payload, state)
    default:
      return state
  }
}

export default bizzReducer

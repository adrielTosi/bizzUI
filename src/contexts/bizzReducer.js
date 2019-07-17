import { SET_QUESTIONS } from "./bizzTypes"
const bizzReducer = (state, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      }
  }
}

export default bizzReducer

import React, { useReducer } from "react"

import BizzContext from "./bizzContext"
import bizzReducer from "./bizzReducer"

import {
  SET_QUESTIONS,
  SET_CHECKED_KEY_TO_OPTIONS,
  CHECK_SELECTED_OPTION,
} from "./bizzTypes"

const initialState = {
  stateQuestionItems: [],
}

const BizzState = ({ children }) => {
  const [bizzState, dispatch] = useReducer(bizzReducer, initialState)

  const setQuestions = questions => {
    dispatch({ type: SET_QUESTIONS, payload: questions })
  }
  const setCheckedKeyToOptions = questions => {
    dispatch({ type: SET_CHECKED_KEY_TO_OPTIONS, payload: questions })
  }
  const checkSelectedOption = (questionItems, questionId, optionId) => {
    dispatch({
      type: CHECK_SELECTED_OPTION,
      payload: {
        questionItems,
        questionId,
        optionId,
      },
    })
  }

  return (
    <BizzContext.Provider
      value={{
        bizzState,
        setQuestions,
        setCheckedKeyToOptions,
        checkSelectedOption,
      }}
    >
      {children}
    </BizzContext.Provider>
  )
}

BizzState.displayName = "BizzState.Provider"

export default BizzState

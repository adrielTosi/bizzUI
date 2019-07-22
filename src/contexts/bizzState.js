import React, { useReducer } from "react"

import BizzContext from "./bizzContext"
import bizzReducer from "./bizzReducer"

import {
  SET_QUESTIONS,
  SET_CHECKED_KEY_TO_OPTIONS,
  CHECK_SELECTED_OPTION,
  SET_HAS_VOTED,
} from "./bizzTypes"

/**
 * Wrapper with context. Wraps the whole of BizzUI components giving `Global State`.
 * @param {Obj} initialStateForTests For `tests` only
 * @param {Obj} providerValueForTests For `tests` only
 */
const BizzState = ({
  children,
  initialStateForTests,
  providerValueForTests,
}) => {
  const additionalInitialState = initialStateForTests
    ? initialStateForTests
    : {}
  const additionalProviderValue = providerValueForTests
    ? providerValueForTests
    : {}

  const initialState = {
    stateQuestionItems: [],
    hasVoted: false,
    inTestingEnviroment: false,
    ...additionalInitialState,
  }
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

  const setHasVoted = bool => {
    dispatch({ type: SET_HAS_VOTED, payload: bool })
  }

  return (
    <BizzContext.Provider
      value={{
        bizzState,
        setQuestions,
        setCheckedKeyToOptions,
        checkSelectedOption,
        setHasVoted,
        ...additionalProviderValue,
      }}
    >
      {children}
    </BizzContext.Provider>
  )
}

BizzState.displayName = "BizzState.Provider"

export default BizzState

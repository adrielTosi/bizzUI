import React, { useReducer } from "react"

import BizzContext from "./bizzContext"
import bizzReducer from "./bizzReducer"

import { SET_QUESTIONS } from "./bizzTypes"

const initialState = {
  stateQuestionItems: "statequestionitems",
}

const BizzState = ({ children }) => {
  const [bizzState, dispatch] = useReducer(bizzReducer, initialState)

  const setQuestions = questions => {
    dispatch({ type: SET_QUESTIONS, payload: questions })
  }

  return (
    <BizzContext.Provider
      value={{
        bizzState,
        setQuestions,
      }}
    >
      {children}
    </BizzContext.Provider>
  )
}

BizzState.displayName = "BizzState.Provider"

export default BizzState

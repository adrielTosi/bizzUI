import React, { useReducer } from "react"

import pContext from "./pContext"
import pReducer from "./pReducer"

const initialState = {
  current: {
    stack: true,
    projects: false,
    about: false,
    hire: false,
  },
}

const pState = ({ children }) => {
  const [pState, dispatch] = useReducer(pReducer, initialState)

  return (
    <pContext.Provider
      value={{
        pState,
      }}
    >
      {children}
    </pContext.Provider>
  )
}

export default pState

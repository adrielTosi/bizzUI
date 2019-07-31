import React, { useReducer } from "react"

import PContext from "./pContext"
import pReducer from "./pReducer"
import { SET_TABS_IDS, SET_TAB } from "./pTypes"

const initialState = {
  currentTab: "",
}

const PState = ({ children }) => {
  const [pState, dispatch] = useReducer(pReducer, initialState)

  const setTabsIds = arrayOfIds => {
    console.log(arrayOfIds)
    dispatch({ type: SET_TABS_IDS, payload: arrayOfIds })
  }

  const setTab = id => {
    dispatch({ type: SET_TAB, payload: id })
  }
  return (
    <PContext.Provider
      value={{
        pState,
        setTabsIds,
        setTab,
      }}
    >
      {children}
    </PContext.Provider>
  )
}

export default PState

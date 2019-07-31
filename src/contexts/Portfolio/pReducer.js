import { SET_TABS_IDS, SET_TAB } from "./pTypes"
import { setTabsIds, setTab } from "./pActions"

const pReducer = (state, action) => {
  const { payload } = action
  switch (action.type) {
    case SET_TABS_IDS:
      return setTabsIds(payload, state)
    case SET_TAB:
      return setTab(payload, state)
    default:
      return state
  }
}

export default pReducer

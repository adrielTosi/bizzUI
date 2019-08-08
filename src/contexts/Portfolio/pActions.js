export const setTabsIds = (ids, state) => {
  return {
    ...state,
    tabsIds: ids,
  }
}
export const setTab = (id, state) => {
  return {
    ...state,
    currentTab: id,
  }
}

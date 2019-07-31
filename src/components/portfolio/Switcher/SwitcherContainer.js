import React, { useContext, useEffect } from "react"
import pContext from "contexts/Portfolio/pContext"

const SwitcherContainer = ({ children }) => {
  const { setTabsIds, setTab } = useContext(pContext)

  useEffect(() => {
    const childrenArray = React.Children.toArray(children)
    const tabsIds = childrenArray.map(child => {
      if (child.type && child.type.name === "Tab") {
        return child.props.id
      }
      return null
    })
    setTabsIds(tabsIds)
    setTab(tabsIds[0])
  }, [])
  return <div className="row justify-content-center">{children}</div>
}

export default SwitcherContainer

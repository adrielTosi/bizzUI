import React from "react"

const Display = ({ tabs, currentTab, children }) => {
  let displayMapper = {}

  //Make sure that the mapper have a key for every tab
  tabs.forEach(tab => {
    displayMapper[tab.id] = { label: tab.label }
  })
  const displayOptionsChildren = []

  /**
   * An array with each DisplayOption. All components to be displayed below the tabs
   * are to be child of a DisplayOption component
   */
  const childrenArray = React.Children.toArray(children)
  childrenArray.map(child => {
    if (child.type && child.type.name === "DisplayOption") {
      displayOptionsChildren.push(child)
    }
  })
  /**
   * The DisplayOption component are being assigned as a value for `render` key
   * in `DisplayMapper`. This happens in the order DisplayOption happens.
   */
  tabs.forEach((tab, index) => {
    displayMapper[tab.id] = {
      ...displayMapper[tab.id],
      render: displayOptionsChildren[index],
    }
  })

  /**
   * If there is more tabs than display options, it will simply render nothing
   */
  if (displayMapper[currentTab].render) {
    return displayMapper[currentTab].render
  } else {
    return null
  }
}

export default Display
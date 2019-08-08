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
  console.log("---->")
  console.log(childrenArray)
  // eslint-disable-next-line
  childrenArray.forEach(child => {
    if (child.type && child.type.refName === "DisplayOption") {
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
  console.log(displayMapper)
  /**
   * If there is more tabs than display options, it will simply render nothing
   */
  if (displayMapper[currentTab] && displayMapper[currentTab].render) {
    console.log("Inside return option in Display")
    console.log(displayMapper[currentTab])
    return <div>{displayMapper[currentTab].render}</div>
  } else {
    return null
  }
}

export default Display

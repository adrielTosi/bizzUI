import React from "react"
import Display from "./Display"
import DisplayOption from "./DisplayOption"

const index = ({ tabs, currentTab }) => (
  <Display tabs={tabs} currentTab={currentTab}>
    <DisplayOption>Alo criançada</DisplayOption>
    <DisplayOption>Alo Malucão</DisplayOption>
    <DisplayOption>Alo Doidera</DisplayOption>
  </Display>
)

export default index

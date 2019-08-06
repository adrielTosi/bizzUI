import React from "react"

import Display from "./Display"
import DisplayOption from "./DisplayOption"
import Stack from "./Options/Stack"
import Projects from "./Options/Projects"

const index = ({ tabs, currentTab }) => (
  <div className="mt-3">
    <Display tabs={tabs} currentTab={currentTab}>
      <DisplayOption>
        <Stack />
      </DisplayOption>
      <DisplayOption>
        <Projects />
      </DisplayOption>
      <DisplayOption>Alo Doidera</DisplayOption>
    </Display>
  </div>
)

export default index

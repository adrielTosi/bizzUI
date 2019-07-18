import React from "react"

import BQuizz from "./BQuizz"
import BizzState from "contexts/bizzState"

const BQuizzContainer = () => {
  return (
    <BizzState>
      <BQuizz />
    </BizzState>
  )
}

export default BQuizzContainer

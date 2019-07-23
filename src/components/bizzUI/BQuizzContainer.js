import React from "react"

import BizzState from "contexts/bizzState"
import BSubmit from "components/bizzUI/submit/BSubmit"
import { BQuizzOrBAnswers } from "components/helpers"

/**
 * This component is rendered in both ``Answers`` and ``BizzUI`` pages
 * so it requires `location` props to see in which one it is.
 * @Renders `BQuizz` or `BAnswers` depending on the route.
 */
const BQuizzContainer = ({ location }) => {
  return (
    <BizzState>
      <div className="row">
        <div className="col-sm-12 col-md-8 order-lg-12">
          <BQuizzOrBAnswers location={location} />
          <div className="float-right">
            <BSubmit />
          </div>
        </div>
      </div>
    </BizzState>
  )
}

export default BQuizzContainer

import React from "react"

import BizzState from "contexts/bizzState"
import BSubmit from "components/bizzUI/submit/BSubmit"
import Titles from "components/Titles"
import { BQuizzOrBAnswers } from "components/helpers"

/**
 * This component is rendered in both ``Answers`` and ``BizzUI`` pages
 * so it requires `location` props to see in which one it is.
 * @Renders `BQuizz` or `BAnswers` depending on the route.
 */
const BQuizzContainer = ({ location }) => {
  const { ChosenComponent, currentPath } = BQuizzOrBAnswers(location)
  return (
    <BizzState>
      <div className="row">
        <div className="col-sm-12 col-md-8 order-lg-12">
          <Titles currentPath={currentPath} />
          {ChosenComponent()}
          <div style={{ width: "100%", maxWidth: "450px" }}>
            {currentPath === "bizzUI" && <BSubmit />}
          </div>
        </div>
        {/* {currentPath === "bizzUI" && <div className="col-md-4 col-sm-12"></div>} */}
      </div>
    </BizzState>
  )
}

export default BQuizzContainer

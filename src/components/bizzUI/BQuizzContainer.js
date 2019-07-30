import React from "react"

import BizzState from "contexts/BizzUI/bizzState"
import BSubmit from "components/bizzUI/submit/BSubmit"
import Titles from "components/common/Titles"
import Sidenav from "components/common/Sidenav"
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
        {currentPath === "bizzUI" && (
          <div className="col-12 col-md-4 order-md-12">
            <Sidenav />
          </div>
        )}
        <div className="col-12 col-md-8">
          <Titles currentPath={currentPath} />
          {ChosenComponent()}
          <div style={{ width: "100%", maxWidth: "450px" }}>
            {currentPath === "bizzUI" && <BSubmit />}
          </div>
        </div>
      </div>
    </BizzState>
  )
}

export default BQuizzContainer

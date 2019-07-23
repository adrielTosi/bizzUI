import React from "react"

import BQuizz from "./BQuizz"
import BizzState from "contexts/bizzState"
import BSubmit from "components/bizzUI/submit/BSubmit"

const BQuizzContainer = ({ location }) => {
  return (
    <BizzState>
      <div className="row">
        <div className="col-sm-12 col-md-8 order-lg-12">
          <BQuizz location={location} />
          <div className="float-right">
            <BSubmit />
          </div>
        </div>
      </div>
    </BizzState>
  )
}

export default BQuizzContainer

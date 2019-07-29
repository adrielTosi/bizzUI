import React, { useContext, useEffect, useRef } from "react"
import { Query } from "react-apollo"

import bizzContext from "contexts/bizzContext"
import ThanksMessage from "components/bizzUI/submit/ThanksMessage"
import Loading from "components/Loading"
import { questionsMapper } from "components/helpers"
import { GET_ANSWERS } from "components/querys"

/**
 * The job of this component is simply to `Query` the database or cache
 * and set the data to `context`. All the data manipulation is done in `bizzState` context.
 */
const BQuizz = ({ location }) => {
  const context = useContext(bizzContext)

  /**
   * Tracks if it's the first render of the component. It is necessary for conditionally making
   * a query and setting it to context.
   * @if `not the first render`, the data is fetched from `context`
   * @Todo `useIsFirstRender custom hook`
   */
  const firstRender = useRef(true)
  useEffect(() => {
    firstRender.current = false
  }, [])

  const contextSetup = data => {
    context.setQuestions(data.questionItems)
    context.setCheckedKeyToOptions(data.questionItems)
    if (location) {
      context.setLocationPathname(location)
    }
  }

  if (firstRender.current) {
    return (
      <Query query={GET_ANSWERS}>
        {({ error, loading, data }) => {
          if (loading) return <Loading />
          if (error) return <p>{error.message}</p>
          if (data) contextSetup(data)

          return null
        }}
      </Query>
    )
  } else {
    const { stateQuestionItems, pathname, hasVoted } = context.bizzState
    return (
      <div data-testid="bquizz-component">
        {hasVoted && <ThanksMessage />}
        {questionsMapper(stateQuestionItems, pathname)}
      </div>
    )
  }
}

export default BQuizz

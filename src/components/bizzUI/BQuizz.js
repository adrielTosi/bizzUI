import React, { useContext, useEffect, useRef } from "react"
import { Query } from "react-apollo"

import bizzContext from "contexts/bizzContext"
import { questionsMapper } from "components/helpers"
import { GET_ANSWERS } from "components/querys"

const SharedComponent = ({ stateQuestionItems, pathname }) => (
  <div data-testid="bquizz-component">
    <div className="titleContainer">
      <h3>Quizz</h3>
    </div>
    {questionsMapper(stateQuestionItems, pathname)}
  </div>
)

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
    console.log(process.env.GATSBY_AUTH_TOKEN_MUTATION)
    return (
      <Query query={GET_ANSWERS}>
        {({ error, loading, data }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>{error.message}</p>
          if (data) contextSetup(data)

          const { stateQuestionItems, pathname } = context.bizzState

          return (
            <SharedComponent
              stateQuestionItems={stateQuestionItems}
              pathname={pathname}
              context={context}
            />
          )
        }}
      </Query>
    )
  } else {
    const { stateQuestionItems, pathname } = context.bizzState
    return (
      <SharedComponent
        stateQuestionItems={stateQuestionItems}
        pathname={pathname}
      />
    )
  }
}

export default BQuizz

import React, { useContext, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Fade from "react-reveal/Fade"

import BCard from "components/bizzUI/BCard"
import BCardTitle from "components/bizzUI/BCardTitle"
import BOptions from "components/bizzUI/BOptions"
import BOptionItem from "components/bizzUI/BOptionItem"
import bizzContext from "contexts/bizzContext"

const BQuizz = () => {
  const { Bizz } = useStaticQuery(graphql`
    query {
      Bizz {
        questionItems {
          totalVotes
          id
          title
          options {
            id
            title
            votes
            subtitle
            blockWidth
            img {
              url
            }
          }
        }
      }
    }
  `)

  const context = useContext(bizzContext)

  useEffect(() => {
    context.setQuestions(Bizz.questionItems)
    context.setCheckedKeyToOptions(Bizz.questionItems)
  }, [])

  const questionsMapper = () => {
    const { stateQuestionItems } = context.bizzState
    console.log(context)

    return stateQuestionItems.map(question => (
      <Fade Bottom wait={100}>
        <BCard key={question.id}>
          <BCardTitle title={question.title} />
          <BOptions>
            {question.options.map(option => (
              <BOptionItem
                key={option.id}
                questionId={question.id}
                optionId={option.id}
                url={option.img.url}
                title={option.title}
                subtitle={option.subtitle}
                block={option.blockWidth}
                checked={option.checked}
              />
            ))}
          </BOptions>
        </BCard>
      </Fade>
    ))
  }
  return (
    <div>
      <div className="titleContainer">
        <h3>Quizz</h3>
        {context.bizzState.hasVoted && (
          <span className="display-6">Thank you for voting!</span>
        )}
      </div>
      {questionsMapper()}
    </div>
  )
}

export default BQuizz

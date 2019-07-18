import React, { useContext, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

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
          id
          title
          options {
            id
            title
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

  useEffect(() => context.setQuestions(Bizz.questionItems), [])

  const questionsMapper = () => {
    const { questionItems } = Bizz
    console.log(context)
    return questionItems.map(question => (
      <BCard key={question.id} id={question.id}>
        <BCardTitle title={question.title} />
        <BOptions>
          {question.options.map(option => (
            <BOptionItem
              key={option.id}
              id={option.id}
              url={option.img.url}
              title={option.title}
              subtitle={option.subtitle}
              block={option.blockWidth}
            />
          ))}
        </BOptions>
      </BCard>
    ))
  }
  return questionsMapper()
}

export default BQuizz

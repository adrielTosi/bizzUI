import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import { createUseStyles } from "react-jss"

import BCard from "components/bizzUI/BCard"
import BCardTitle from "components/bizzUI/BCardTitle"
import BOptions from "components/bizzUI/BOptions"
import BOptionItem from "components/bizzUI/BOptionItem"
// const useStyles = createUseStyles({
//   container: {
//     width: 960,
//     margin: "1em auto",
//   },
// })

const BQuizz = () => {
  const { Bizz } = useStaticQuery(graphql`
    query {
      Bizz {
        questionItems {
          id
          title
          totalVotes
          options {
            id
            title
            subtitle
            votes
            img {
              url
            }
          }
        }
      }
    }
  `)
  const questionsMapper = () => {
    const { questionItems } = Bizz
    return questionItems.map(question => (
      <BCard key={question.id}>
        <BCardTitle title={question.title} />
        <BOptions>
          {question.options.map(option => (
            <BOptionItem
              key={option.id}
              url={option.img.url}
              title={option.title}
              subtitle={option.subtitle}
            />
          ))}
        </BOptions>
      </BCard>
    ))
  }
  return questionsMapper()
}

export default BQuizz

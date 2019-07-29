import React from "react"
import Fade from "react-reveal/Fade"
import BCard from "components/bizzUI/BCard"
import BCardTitle from "components/bizzUI/BCardTitle"
import BOptions from "components/bizzUI/BOptions"
import BOptionItem from "components/bizzUI/BOptionItem"
import BQuizz from "components/bizzUI/BQuizz"
import BAnswers from "components/bizzUI/answers/BAnswers"

/**
 * `RENDER CARD CHILDREN` divides children between two:
 * `Title`: is always displayed above and renders only the first `BCardTitle` passed to children
 * `Rest`: all the other childrens
 */
export const renderCardChildren = (children, style) => {
  const title = []
  const rest = []
  // Separates the children into Title and Rest, so title is always displayed above
  const arrayChildren = React.Children.toArray(children)
  arrayChildren.forEach(child => {
    if (child.type && child.type.name === "BCardTitle") {
      title.push(child)
    } else {
      rest.push(child)
    }
  })
  return (
    <div className={style.cardContainer}>
      <div>{title.length !== 0 && title[0]}</div>
      <div>{rest}</div>
    </div>
  )
}

/**
 * `QUESTION MAPPER`
 * @Renders all questions using the BizzUI components
 */
export const questionsMapper = (stateQuestionItems, pathname) => {
  const seeAnswersMapper = {
    "/answers": true,
    "/answers/": true,
  }
  const seeAnswers = pathname && seeAnswersMapper[pathname]
  return (
    <div data-testid="questions-mapper" style={{marginTop:"1em"}}>
      {stateQuestionItems.map(question => (
        <Fade Bottom wait={300} key={question.id}>
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
                  totalVotes={question.totalVotes}
                  optionVotes={option.votes}
                  seeAnswers={seeAnswers}
                />
              ))}
            </BOptions>
          </BCard>
        </Fade>
      ))}
    </div>
  )
}

/**
 * `BQUIZ OR BANSWERS`
 * @Renders `BQuizz` or `BAnswer` component based on the current route
 */
export const BQuizzOrBAnswers = location => {
  const { pathname } = location

  const pathNameMapper = {
    "/BizzUI": "bizzUI",
    "/BizzUI/": "bizzUI",
    "/answers": "answers",
    "/answers/": "answers",
  }

  const page = pathNameMapper[pathname]

  const Renderer = () => {
    if (page === "bizzUI") {
      return <BQuizz location={location} />
    } else if (page === "answers") {
      return <BAnswers location={location} />
    } else {
      return <p>No location or Undefined</p>
    }
  }

  return {
    ChosenComponent: () => <Renderer />,
    currentPath: page,
  }
}

/**
 * `DEFINE MUTATION VARIABLES`
 * @Defines mutation variables for using in Mutation inside `BSubmit`
 * HAS TO BE CALLED ``BEFORE REMOVING CHECKED KEYS`` FROM OPTIONS
 */
export const defineMutationVariables = question => {
  const updatedQuestionTotalVotes = question.totalVotes + 1
  const checkedOption = question.options.filter(
    option => option.checked === true
  )
  const checkedOptionId = checkedOption[0].id
  const updatedOptionVotes = checkedOption[0].votes + 1

  const mutationVariables = {
    variables: {
      questionId: question.id,
      questionTotalVotes: updatedQuestionTotalVotes,
      optionId: checkedOptionId,
      optionVotes: updatedOptionVotes,
    },
  }
  return { mutationVariables }
}

/**
 * `ALL QUESTIONS HAVE ANSWER`
 * @Return True if the user had checked one option in each question
 */
export const allQuestionsHaveAnswer = questions => {
  let passed = true
  questions.forEach(question => {
    const hasAnswer = question.options.some(option => option.checked === true)
    if (!hasAnswer) passed = false
  })
  return passed
}

/**
 * `REMOVE CHECKED KEY FROM OPTIONS`
 * @Returns the questionItems without the checked key in options
 */
export const removeCheckedKeyFromOptions = questions => {
  const newQuestionItems = questions.map(item => {
    return {
      ...item,
      options: item.options.map(option => {
        delete option.checked
        return { ...option }
      }),
    }
  })
  return newQuestionItems
}
/**
 * `UPDATE QUESTIONS AND OPTIONS VOTES`
 * @param {Array of Objects} questions stateQuestionItems from context
 * @param {Array of Objects} valuesToUpdate Updated values based on values
 *        defined by `defineMutationVariables()`
 */
export const updateQuestionsAndOptionsVotes = (questions, valuesToUpdate) => {
  const newQuestionItems = questions.map(question => {
    const valuesByQuestionId = valuesToUpdate.filter(
      groupOfValue => question.id === groupOfValue.questionId
    )
    return {
      ...question,
      totalVotes: valuesByQuestionId[0].questionTotalVotes,
      options: question.options.map(option => {
        if (option.id === valuesByQuestionId[0].optionId) {
          return {
            ...option,
            votes: valuesByQuestionId[0].optionVotes,
          }
        } else {
          return { ...option }
        }
      }),
    }
  })
  return newQuestionItems
}

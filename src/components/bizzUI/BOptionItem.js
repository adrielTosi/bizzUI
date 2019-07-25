import React, { useContext } from "react"
import { createUseStyles } from "react-jss"
import PropTypes from "prop-types"

import bizzContext from "contexts/bizzContext"
import { BOptionItemStyles } from "./jssStyles"

/**
 * BLOCK and CHECKED props are in ...PROPS
 */
const BOptionItem = ({
  url,
  title,
  subtitle,
  questionId,
  optionId,
  seeAnswers,
  totalVotes,
  optionVotes,
  ...props
}) => {
  const { checkSelectedOption, bizzState } = useContext(bizzContext)
  const useStyles =
    !bizzState.inTestingEnviroment && createUseStyles(BOptionItemStyles)

  const style = !bizzState.inTestingEnviroment ? useStyles(props) : {}

  const handleClick = () => {
    checkSelectedOption(bizzState.stateQuestionItems, questionId, optionId)
  }

  // const percentageAnswer = () => {
  //   const percentage = (optionVotes / totalVotes) * 100
  //   return `${percentage}%`
  // }

  return (
    <div
      data-testid={`option-item-${questionId}-${optionId}`}
      className={style.optionItemContainer}
      onClick={handleClick}
    >
      {props.checked && (
        // The below span is used for testing, DO NOT touch
        <span data-testid={`checked-${questionId}-${optionId}`}></span>
      )}
      <div className={style.image}>
        <img src={url} alt="img" />
      </div>
      {(title || subtitle) && (
        <div className={style.titles}>
          {title && <span className={style.title}>{title}</span>}
          {subtitle && <span className={style.subtitle}>{subtitle}</span>}
        </div>
      )}
      {seeAnswers && (
        <div className={style.titles}>
          <p>Total Votes: {totalVotes}</p>
          <p>Option Votes: {optionVotes}</p>
        </div>
      )}
    </div>
  )
}

BOptionItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  questionId: PropTypes.string.isRequired,
  optionId: PropTypes.string.isRequired,
  block: PropTypes.bool,
  checked: PropTypes.bool.isRequired,
  seeAnswers: PropTypes.bool.isRequired,
  totalVotes: PropTypes.number,
  optionVotes: PropTypes.number,
}

BOptionItem.defaultProps = {
  block: false,
}

export default BOptionItem

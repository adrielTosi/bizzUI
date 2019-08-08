import React, { useContext } from "react"
import { createUseStyles } from "react-jss"
import PropTypes from "prop-types"

import bizzContext from "contexts/BizzUI/bizzContext"
import CheckedSign from "components/common/CheckedSign"
import ProgressBar from "components/bizzUI/answers/ProgressBar"
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

  const percentageAnswer = +((optionVotes / totalVotes) * 100).toFixed(0)

  return (
    <div
      data-testid={`option-item-${questionId}-${optionId}`}
      className={style.optionItemContainer}
      onClick={handleClick}
    >
      <div className={style.insideContainer}>
        {props.checked && (
          // The below span is used for testing, DO NOT touch
          <span
            className={style.checked}
            data-testid={`checked-${questionId}-${optionId}`}
          >
            <CheckedSign checked={props.checked} />
          </span>
        )}

        <div className={style.image}>
          <img src={url} alt="img" style={{ width: "100%" }} />
        </div>

        {(title || subtitle) && !seeAnswers && (
          <div className={style.titles}>
            {title && <span className={style.title}>{title}</span>}
            {subtitle && <span className={style.subtitle}>{subtitle}</span>}
          </div>
        )}
        {seeAnswers && (
          <div
            style={{
              color: "#bdbdbd",
              fontFamily: "Montserrat",
              fontSize: "0.8em",
              marginTop: "0.7em",
            }}
          >
            {`${percentageAnswer}%`}
            <ProgressBar progress={percentageAnswer} />
          </div>
        )}
      </div>
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
  checked: PropTypes.bool,
  seeAnswers: PropTypes.bool,
  totalVotes: PropTypes.number,
  optionVotes: PropTypes.number,
}

BOptionItem.defaultProps = {
  block: false,
}

export default BOptionItem

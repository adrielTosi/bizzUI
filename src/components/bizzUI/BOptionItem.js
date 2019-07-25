import React, { useContext } from "react"
import { createUseStyles } from "react-jss"
import PropTypes from "prop-types"

import bizzContext from "contexts/bizzContext"
import CheckedSign from "components/CheckedSign"
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

  const percentageAnswer = +((optionVotes / totalVotes) * 100).toFixed(2)

  const barColor = () => {
    if (percentageAnswer < 25) return "bg-darger"
    if (percentageAnswer >= 25 && percentageAnswer <= 60) return "bg-warning"
    return "bg-success"
  }

  return (
    <div
      data-testid={`option-item-${questionId}-${optionId}`}
      className={style.optionItemContainer}
      onClick={handleClick}
    >
      <div>
        {props.checked && (
          // The below span is used for testing, DO NOT touch
          <span
            className={style.checked}
            data-testid={`checked-${questionId}-${optionId}`}
          >
            <CheckedSign checked={props.checked}/>
          </span>
        )}

        <div className={style.image}>
          <img src={url} alt="img" />
        </div>

        {(title || subtitle) && !seeAnswers && (
          <div className={style.titles}>
            {title && <span className={style.title}>{title}</span>}
            {subtitle && <span className={style.subtitle}>{subtitle}</span>}
          </div>
        )}

        {seeAnswers && (
          <div className="mt-3 mb-1" style={{ textAlign: "center" }}>
            <span>{`${percentageAnswer} %`}</span>
            <div className="progress w-100" style={{ height: "8px" }}>
              <div
                className={`progress-bar ${barColor()}`}
                style={{
                  width: `${percentageAnswer}%`,
                }}
                aria-valuenow={`${percentageAnswer}`}
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
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
  checked: PropTypes.bool.isRequired,
  seeAnswers: PropTypes.bool,
  totalVotes: PropTypes.number,
  optionVotes: PropTypes.number,
}

BOptionItem.defaultProps = {
  block: false,
}

export default BOptionItem

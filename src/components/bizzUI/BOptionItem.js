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
  ...props
}) => {
  const { checkSelectedOption, bizzState } = useContext(bizzContext)
  const useStyles =
    !bizzState.inTestingEnviroment && createUseStyles(BOptionItemStyles)

  const style = !bizzState.inTestingEnviroment ? useStyles(props) : {}

  const handleClick = () => {
    checkSelectedOption(bizzState.stateQuestionItems, questionId, optionId)
  }

  return (
    <div
      data-testid={`option-item-${questionId}-${optionId}`}
      className={style.optionItemContainer}
      onClick={handleClick}
    >
      {props.checked && (
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
}

BOptionItem.defaultProps = {
  block: false,
}

export default BOptionItem

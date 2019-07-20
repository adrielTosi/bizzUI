import React, { useContext } from "react"
import { createUseStyles } from "react-jss"
import PropTypes from "prop-types"

import bizzContext from "contexts/bizzContext"

const useStyles = createUseStyles({
  optionItemContainer: ({ block, checked }) => {
    const containerWidth = block ? "100%" : "50%"
    const flexWrap = "wrap"
    const alignItems = block ? "center" : "initial"
    const selectedBackground = checked ? "#e8f7e5" : ""
    return {
      minHeight: 80,
      width: containerWidth,
      overflow: "hidden",
      display: "flex",
      flexWrap: flexWrap,
      justifyContent: "center",
      alignItems: alignItems,
      padding: "8px",
      cursor: "pointer",
      backgroundColor: selectedBackground,
      borderRadius: 8,
    }
  },
  image: ({ block }) => {
    const display = block ? "flex" : "block"
    return {
      width: "100%",
      display: display,
      textAlign: "center",
    }
  },
  titles: {
    display: "flex",
    flexDirection: "column",
    alingItems: "center",
    textAlign: "center",
  },
  title: {
    color: "#4f4f4f",
    fontSize: "1em",
    fontFamily: "'Open Sans', sans-serif",
  },
  subtitle: {
    color: "#bdbdbd",
    fontSize: "0.7em",
    fontFamily: "'Open Sans', sans-serif",
  },
})

/**
 * BLOCK and CHECKED props are in PROPS
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

  const style = useStyles(props)

  const handleClick = () => {
    checkSelectedOption(bizzState.stateQuestionItems, questionId, optionId)
  }

  return (
    <div className={style.optionItemContainer} onClick={handleClick}>
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

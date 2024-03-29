import React from "react"
import PropTypes from "prop-types"
import { createUseStyles } from "react-jss"

const useStyle = createUseStyles({
  buttonContainer: props => {
    const basicButton = {
      height: 45,
      width: 150,
      border: "none",
      cursor: "pointer",
      borderRadius: 8,
      margin: "1em 0",
      fontFamily: "'Krup', sans-serif",
      fontSize: "1.2em",
      fontWeight: "bold",
    }
    const primaryButton = {
      ...basicButton,
      backgroundColor: "#8de971",
      color: "white",
      "&:hover": {
        backgroundColor: "#6bb952",
      },
      "&:disabled": {
        backgroundColor: "#d6e7d0",
        cursor: "auto",
      },
    }
    const secondaryButton = {
      ...basicButton,
      backgroundColor: "transparent",
      color: "#ffe366",
      border: "3px solid #ffe366",
      "&:hover": {
        backgroundColor: "#ffe366",
        border: "none",
        color: "white",
      },
      "&:disabled": {
        backgroundColor: "#f3eccf",
        cursor: "auto",
      },
    }
    const buttonMapper = {
      primary: primaryButton,
      secondary: secondaryButton,
    }
    return buttonMapper[props.type]
  },
  "& :disabled": {
    cursor: "auto",
  },
})

const BSubmitButton = ({ styles, ...props }) => {
  const style = useStyle(props)
  return (
    <button
      className={style.buttonContainer}
      style={{ ...styles }}
      onClick={props.action}
      disabled={props.disable}
    >
      {props.loading ? "..." : "Submit"}
    </button>
  )
}

BSubmitButton.propTypes = {
  color: PropTypes.string,
  type: PropTypes.string,
  action: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.object,
}

BSubmitButton.defaultProps = {
  type: "primary",
}

export default BSubmitButton

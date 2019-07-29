import Nanobar from "nanobar"
import React from "react"
import PropTypes from "prop-types"
import "styles/progressBar.scss"

/**
 * ProgressBar taken from nanobar-react and modified
 */
class ProgressBar extends React.Component {
  constructor(props) {
    super(props)

    this.placeholder = null
    this.nanobar = null
    this.state = { progress: null }
  }

  componentDidMount() {
    const { progress, mountOnBody, className } = this.props

    const nanobar = (this.nanobar = new Nanobar({
      classname: className,
      target: mountOnBody ? null : this.placeholder.parentNode,
    }))

    nanobar.go(progress)
  }

  componentWillUnmount() {
    const el = this.nanobar.el
    el.parentNode.removeChild(el)
  }

  componentWillReceiveProps(props) {
    this.nanobar.go(props.progress)
  }

  barColor = () => {
    const { progress } = this.props
    const selection =
      progress <= 10
        ? "color1"
        : progress > 10 && progress <= 20
        ? "color2"
        : progress > 20 && progress <= 30
        ? "color3"
        : progress > 30 && progress <= 40
        ? "color4"
        : progress > 40 && progress <= 50
        ? "color5"
        : progress > 50 && progress <= 60
        ? "color6"
        : progress > 60 && progress <= 70
        ? "color7"
        : progress > 70
        ? "color8"
        : ""
    return selection
  }
  render() {
    return (
      <div className={`progress-bar ${this.barColor()}`}>
        <span
          ref={c => {
            this.placeholder = c
          }}
        />
      </div>
    )
  }
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  mountOnBody: PropTypes.bool,
  className: PropTypes.string,
}

export default ProgressBar

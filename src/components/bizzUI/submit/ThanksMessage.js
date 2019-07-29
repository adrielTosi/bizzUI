import React from "react"
import congrats from "images/confetti.svg"
import "styles/ThanksMessage.scss"
import { Link } from "gatsby"

const ThanksMessage = () => {
  return (
    <div className="message-container row">
      <div className="congrats">
        <img src={congrats} height="25px" alt="congrats" />
      </div>
      <div className="action">
        <div>Thank you for voting!</div>
        <div className="your-vote">
          Your vote is really appreciated. Make sure to visit the Answers page
          and learn from it!
        </div>
        <div className="call">
          <button className="badge">
            <Link to="/answers">Answers</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ThanksMessage

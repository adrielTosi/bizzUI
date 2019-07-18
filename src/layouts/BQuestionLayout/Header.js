import React from 'react'

const Header = () => {
  return (
    <nav className="header navbar">
      <div className="container">
        <div className="col">
          <span className="lead navbar-brand">Bizz UI</span>
        </div>
        <div className="col row">
          <div className="ml-auto">
            <span>Answers</span>
            <span className="ml-5">About</span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
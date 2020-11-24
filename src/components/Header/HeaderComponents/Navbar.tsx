import React from 'react'
import "./HeaderComponents.scss"


const Navbar: React.FC = (props) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        { props.children }
      </ul>
    </nav>
  )
}

export default Navbar

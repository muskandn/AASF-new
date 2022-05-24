import React, { useState } from 'react'
import './navbar.css'
import AASFLogo from '../../assets/svgIcons/aasflogo'
import { NavLink, Link } from 'react-router-dom'

function Navbar() {
  const [click, setClick] = useState(false)
  const [screen, setScreen] = useState([])

  const handleClick = () => {
    setClick(!click)
  }

  const Close = () => {
    setClick(false)
  }

  return (
    <div>
     <div className={click ? "navbar-main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <AASFLogo/>
          </NavLink>
          <ul className={click ? "nav-menu navbar-active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/"
                className={({isActive}) => ( isActive ? "nav-links navbar-active" : "nav-links")}
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/abhishar"
                className={({isActive}) => ( isActive ? "nav-links navbar-active" : "nav-links")}
                onClick={click ? handleClick : null}
              >
                Abhishar
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/blogs"
                className={({isActive}) => ( isActive ? "nav-links navbar-active" : "nav-links")}
                onClick={click ? handleClick : null}
              >
                Blogs
              </NavLink>
            </li>
			<li className="nav-item">
              <NavLink
                exact="true"
                to="/events"
                className={({isActive}) => ( isActive ? "nav-links navbar-active" : "nav-links")}
                onClick={click ? handleClick : null}
              >
                Events
              </NavLink>
            </li>
			<li className="nav-item">
              <NavLink
                exact="true"
                to="/team"
                className={({isActive}) => ( isActive ? "nav-links navbar-active" : "nav-links")}
                onClick={click ? handleClick : null}
              >
                Team
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/contact"
                className={({isActive}) => ( isActive ? "nav-links navbar-active" : "nav-links")}
               onClick={click ? handleClick : null}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
  )
}

export default Navbar

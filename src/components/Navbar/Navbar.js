import React from 'react'
import { Link } from 'react-router-dom'
import './StyledNav.css'

const Navbar = () => {
  return (
    <>
    <nav>
      <div className="navContainer">
        
        <div className="NavHome">
          <Link to="/">OT</Link>
        </div>

        <div className="NavMenu">
          <div className="MenuItem">
            <ul>
              <li><Link to="/About">About</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="NavBtn">
          <Link to="/Projects">Projects</Link>
        </div>

      </div>
    </nav>
    </>

  )
}

export default Navbar
import React from 'react'
import {Link} from 'react-router-dom'
import './StyledNav.css'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <>
    <nav>
      <div className="navContainer">
        
        <div className="NavHome">
          <LinkStyled to="/">OT</LinkStyled>
        </div>

        <div className="NavMenu">
          <div className="MenuItem">
            <div className="theItem"><LinkStyled to="/About">About</LinkStyled></div>
            <div className="theItem"><LinkStyled to="/Contact">Contact</LinkStyled></div>          
          </div>
        </div>

        <div className="NavBtn">
          <LinkStyledd to="/Projects">Projects</LinkStyledd>
        </div>

      </div>
    </nav>
    </>

  )
}

const LinkStyled = styled(Link)`
  color: #A0A1A1;
    
    &:hover {
        color: #43BCCD;
        transition: 0.3s ease-out;
    }
`
const LinkStyledd = styled(Link)`
  color: #345995;
    
    &:hover {
        color: #43BCCD;
        transition: 0.3s ease-out;
    }
`

export default Navbar


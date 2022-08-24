import React from 'react'
import {Link as LinkStyled} from 'react-router-dom'
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
          <LinkStyled to="/Projects">Projects</LinkStyled>
        </div>

      </div>
    </nav>
    </>

  )
}

const navContainer = styled(LinkStyled)`
color: pink`

export default Navbar


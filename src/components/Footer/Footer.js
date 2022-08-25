import React from 'react'
import { FooterContainer, FooterLinksItems, FooterLinkTitle, FooterLink } from './FooterStyles'

// const button = ({children}) => {
//   <button>{children}</button>
// }

const Footer = () => {

  return (
    <FooterContainer>
      


                    <FooterLinksItems>
                    <FooterLinkTitle>OT</FooterLinkTitle>
                            
                           
                            <FooterLink to='/Contact'>Contact</FooterLink>

                            <FooterLink to='/About'>About</FooterLink>

                            <a className="Games" href='https://burn-thor.github.io/SpaceInvada/' target="_blank" rel='noreferrer'> Space Invaders</a>

                        
                    </FooterLinksItems>

  
    </FooterContainer>
  )
}

export default Footer
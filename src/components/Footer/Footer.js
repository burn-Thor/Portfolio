import React from 'react'
import { FooterContainer, FooterLinksItems, FooterLinkTitle, FooterLink, BackgroundC, Games } from './FooterStyles'

// const button = ({children}) => {
//   <button>{children}</button>
// }

const Footer = () => {

  return (
    <BackgroundC>
    <FooterContainer>
      


                    <FooterLinksItems>
                    <FooterLinkTitle>OT</FooterLinkTitle>
                            
                           
                            <FooterLink to='/Contact'>Contact</FooterLink>

                            <FooterLink to='/About'>About</FooterLink>

                            <Games href='https://burn-thor.github.io/SpaceInvada/' target="_blank" rel='noreferrer'> Space Invaders</Games>

                        
                    </FooterLinksItems>

  
    </FooterContainer>
    </BackgroundC>
  )
}

export default Footer
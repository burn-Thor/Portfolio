import React from 'react'
import {FaReact} from 'react-icons/fa'
import {SiMongodb, SiExpress, SiNodedotjs} from 'react-icons/si'
import styled from 'styled-components'



const About = () => {
  return (
    
    <Container>
    <div>
    <h2>Hello, I'm</h2>
    <br/>
    <h1>Olly</h1>
    <br/>
    <h4>a full stack software engineer | an experienced, successful tech-salesperson | a capable product manager</h4>
    <br/>
    <p>A Manchester-based tech lover who designs and builds custom online experiences, through websites and web applications.</p>
    <br/>
    <p>A bootcamp graduate, most comfortable within the MERN stack and any Jamstack application. Currently I am working through my 2nd Mongo DB accreditation (M220JS), learning C#.NET, and building multiple websites using React and Next - including a react Spotify clone and a Next pizza delivery app.</p>
    <br/>
    <p>I am looking for an exciting role within an SMB or start-up, with a purpose-driven culture that is a long-term fit. I want to use my sales and business strategy skills in conjuction with my technical abilities to create world class products .</p>
    <br/>
    <p>Having 7 years of successful commercial sales experience, including managing small sales teams, I will bring a different perspective to your department. Amongst other things, this part of my career has given me an acute awareness of what is actually important to the end user, proved my resilience and perserverance, as well as forced me to become incredibly self-disciplined.</p>
    <br/>
    <p>Prioritisation and working smartly are two crucial skills within sales, I look forward to implementing them whilst juggling the immense number of tasks ahead of me.</p>
    </div>
    </Container>

  )
}

const Container = styled.div`
  background-color: #A0A1A1;
  color: #2F3061;
  padding: 5rem;
  
  `

export default About
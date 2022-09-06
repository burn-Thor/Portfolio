import React, {useState} from 'react';
import Image from '../../img/chipMicroTransistors&Circuits.jpg';
import { LandingContainer, FullStackBg, ImageBg, FullStackContent, FsH1, FsP, FsBtnWrapper } from './LandingStyles';
import { Button } from '../ButtonElements';




const LandingSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };


  return (
    <LandingContainer>
        <FullStackBg>
            <ImageBg src={Image} type ='jpg' />
        </FullStackBg>

        <FullStackContent>
            <FsH1>Olly Thorburn</FsH1>
            
            
            
            <FsP>Disciplined, enthusiastic and creative, excited by a new challenge.</FsP>

            <FsBtnWrapper>
            <Button
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary='true'
              dark='true'
              href="/CV.pdf"
              target="_blank"
              >Open CV</Button>
            </FsBtnWrapper>

        </FullStackContent>


    </LandingContainer>



  )
}

export default LandingSection
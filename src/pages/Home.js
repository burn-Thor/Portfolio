import React from 'react'
import LandingSection from '../components/Landing/Landing'
import LayoutMain from '../components/DataSection/LayoutMain'
import { homeObjCareerHighlight, homeObjGitHub, homeObjNow, homeObjTechStack } from '../components/DataSection/Data'
import ProjectSlider from '../components/ProjectSlider/ProjectSlider'



const Home = () => {
  return (
    <>
  
    <div className="home">
        
        <LandingSection/>
        <LayoutMain {...homeObjGitHub}/>
        <ProjectSlider/>
        <LayoutMain {...homeObjTechStack}/>
        <LayoutMain {...homeObjCareerHighlight}/>
        <LayoutMain {...homeObjNow}/>
       
    </div>

    </>
  )
}

export default Home
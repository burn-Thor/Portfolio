import React from 'react'
import LandingSection from '../components/Landing/Landing'
import LayoutMain from '../components/DataSection/LayoutMain'
import { homeObjCareerHighlight, homeObjGitHub, homeObjNow, homeObjTechStack } from '../components/DataSection/Data'
import Footer from '../components/Footer/Footer'


const Home = () => {
  return (
    <>
  
    <div className="home">
        <LandingSection/>
        <LayoutMain {...homeObjGitHub}/>
        <LayoutMain {...homeObjTechStack}/>
        <LayoutMain {...homeObjCareerHighlight}/>
        <LayoutMain {...homeObjNow}/>
        <Footer />
    </div>

    </>
  )
}

export default Home
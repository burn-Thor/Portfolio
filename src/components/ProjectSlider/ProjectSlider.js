import './SliderStyles.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import {Navigation, EffectFade} from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import Drumkit from './img/Drumkit.png'
import Login from './img/Login.png'
import CRUD from './img/CRUD.png'
import GroupProject from './img/GroupProject.png'
import FacetedSearch from './img/FacetedSearch.png'
import DarkMode from './img/DarkMode.png'
import FitnessTracker from './img/FitnessTracker.png'

import React from 'react'

const ProjectSlider = () => {

  return (
   
    
    <div className='Slider'>

     
<h3>Screenshots of some projects to date.</h3>

        <Swiper modules= {[Navigation, EffectFade]}
        navigation
        effect
        speed={800}
        slidesPerView={1}
        loop
        className="MySwiper">

    <SwiperSlide className='SwiperSlide'>
        <img src = {Drumkit} alt="Drumkit in JavaScript" />
        <p>The first time within development that I was happy with the final result, this was a solo project completed in 2 days during the 4th week of bootcamp.</p>
    </SwiperSlide>
    <SwiperSlide className='SwiperSlide'>
        <img src = {Login} alt="First Login feature" />
        <p>It took me far too long to figure out this simple log in with Node.js & Express.js, oh the joy when I did!</p>
    </SwiperSlide>
    <SwiperSlide className='SwiperSlide'>
        <img src = {CRUD} alt="First workable CRUD function" />
        <p>How the code looks for my first ever CRUD functions. The brief was to use one of each CRUD commands within a custom movies REST API, you'll see shortly how this has progressed...</p>
    </SwiperSlide>
    <SwiperSlide className='SwiperSlide'>
        <img src = {GroupProject} alt="Group Project with Coding Bootcamp" />
        <p>An ecommerce website created towards the end of the bootcamp, this is a full stack project developed in a group. My role was the front-end lead.</p>
    </SwiperSlide>
    <SwiperSlide className='SwiperSlide'>
        <img src = {FacetedSearch} alt="Most advanced search functionality to date" />
        <p>Potentially the most taxing backend code I have written so far... As part of the MongoDB 220JS qualification that I started after the bootcamp, this screenshot shows some of the logic behind a faceted search option for the end user.</p>
    </SwiperSlide>
    <SwiperSlide className='SwiperSlide'>
        <img src = {DarkMode} alt="First Darkmode feature in react" />
        <p>As a ex-salesperson, it felt satisfying to code a similar platform to what I used to live in. Following a tutorial but adding my own spin, I was particularly happy with the dark mode setting.</p>
    </SwiperSlide>
    <SwiperSlide className='SwiperSlide'>
        <img src = {FitnessTracker} alt="MERN stack fitness tracker" />
        <p>It was very satisying to make something genuinely useful, albeit never used... A fitness tracker using the MERN stack with CRUD functions.</p>
    </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default ProjectSlider
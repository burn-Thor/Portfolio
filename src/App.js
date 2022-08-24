import React from 'react';
import './App.css';
import './StyledNav.css'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'



function App() {
  return (
    <div className="app">
  
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

   


    <Routes>
      <Route path ='/' element={<Home/>} />
      <Route path ='/About' element={<About />} />
      <Route path ='/Contact' element={<Contact />} />
      <Route path ='/Projects' element={<Projects />} />
    </Routes>
   
</>

</div>
    
  );
}

export default App;

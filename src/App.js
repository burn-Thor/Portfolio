import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'



function App() {
  return (
 
 
   

<div>
    <Routes>
      <Route path ='/' element={<Home/>} />
      <Route path ='/About' element={<About />} />
      <Route path ='/Contact' element={<Contact />} />
      <Route path ='/Projects' element={<Projects />} />
    </Routes>
</div>
   

    
  );
}

export default App;

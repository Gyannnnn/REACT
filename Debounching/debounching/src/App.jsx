import React from 'react'
import './App.css'
import Home from './Home'
import About from './About';
import { Router,Routes,Route} from 'react-router-dom';
import Contact from './Contact';
import { Suspense } from 'react';



function App() {
  

  return (
    <Router>
      <Suspense fallback={<div><h1>Loading ..........</h1></div>} >
        
      <Routes>
        <Route path="/"  element={<Home/>} ></Route>
        <Route path="/"  element={<About/>} ></Route>
        <Route path="/"  element={<Contact/>} ></Route>
      </Routes>
    
      </Suspense>
    </Router>
  )
}

export default App

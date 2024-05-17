import React from 'react'
import '../Styles/Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
   <header>
    <Link to="/home">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/services">Services</Link>
    <Link to="/user/tempidwiubefsib">User</Link>
   </header>
    
    
    
    </>
  )
}

export default Header
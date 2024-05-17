import React from 'react'
import '../Style/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/service">Service</Link>
    </header>
  )
}

export default Header
import React from 'react'
import logo from '../images/airbnb-ar21.png'
import "../style.css"

export default function Navbar() {
  return (
    <nav>
      <img className="nav--logo" src={logo} alt="logo"></img>
    </nav>
  )
}
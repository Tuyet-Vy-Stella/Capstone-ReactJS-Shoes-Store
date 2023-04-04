import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
   <nav className="navbar">
  <div className="wrapper">
    <NavLink to="/home" className="active">Home</NavLink>
    <a href="#">Men</a>
    <a href="#">Women</a>
    <a href="#">Kid</a>
    <a href="#">Sport</a>
  </div>
</nav>

  )
}

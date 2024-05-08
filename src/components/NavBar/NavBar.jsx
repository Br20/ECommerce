import React from "react"
import { NavLink } from  "react-router-dom"
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <NavLink to={"/home"}>Home</NavLink>
      <NavLink to="/products">Productos</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Sign Up</NavLink>
    </nav>
  )
};

export default NavBar

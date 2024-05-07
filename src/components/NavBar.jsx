import React from "react"
import { NavLink } from  "react-router-dom"

const NavBar = () => {
  return (
    <nav>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to="/products"> Productos</NavLink>
    </nav>
  )
};

export default NavBar

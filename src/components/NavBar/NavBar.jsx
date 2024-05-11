import React, { useContext } from "react"
import { NavLink } from  "react-router-dom"
import './NavBar.css'
import { userContext } from "../../context/UserContext";

const NavBar = () => {

  const { user } = useContext(userContext)

  return (
    <nav>
      <NavLink to={"/home"}>Home</NavLink>
      <NavLink to="/products">Productos</NavLink>
      {(!user)? (<NavLink to="/login">Login</NavLink>):<></>}
      <NavLink to="/register">Sign Up</NavLink>
    </nav>
  )
};

export default NavBar

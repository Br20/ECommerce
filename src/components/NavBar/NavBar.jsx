import React, { useContext } from "react"
import { NavLink } from  "react-router-dom"
import './NavBar.css'
import { userContext } from "../../context/UserContext";

const NavBar = () => {

  const { user, signOut } = useContext(userContext)



  return (
    <nav>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to="/products">Productos</NavLink>
      <NavLink to="/register">Sign Up</NavLink>
      {(!user)? (<NavLink to="/login">Login</NavLink>):(<NavLink className={"logOut-nav"} onClick={()=>signOut()}>Log out</NavLink>)}

    </nav>
  )
};

export default NavBar

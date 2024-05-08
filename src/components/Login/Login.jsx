import React from "react"
import './Login.css'
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
        <form action={(e) => e.eventPrevent}>
            <label htmlFor="">Email</label>
            <input type="text"/>
            <label htmlFor="">Password</label>
            <input type="password"/>
            <input type="submit" value="Log In" />
            <NavLink to={"/register"}>{"Sign Up"}</NavLink>
        </form>
    </div>
  )
};

export default Login

import React, { useContext } from "react"
import './Login.css'
import { userContext } from "../../context/UserContext";
import { NavLink, useNavigate} from "react-router-dom";

const Login = () => {

  const { user, loginUser } = useContext(userContext)
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault() 
    loginUser(e.target)
    if (!user) setTimeout(() => navigate('/home'), 1000)
  }

  return (
    <div className="login-container">
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Email</label>
            <input type="text" name="email"/>
            <label htmlFor="">Password</label>
            <input type="password" name="password"/>
            <input type="submit" value="Log In" />
            <NavLink to={"/register"}>{"Sign Up"}</NavLink>
        </form>
    </div>
  )
};

export default Login

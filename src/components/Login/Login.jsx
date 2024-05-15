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
    if (!user) setTimeout(() => navigate('/'), 1000)
  }

  return (
    <section className="section-login">
      <div className="login-container">
          <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email"/>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password"/>
              <input type="submit" value="Log In" />
              <NavLink to={"/register"}>{"Sign Up"}</NavLink>
          </form>
      </div>
    </section>
  )
};

export default Login

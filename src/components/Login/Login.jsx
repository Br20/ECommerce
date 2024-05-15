import React, { useContext } from "react"
import './Login.css'
import { userContext } from "../../context/UserContext";
import { NavLink, useNavigate} from "react-router-dom";

const Login = () => {

  const { user, loginUser, errorLogIn, setNewErrorLogIn, signOut} = useContext(userContext)
  if (user) ()=>signOut()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault() 
    loginUser(e.target)
    if (user) setTimeout(() => navigate('/'), 1000)
  }

  const clearError = () => setNewErrorLogIn(null)
  
  return (
    <section className="section-login">
      <div className="login-container">
          <form onSubmit={handleSubmit} onClick={clearError}>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email"/>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password"/>
              {errorLogIn?<p color="tomato">{errorLogIn}</p>:<></>}
              <input type="submit" value="Log In" />
              <NavLink to={"/register"}>{"Sign Up"}</NavLink>
          </form>
      </div>
    </section>
  )
};

export default Login

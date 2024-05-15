import React,{ useContext } from "react"
import './Register.css'
import { userContext } from "../../context/UserContext";

const Register = () => {
  const {registerUser, errorInRegister, setErrRegister} = useContext(userContext)
  const handleSubmit = (e) => {
    e.preventDefault()  
    console.log("dasd")
    registerUser(e.target)
  }

  return (
    <section className="section-register">
      <div className="register-container">
          <h2>Register Form</h2>
          <form onSubmit={handleSubmit} onClick={()=>setErrRegister(null)}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name"/>
              <label htmlFor="surname">Surname</label>
              <input type="text" name="surname" id="surname"/>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email"/>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password"/>
              <label htmlFor="passwordConfirm">Password Confirm</label>
              <input type="password" name="passwordConfirm" id="passwordConfirm"/>
              {errorInRegister ? (<p color="red">{errorInRegister}</p>):<></>}
              <input type="submit" value="Sign Up" />
          </form>
      </div>
    </section>
  )
};

export default Register

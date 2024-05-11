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
    <div className="register-container">
        <h2>Register Form</h2>
        <form onSubmit={handleSubmit} onClick={()=>setErrRegister(null)}>
            <label htmlFor="username">Name</label>
            <input type="text" name="name" />
            <label htmlFor="username">Surname</label>
            <input type="text" name="surname"/>
            <label htmlFor="username">Email</label>
            <input type="text" name="email"/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password"/>
            <label htmlFor="passwordConfirm">Password Confirm</label>
            <input type="password" name="passwordConfirm"/>
            {errorInRegister ? (<p color="red">{errorInRegister}</p>):<></>}
            <input type="submit" value="Sign Up" />
        </form>
    </div>
  )
};

export default Register

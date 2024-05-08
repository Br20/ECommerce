import React from "react"
import './Register.css'

const Register = () => {
  return (
    <div className="register-container">
        <form action="">
            <label htmlFor="username">Name</label>
            <input type="text"/>
            <label htmlFor="username">Surname</label>
            <input type="text"/>
            <label htmlFor="username">Email</label>
            <input type="text"/>
            <label htmlFor="password">Password</label>
            <input type="password"/>
            <label htmlFor="passwordConfirm">Password Confirm</label>
            <input type="password"/>
            <input type="submit" value="Sign Up" />
        </form>
    </div>
  )
};

export default Register

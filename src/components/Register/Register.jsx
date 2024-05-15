import React,{ useContext, useRef } from "react"
import { useForm } from "react-hook-form";
import './Register.css'
import { userContext } from "../../context/UserContext";

const Register = () => {
  const {registerUser} = useContext(userContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    defaultValues:{
      name: '',
      surname: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
  })

  const password = useRef(null)
  password.current= watch("password","")

  const onSubmit = handleSubmit((data) => {
    reset()
    registerUser(data)
    document.querySelector(".created-message").removeAttribute("hidden")
  })

  return (
    <section className="section-register">
      <div className="register-container">
          <h2>Register Form</h2>
          {<p className="created-message" hidden>User created Successfully</p>}
          <form onSubmit={onSubmit} >
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                {...register("name", {
                  maxLength:{
                    value:30,
                    message: "max lenght is 30 char"
                  },
                  minLength:{
                    value:2,
                    message: "min lenght is 2 char"
                  },
                })}
              />
              {errors.name && <p>{errors.name.message}</p>}
              <label htmlFor="surname">Surname</label>
              <input
                type="text"
                name="surname"
                id="surname"
                {...register("surname", {
                  maxLength:{
                    value:30,
                    message: "max lenght is 30 char"
                  },
                  minLength:{
                    value:2,
                    message: "min lenght is 2 char"
                  },
                })}
              />
              {errors.surname && <p>{errors.surname.message}</p>}
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="test@test.com"
                {...register("email", {
                  required: {
                    value:true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email format invalid"
                  },
                })}
              />
              {errors.email && <p>{errors.email.message}</p>}
              <label htmlFor="password">Password</label>
              <input
                type="text"
                name="password"
                id="password"
                {...register("password", {
                  required: {
                    value:true,
                    message: "Password is required",
                  },
                  maxLength:{
                    value:30,
                    message: "max lenght is 30 char"
                  },
                  minLength:{
                    value:6,
                    message: "min lenght is 6 char"
                  },
                })}
              />
              {errors.password && <p>{errors.password.message}</p>}
              <label htmlFor="passwordConfirm">Password Confirm</label>
              <input
                type="text"
                name="passwordConfirm"
                id="passwordConfirm"
                {...register("passwordConfirm", {
                  required: {
                    value:true,
                    message: "Password confirmation is required",
                  },
                  validate: (value) => {
                    return value === password.current || "Password must be identical"
                  }
                })}
              />
              {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
              <input type="submit" value="Sign Up" />
          </form>
      </div>
    </section>
  )
};

export default Register

import React ,{useState, createContext} from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
export const userContext = createContext(null);

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [errorLogIn, setErrorLogIn] = useState(null)
    const [errorInRegister, setErrorInRegister] = useState(null)


    const registerUser = (formData) => {
        const {email, password} = formData.elements
        createUserWithEmailAndPassword(auth, email.value, password.value)
        .then ((userCredentials) => {
            const user = userCredentials.user.email
            console.log(user)
            setErrorInRegister(null)
        })
        .catch((err) => {
            setErrorInRegister("Error during registration. Try Later.")
        })
    }

    const loginUser = (formData) => {
        const {email, password, passwordConfirm} = formData.elements
        //chequeo de password
        signInWithEmailAndPassword(auth, email.value, password.value)
        .then ((userCredentials) => {
            setUser(userCredentials.user.email)
            setErrorInRegister(null)
            setErrorLogIn(null)
        })
        .catch((err) => {
            setErrorLogIn("Email or password is incorrect ")
        })
    }

    const signOut = () => {
        auth.signOut()
        .then(()=> setUser(null))
        .catch((err) => console.error(err))
    }


    const setErrRegister = (message) => {
        setErrorInRegister(message)
    }

    return(
      <userContext.Provider value={{user, errorLogIn, errorInRegister, registerUser, loginUser, setErrRegister, signOut}}>
        {children}
      </userContext.Provider>
    )
  
}


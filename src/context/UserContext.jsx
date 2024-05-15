import React ,{useState, createContext, useContext} from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { getStoredCart } from "../services/initialProduct";
import { productContext } from "./ProductContext";
export const userContext = createContext(null);

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [errorLogIn, setErrorLogIn] = useState(null)
    const { setFullCart } = useContext(productContext)
    

    const registerUser = (formData) => {
        const {email, password} = formData
        createUserWithEmailAndPassword(auth, email, password)
        .then ((userCredentials) => {
            const user = userCredentials.user.email
        })
        .catch(() => {
            console.log("Error during registration. Try Later")
        })
    }

    const loginUser = (formData) => {
        const {email, password} = formData.elements
        //chequeo de password
        signInWithEmailAndPassword(auth, email.value, password.value)
        .then ((userCredentials) => {
            setUser(userCredentials.user.email)
            setErrorLogIn(null)
            setFullCart(getStoredCart(userCredentials.user.email))
        })
        .catch((err) => {
            setErrorLogIn("Email or password is incorrect ")
        })
    }

    const signOut = () => {
        auth.signOut()
        .then(()=> setUser(null))
        .then (()=> setFullCart([]))
        .catch((err) => console.error(err))
    }

    const setNewErrorLogIn = (message) => {
        setErrorLogIn(message)
    }

    return(
      <userContext.Provider value={{user, errorLogIn, registerUser, loginUser, signOut, setNewErrorLogIn}}>
        {children}
      </userContext.Provider>
    )
  
}


import React ,{ useEffect, useState, createContext} from "react";
import { initialProduct } from "../services/initialProduct"
export const productContext = createContext([initialProduct]);

export const ProductContextProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect (()=> {
      setIsLoading(true)
      console.log("cargando..")
      console.log(products)
      setError(null)
      fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((jsonData) => setProducts(jsonData))
      .catch((err) => {
        console.log(err)
        setError(err.message)
      })
      .finally(() => setIsLoading(false))
    }, [])

    return(
      <productContext.Provider value={{products, isLoading, error}}>
        {children}
      </productContext.Provider>
    )
  
}


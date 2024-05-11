import React ,{ useEffect, useState, createContext} from "react";
import { initialProduct } from "../services/initialProduct"
export const productContext = createContext([initialProduct]);

export const ProductContextProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [sortedAsc, setSortedAsc] = useState(false)
    const [query, setQuery] = useState("")
    const [cart, setCart] = useState([])

    const handleSort = () => {
      sortedAsc ? setProducts(products.toSorted((a,b) => a.price - b.price)): setProducts(products.toSorted((a,b) => b.price - a.price))
      setSortedAsc(!sortedAsc)
    }

    const handleQuery = (inputQuery) => setQuery(inputQuery)

    const addToCart = (newProduct) => {
      const index = cart.findIndex((item) => item.product.id === newProduct.id);
      let quantity = 1
      let copyCart = cart
      if (index !== -1) {
        const itemToChange = copyCart.splice(index,1)[0]
        quantity = itemToChange.quantity + 1
      }
      copyCart.push({product:newProduct,quantity:quantity})
      setCart(copyCart)
    }

    const removeToCart = (productIdToRemove) => {
      const index = cart.findIndex((item) => item.product.id === productIdToRemove);
      console.log("a eliminar id: "+ productIdToRemove)
      console.log(cart[index].quantity-1)
      if (cart[index].quantity === 1)
        setCart(cart.filter((prod) => prod.product.id != productIdToRemove))
      else{
        const copyCart = cart.filter((prod) => prod.product.id != productIdToRemove)
        setCart([...copyCart,{product:cart[index].product, quantity:cart[index].quantity-1}])
      }
    }

    useEffect (()=> {
      setIsLoading(true)
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
      <productContext.Provider value={{products, isLoading, error, sortedAsc, handleSort, query, handleQuery, cart, addToCart, removeToCart }}>
        {children}
      </productContext.Provider>
    )
  
}


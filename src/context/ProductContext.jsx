import React ,{ useEffect, useState, createContext} from "react";
import { initialProduct, getStoredCart } from "../services/initialProduct"
export const productContext = createContext([initialProduct]);

export const ProductContextProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [sortedAsc, setSortedAsc] = useState(false)
    const [query, setQuery] = useState("")
    const [cart, setCart] = useState(getStoredCart())

    const handleSort = () => {
      sortedAsc ? setProducts(products.toSorted((a,b) => a.price - b.price)): setProducts(products.toSorted((a,b) => b.price - a.price))
      setSortedAsc(!sortedAsc)
    }

    const handleQuery = (inputQuery) => setQuery(inputQuery)

    const addToCart = (newProduct, user) => {
      const index = cart.findIndex((item) => item.product.id === newProduct.id);
      let quantity = 1
      let copyCart = [...cart]
      if (index !== -1) {
        const itemToChange = copyCart[index];
        quantity = itemToChange.quantity + 1
        copyCart[index] = { ...itemToChange, quantity };
      }else{
        copyCart.push({ product: newProduct, quantity: 1 });
      }
      window.localStorage.setItem(user+"cart", JSON.stringify(copyCart))
      setCart(copyCart)
    }

    const removeToCart = (productIdToRemove, user) => {
      const index = cart.findIndex((item) => item.product.id === productIdToRemove);
      if (cart[index].quantity === 1){
        setCart(cart.filter((prod) => prod.product.id != productIdToRemove))
      }
      else{
        const copyCart = cart.filter((prod) => prod.product.id != productIdToRemove)
        setCart([...copyCart,{product:cart[index].product, quantity:cart[index].quantity-1}])
      }
      window.localStorage.setItem(user+"cart", JSON.stringify(cart))
    }

    const setFullCart = (fullCart) =>{
      setCart(fullCart)
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
      <productContext.Provider value={{products, isLoading, error, sortedAsc, handleSort, query, handleQuery, cart, addToCart, removeToCart, setFullCart }}>
        {children}
      </productContext.Provider>
    )
  
}


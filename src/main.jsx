import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import Cart from './pages/Cart.jsx'
import Login from './components/Login/Login'
import Register from './pages/Register/Register.jsx'
import ProductsList from './pages/ProductsList/ProductsList.jsx'
import { ProductContextProvider } from './context/ProductContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductContextProvider>
        <Routes>
            <Route path="/" element={<App />} >

            <Route path="/home" element={<Home/>} />

              <Route path="/cart" element={<Cart/>} />

              <Route path="/products" element={<ProductsList/>}>
                  <Route path=":productId" element={<h1>ProductIdddd</h1>}/>
              </Route>

              <Route path="/login" element={<Login/>} />

              <Route path="/register" element={<Register/>} />

              <Route path="/*" element={<h1>404 - Not Found</h1>} />

            </Route>
        </Routes>
      </ProductContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)


import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home.jsx'
import Cart from './pages/Cart.jsx'
import Login from './components/Login/Login'
import ProductsList from './pages/ProductsList/ProductsList.jsx'
import { ProductContextProvider } from './context/ProductContext.jsx'
import Register from './pages/Register/Register.jsx'

function App() {
  

  return (
    <BrowserRouter>
      <ProductContextProvider>
        <Routes>
            <Route path="/" element={<Home/>} />

            <Route path="/cart" element={<Cart/>} />

            <Route path="/products" element={<ProductsList/>} />

            <Route path="/login" element={<Login/>} />

            <Route path="/register" element={<Register/>} />

        </Routes>
      </ProductContextProvider>
    </BrowserRouter>

  )
}

export default App


import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import Products from './pages/Products.jsx'

function App() {
  

  return (
    <BrowserRouter>
      <>
        <Routes>
            <Route path="/" element={<Home/>} />

            <Route path="/cart" element={<Cart/>} />

            <Route path="/products" element={<Products/>} />

        </Routes>
      </>
    </BrowserRouter>

  )
}

export default App

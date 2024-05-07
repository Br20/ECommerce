
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import ProductsList from './pages/ProductsList/ProductsList.jsx'
import { ProductContextProvider } from './context/ProductContext.jsx'

function App() {
  

  return (
    <BrowserRouter>
      <ProductContextProvider>
        <Routes>
            <Route path="/" element={<Home/>} />

            <Route path="/cart" element={<Cart/>} />

            <Route path="/products" element={<ProductsList/>} />

        </Routes>
      </ProductContextProvider>
    </BrowserRouter>

  )
}

export default App

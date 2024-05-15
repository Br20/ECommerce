
import './App.css'
import {Routes, Route} from "react-router-dom"
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import Home from './pages/Home/Home.jsx'
import Cart from './components/Cart/Cart.jsx'
import Login from './components/Login/Login'
import Register from './components/Register/Register.jsx'
import ProductsList from './pages/ProductsList/ProductsList.jsx'
import ProductDetail from './components/ProductDetail/ProductDetail.jsx'


function App() {

  return (
    <>
      <Header />
        <Routes>
          {/* <Route path="/" element={<App />} > */}

            <Route path="/" element={<Home/>} />

            <Route path="/cart" element={<Cart/>} />

            <Route path="/products" element={<ProductsList/>}>
              <Route path=":productId" element={<ProductDetail />}/>
            </Route>

            <Route path="/login" element={<Login/>} />

            <Route path="/register" element={<Register/>} />

            <Route path="/*" element={<h1>404 - Not Found</h1>} />

          {/*</Route>*/}
        </Routes>
      <Footer />
    </>
  )
}

export default App

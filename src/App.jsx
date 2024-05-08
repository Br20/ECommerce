
import './App.css'
import { Outlet } from "react-router-dom"
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'

function App() {

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App

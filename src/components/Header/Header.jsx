import React from "react"
import NavBar from "../NavBar/NavBar";
import logo from '../../assets/logo.png'
import './Header.css'

const Header = () => {
  return (
    <header>
        <div>
            <img src={ logo } alt="Logo mercado restrictivo" />
            <h1>Mercado Restrictivo</h1>
        </div>
        <NavBar />
    </header>
  )
};

export default Header

import React from "react"
import NavBar from "../NavBar/NavBar";
import logo from '../../assets/logo.svg'
import './Header.css'

const Header = () => {
  return (
    <header>
        <div>
            <img src={ logo } alt="Black Market Logo" />
            <h1>Black Market</h1>
        </div>
        <NavBar />
    </header>
  )
};

export default Header

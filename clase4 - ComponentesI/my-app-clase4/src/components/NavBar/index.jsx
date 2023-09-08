import React from "react";
import './styles.css';
import Input from "../Input";
import CartWidget from "../CartWidget";

const NavBar = () => {
    return(
        <ul>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
            <Input/>
            <CartWidget/>
        </ul>
    )
}
export default NavBar
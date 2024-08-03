import { useState } from "react"
const Header = () => {

const [btnLoginTxt,setBtnLogin] = useState("Login");
    return (
    <div className="header">
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq6FvMgTV6lXSizDbBkn9L3cLoxjdvK8O9EOVIxg7O129OafrA-qkm-8bzxwge-vUcXvg&usqp=CAU">
        </img>
        <div className="nav-bar">
        <ul >
            <li>Home</li>
            <li>Profile</li>
            <li>Contact Us</li>
            <li>About</li>
            <li>Cart</li>
            <li><button className="login-btn" onClick={() => { 
                btnLoginTxt === "Login" 
                ? setBtnLogin("Logout")
                : setBtnLogin('Login') 
                }} 
                >
                    {btnLoginTxt}
                </button> 
            </li>
        </ul>
        </div>
    </div>)
}

export default Header
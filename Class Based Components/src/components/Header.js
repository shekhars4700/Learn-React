import { useState } from "react"
import { Link } from "react-router-dom";
import Contact from "./Contact";

const Header = () => {

const [btnLoginTxt,setBtnLogin] = useState("Login");
    return (
    <div className="header">
        <img className="logo" src="https://about.grubhub.com/wp-content/uploads/2022/03/JET_Grubhub_logo_horizontal-_sRGB-R-Orange.png">
        </img>
        <div className="nav-bar">
        <ul >
            <li><Link to="/">Home</Link></li>
            <li> <Link to="/Profile">Profile</Link></li>
            <li> <Link to="/contact">Contact Us</Link></li>
            <li><Link to="/about">About</Link></li>
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
import { useState } from "react"
import { Link } from "react-router-dom";
import Contact from "./Contact";

const Header = () => {

const [btnLoginTxt,setBtnLogin] = useState("Login");
    return (
    <div className="flex  justify-between">
        <img className="w-56 h-20" src="https://about.grubhub.com/wp-content/uploads/2022/03/JET_Grubhub_logo_horizontal-_sRGB-R-Orange.png">
        </img>
        <div className="nav-bar">
        <ul className="flex ml-4 p-10" >
            <li className="ml-4"><Link to="/">Home</Link></li>
            <li className="ml-4"> <Link to="/Profile">Profile</Link></li>
            <li className="ml-4"> <Link to="/contact">Contact Us</Link></li>
            <li className="ml-4"><Link to="/about">About</Link></li> 
            <li className="ml-4">Cart</li>
            <li><button className="ml-4" onClick={() => { 
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
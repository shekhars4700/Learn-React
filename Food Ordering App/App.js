import React from "react";
import  ReactDom from "react-dom"
import data from "./UberEatsData.json"

const HeaderComponent = () => {
    return (
    <div className="header">
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq6FvMgTV6lXSizDbBkn9L3cLoxjdvK8O9EOVIxg7O129OafrA-qkm-8bzxwge-vUcXvg&usqp=CAU">
        </img>
        <div className="nav-bar">
        <ul >
            <li>Home</li>
            <li>Profile</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
        </div>
    </div>)
}




const RestaurantCard = (props) => {
    const {resData} = props;
    
    const
    
    return(
        <div className="res-card">
            <img className="res-card-img" src="https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1110,c_fill" >
            </img>
            <h3>Meghana Foods</h3>
            <h4>Italian</h4>
            <h4>3.2/5</h4>
        </div>
    )
}




const BodyComponent = () =>{
    return(
        <div className="body">
            <div className="Search"> Search </div>
                <div className="res-container">
                {
                    data.map(res => <RestaurantCard key={res.uuid} resData = {res}/> )
                }    
                
            </div>
        </div>
    )
}




const MainAppComponent = () => {
    return (
        <div>
    <HeaderComponent/>
    <BodyComponent/>
    </div>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<MainAppComponent/>)
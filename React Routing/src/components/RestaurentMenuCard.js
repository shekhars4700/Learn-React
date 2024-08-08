import { useState, useEffect, useParams } from "react-router"

import { useState, useEffect } from "react"




const RestaurantMenu = () => {
 const {resId} = useParams();
const [menuDetails,setMenuDetails] = useState([]);
 const Swiggy_Menu_URL = "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"

 useEffect(() => {
    fetchMenu();

 },[])

const fetchMenu = async ()=> {
    const swiggyData =await fetch(Swiggy_Menu_URL)
    const menuData = await swiggyData.json();
    console.log(menuData);
}

 console.log(resId);

 return(
        <div>
            <h1>Resurent Name</h1>
            <h3>Cousine</h3>
            <h2>Menu</h2>
            <ul>
                <li>Item 1  Cost: 124214</li>
                <li>Item 1  Cost: 124214</li>
                <li>Item 1  Cost: 124214</li>
                <li>Item 1  Cost: 124214</li>
                <li>Item 1  Cost: 124214</li>
                <li>Item 1  Cost: 124214</li>
                <li>Item 1  Cost: 124214</li>
                <li>Item 1  Cost: 124214</li>
                <li>Item 1  Cost: 124214</li>
            </ul>
        </div>

    )
}

export default RestaurantMenu;
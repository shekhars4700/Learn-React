import {useParams } from "react-router";
import {useState, useEffect } from "react"
import Shimmer from "./Shimmer";





const RestaurantMenu = () => {
 const {resId} = useParams();
 const [menuDetails,setMenuDetails] = useState(null);
 const [restaurentDetails,setRestaurentDetails] = useState(null);
 const Swiggy_Menu_URL = "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"

 
 
const fetchMenu = async ()=> {
    const swiggyData =await fetch(Swiggy_Menu_URL)
    const menuData = await swiggyData.json();
    const MenuDetailsList =  menuData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
    setMenuDetails(MenuDetailsList);
    setRestaurentDetails(menuData.data.cards[2].card.card)
    console.log(restaurentDetails);
    console.log(menuDetails);
}

 useEffect(() => {
    fetchMenu();

 },[])

 if(restaurentDetails== null || menuDetails == null) {
    return <Shimmer></Shimmer>
 }
const {name,cuisines,costForTwoMessage} = restaurentDetails.info;
 
const {itemCards } = menuDetails;
 console.log(restaurentDetails);
 console.log(menuDetails);
  

 console.log(resId);

 return(
        <div>
            <h1>{name}</h1>
            <h3>{cuisines.join(', ')}</h3>
            <h2>{costForTwoMessage}</h2>
            <ul>
                {itemCards.map((x) =>
                     (<li key={x.card.info.id}> {x.card.info.name}</li>))}
            </ul>
        </div>

    )
}

export default RestaurantMenu;
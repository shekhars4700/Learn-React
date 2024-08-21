import {useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu.js"

 const RestaurantMenu = () => {
 
 const {resId} = useParams();
 const menuData = useRestaurantMenu(resId);
 if(menuData?.cards == null) {
    return <Shimmer></Shimmer>
 }
 
 const restaurentDetails= menuData.cards[2].card.card;
 const menuDetails = menuData.cards.find(card => card.hasOwnProperty('groupedCard')).groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
 const {name,cuisines,costForTwoMessage} = restaurentDetails.info;
 const {itemCards } = menuDetails;

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
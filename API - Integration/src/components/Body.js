import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () =>{
  const [resDataList,setResDataList] = useState([]);
  useEffect(()=> {swiggyData()},[])  

  const swiggyData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json()
    const swiggyData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants; 
    setResDataList(swiggyData);
  }

  if(resDataList.length === 0){
    return <Shimmer/>
  }

  return(
        <div className="body">
            <div className="filter"> 
                <button className="filter-btn" 
                // onClick={()=>{ setResDataList(zomatoData.filter(x=> x.info.rating.aggregate_rating > 4.2));}}
                >Top Rated Restaurant</button>    
             </div>
                <div className="res-container">
                {
                    resDataList.map(res => <RestaurantCard key={res.info.id} resData = {res.info}/> )
                }    
            </div>
        </div>
    )
}

export default Body
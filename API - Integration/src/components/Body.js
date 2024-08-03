import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () =>{
 const [resDataList,setResDataList] = useState([]);
 const [filteredResDataList,setFilteredResDataList] = useState([]);
 const[searchText,setSearchText] = useState("");


 useEffect(()=> {swiggyData()},[])  

  const swiggyData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json()
    const swiggyData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants; 
    setResDataList(swiggyData);
    setFilteredResDataList(swiggyData);
  }

  if(filteredResDataList.length === 0){
    return <Shimmer/>
  }

  return(
        <div className="body">
            <div className="filter-rst-btn"> 
                <button className="filter-btn" 
                onClick={()=>{ swiggyData()}}
                >Reset</button>    
             </div>
             <div className="filter-search-txt">
                <input type="text" className="search-txt" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                <button className="search-btn" onClick={ ()=>{setFilteredResDataList(resDataList.filter(x=> x.info.name.toLowerCase().includes(searchText.toLowerCase())))}}>Search</button>
             </div>

            <div className="filter-top-btn"> 
                <button className="filter-btn" 
                onClick={()=>{ setResDataList(filteredResDataList.filter(x=> x.info.avgRating > 4.2));}}
                >Top Rated Restaurant</button>    
             </div>
                <div className="res-container">
                {
                    filteredResDataList.map(res => <RestaurantCard key={res.info.id} resData = {res.info}/> )
                }    
            </div>
        </div>
    )
}

export default Body
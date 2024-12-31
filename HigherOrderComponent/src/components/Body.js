import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js"
const Body = () =>{
 const [resDataList,setResDataList] = useState([]);
 const [filteredResDataList,setFilteredResDataList] = useState([]);
 const[searchText,setSearchText] = useState("");


 useEffect(()=> {swiggyData()},[])  
  const swiggyData = async () => {
    const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING") 
    const json = await data.json()
    const swiggyData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants; 
    setResDataList(swiggyData);
    setFilteredResDataList(swiggyData);
  }
  const isOnline = useOnlineStatus();

  if(!isOnline){
    return (
        <div>
            <h1>Your App is offline!!</h1>
            <h2>Please Check Internet Connection</h2>
        </div>
    ); 
  }

  if(filteredResDataList.length === 0){
    return <Shimmer/>
  }

  return(
        <div className="body">
            <div className="flex body-filter">
             <div className="search m-4 px-3 ">
                <input type="text" className="border border-black border-solid" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                <button className="px-3 m-2 bg-green-300 rounded-lg" onClick={ ()=>{setFilteredResDataList(resDataList.filter(x=> x.info.name.toLowerCase().includes(searchText.toLowerCase())))}}>Search</button>
             </div>

                <div className="m-4 px-3 flex items-center" >
                <button className="px-3 m-2 bg-gray-400 rounded-lg" 
                onClick={()=>{ setResDataList(filteredResDataList.filter(x=> x.info.avgRating > 4.2));}}
                >Top Rated Restaurant</button>    
                </div>
             </div>
                <div className="flex flex-wrap">
                {
                    filteredResDataList.map(res => <Link key={res.info.id} to={"/RestaurentMenu/" + res.info.id} ><RestaurantCard resData = {res.info}/> </Link> )
                }    
            </div>
        </div>
    )
}

export default Body
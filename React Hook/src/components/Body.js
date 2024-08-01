import RestaurantCard from "./RestaurantCard";
import zomatoData from "../utils/mockData";
import { useState } from "react";


const Body = () =>{
  const [resDataList,setresDataList] = useState(zomatoData);
    return(
        <div className="body">
            <div className="filter"> 
                <button className="filter-btn" 
                onClick={()=>{ setresDataList(zomatoData.filter(x=> x.info.rating.aggregate_rating > 4.2));}}
                >Top Rated Restaurant</button>    
             </div>
                <div className="res-container">
                {
                    resDataList.map(res => <RestaurantCard key={res.info.resId} resData = {res.info}/> )
                }    
            </div>
        </div>
    )
}
export default Body
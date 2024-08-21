import { useEffect,useState } from "react";
import {SWIGGY_MENU_URL} from "./constants"

const useRestaurantMenu = (resId) =>{
    const [menuData,setMenuData] = useState(null);
     
    useEffect(() => {
        fetchData();
     },[])

     const fetchData = async ()=> {
        const swiggyData =await fetch(SWIGGY_MENU_URL +resId)
        const json = await swiggyData.json();
        const allData = json.data; 
        setMenuData(allData);
     }
     return menuData;
}
export default useRestaurantMenu;
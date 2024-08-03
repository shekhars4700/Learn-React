import { IMAGE_CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
    const {resData} = props;
    console.log(resData)
    return(
        <div className="res-card">
            <img className="res-card-img" src={IMAGE_CDN_URL + resData.cloudinaryImageId} >
            </img>
            <h3>{resData.name}</h3>
            <h4>{resData.cuisines?.join(", ")}</h4>
            <h4>{resData.costForTwo}</h4>
            <h4>{resData.avgRating}</h4>
        </div>
    )
}
export default RestaurantCard
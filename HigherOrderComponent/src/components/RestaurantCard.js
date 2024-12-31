import { IMAGE_CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
    const {resData} = props;
    return(
        <div className="m-4 w-52 p-4 bg-gray-200 hover:bg-gray-400">
            <img className="" src={IMAGE_CDN_URL + resData.cloudinaryImageId} >
            </img>
            <h3 className="font-bold p-1 text-lg">{resData.name}</h3>
            <h4>{resData.cuisines?.join(", ")}</h4>
            <h4>{resData.costForTwo}</h4>
            <h4>{resData.avgRating}</h4>
        </div>
    )
}
export default RestaurantCard
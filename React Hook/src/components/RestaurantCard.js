

const RestaurantCard = (props) => {
    const {resData} = props;

    return(
        <div className="res-card">
            <img className="res-card-img" src={resData.image.url} >
            </img>
            <h3>{resData.name}</h3>
            <h4>{resData.cuisine.map(x=> x.name).join(", ")}</h4>
            <h4>{resData.cfo.text}</h4>
            <h4>{resData.rating.rating_text}</h4>
        </div>
    )
}

export default RestaurantCard
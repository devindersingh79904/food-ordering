import React from "react";

const styleCard = {
    backgroundColor: '#f0f0f0',
}

const RestaurantCard = (props)=>{
    const {restData} = props;
    const IMG_URL="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    const { name, cloudinaryImageId ,cuisines ,costForTwo ,avgRating , sla:{slaTime}} = restData?.info;
    return (
    <div className="rest-card" style={styleCard}>
        <img className="rest-logo" alt="rest-img" src={`${IMG_URL}${cloudinaryImageId}`} />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{slaTime} minutes</h4>
    </div>
    )
}


export default RestaurantCard;
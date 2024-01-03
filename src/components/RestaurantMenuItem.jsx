import { IMG_URL } from '../utils/constants';
const RestaurantMenuItem = (props) => {
    console.log(props); 
    const {name,price,defaultPrice,imageId} = props.info;
    return (
        <div className="RestaurantMenuItem">
            <div className="restaurantMenuItem-info">
                <h3>{name} - Rs {price/100 || defaultPrice / 100}</h3>
                <img className="restaurant-menu-img" src={IMG_URL+imageId} alt={name} />
            </div>
        </div>
    );
};

export default RestaurantMenuItem;

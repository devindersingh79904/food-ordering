import RestaurantCard from "./RestaurantCard";
import {restaurantsArray} from '../utils/mockData';
const Body = ()=> (
    <div className="body">
        <div className="search">
            <input type="text" placeholder="Search for restaurants" />
            <button>Search</button>
        </div>
        <div className="rest-container">
                {restaurantsArray.map((restData,index)=> (
                <RestaurantCard key={index} restData={restData} />
                ))}
        </div>
    </div>
);

export default Body;


import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantsArray } from "../utils/mockData";
import Shimmer from "./Shimmer";
import {SWIGGY_API_URL} from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants,setFilteredRestaurants] = useState([]); // [
  const [searchtext, setSearchtext] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // setTimeout(() => {
      //   setListOfRestaurants(restaurantsArray);
      // }, 1000);
      
      const data = await fetch(SWIGGY_API_URL);
      const dataJson = await data.json();
      //console.log(dataJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      const allRestaurants = dataJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      // console.log(allRestaurants);
      setListOfRestaurants(allRestaurants);
      setFilteredRestaurants(allRestaurants);
    } catch (err) {
      console.log(err);
    }
  };
  const onButtonClick = () => {
    setFilteredRestaurants(
      listOfRestaurants.filter((rest) => rest.info.avgRating >= 4.5)
    );
  };
  const onGetAll = () => {
    setFilteredRestaurants(listOfRestaurants);
  };

  const searchBtnClick = () => {
    const searchedRest = listOfRestaurants.filter((rest) =>
      rest.info.name.toLowerCase().includes(searchtext)
    );
    setFilteredRestaurants(
      searchedRest
    );
  }

  if (filteredRestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <>
      <div className="body">
        <div className="filter">
          <div className="search">
            <input
              id="search-input"
              type="text"
              placeholder="Search for restaurants"
              className="search-input"
              value={searchtext}
              onChange={(e) => setSearchtext(e.target.value)}
            />
            <button onClick={searchBtnClick}>Search</button>
          </div>
          <button className="filter-btn" onClick={onButtonClick}>
            Top Rated Restaurants
          </button>
          <button className="filter-btn" onClick={onGetAll}>
            GetAll Restaurants
          </button>
        </div>
        <div className="rest-container">
          {filteredRestaurants?.map((restData) => (
            <RestaurantCard key={restData?.info?.id} restData={restData} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;

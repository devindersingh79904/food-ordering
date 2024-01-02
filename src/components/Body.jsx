import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantsArray } from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchtext, setSearchtext] = useState("");
  useEffect(() => {
    console.log("i am in useeffect ");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setTimeout(() => {
        setListOfRestaurants(restaurantsArray);
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };
  const onButtonClick = () => {
    setListOfRestaurants(
      listOfRestaurants.filter((rest) => rest.info.avgRating >= 4.1)
    );
  };
  const onGetAll = () => {
    setListOfRestaurants([...restaurantsArray]);
  };

  const searchBtnClick = () => {
    console.log(searchtext);
    console.log("search",searchtext)
    const searchedRest = listOfRestaurants.filter((rest) =>
      rest.info.name.toLowerCase().includes(searchtext)
    );
    console.log(searchedRest);
    setListOfRestaurants(
      searchedRest
    );
  }

  if (listOfRestaurants.length === 0) {
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
          {listOfRestaurants?.map((restData) => (
            <RestaurantCard key={restData?.info?.id} restData={restData} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;

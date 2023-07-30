import { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import { RestaurantList } from "../config";
import Shimmer from "./shimmer";

const filtered = (searchText, restaurants) => {
  return restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filterdRestraunts, setFilteredRestraunts] = useState([]);
  const [allRestraunts, setAllRestraunts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);
      setFilteredRestraunts(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setAllRestraunts(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(`Alas! we got an Error: ${error}`);
    }
  }

  if (!allRestraunts) return null;

  return allRestraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="searchContainer">
        <input
          type="text"
          className="searchInput"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="searchButton"
          onClick={() => {
            //filter the data
            const filteredData = filtered(searchText, allRestraunts);
            //update the data
            setFilteredRestraunts(filteredData);
          }}
        >
          Search
        </button>
      </div>
      <div className="restraunts">
        {filterdRestraunts.length == 0 ? (
          <h1>No Restraunt found</h1>
        ) : (
          filterdRestraunts?.map((restraunt) => {
            return (
              <RestrauntCard key={restraunt?.info?.id} {...restraunt.info} />
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
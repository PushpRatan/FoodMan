import { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import { RestaurantList } from "../config";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { filtered } from "../utils/helper";

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

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Tbh, You are offline buddy</h1>;
  }

  if (!allRestraunts) return null;

  return allRestraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <div className="w-fit m-auto">
          <input
            type="text"
            className="w-96 bg-gray-100 rounded-l-2xl py-2 px-4 mb-9"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-yellow-100 py-2 px-4 rounded-r-2xl font-semibold text-gray-600"
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
      </div>
      <div className="flex flex-wrap justify-center">
        {filterdRestraunts.length == 0 ? (
          <h1>No Restraunt found</h1>
        ) : (
          filterdRestraunts?.map((restraunt) => {
            return (
              <Link
                key={restraunt?.info?.id}
                to={`/restraunt/${restraunt?.info?.id}`}
              >
                <RestrauntCard key={restraunt?.info?.id} {...restraunt.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;

import { useState } from "react";
import RestrauntCard from "./RestrauntCard";
import { RestaurantList } from "../config";

const filtered = (searchText, restaurants) => {
  return RestaurantList.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restraunts, setRestraunts] = useState(RestaurantList);
  console.log(restraunts);

  return (
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
            const filteredData = filtered(searchText, restraunts);
            //update the data
            setRestraunts(filteredData);
          }}
        >
          Search
        </button>
      </div>
      <div className="restraunts">
        {restraunts.map((restraunt) => {
          return <RestrauntCard key={restraunt.data.id} {...restraunt.data} />;
        })}
      </div>
    </>
  );
};

export default Body;

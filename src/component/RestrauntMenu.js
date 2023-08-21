import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { BASE_URL } from "../config";
import useRestraunt from "../utils/useRestraunt";

const RestrauntMenu = () => {
  const param = useParams();
  const { id } = param;

  const restaurantAndMenu = useRestraunt(id);
  console.log(restaurantAndMenu);

  const restraunt = restaurantAndMenu[0];
  const menu = restaurantAndMenu[1];

  return !restraunt ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div className="menuHead">
        <h1>{restraunt.name}</h1>
        <img src={BASE_URL + restraunt.cloudinaryImageId} />
      </div>
      <div className="menuItems">
        <h1>Menu</h1>
        {!menu ? (
          <h2>Loading...</h2>
        ) : (
          <ul>
            {menu.map((card) => (
              <li key={card?.card?.info?.id}>{card?.card?.info?.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RestrauntMenu;

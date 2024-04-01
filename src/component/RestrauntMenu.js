import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { BASE_URL } from "../config";
import useRestraunt from "../utils/useRestraunt";
import { addItem, clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import FoodCard from "./FoodCard";

const RestrauntMenu = () => {
  const param = useParams();
  const { id } = param;

  const restaurantAndMenu = useRestraunt(id);
  console.log(restaurantAndMenu);

  const restraunt = restaurantAndMenu[0];
  const menu = restaurantAndMenu[1];

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return !restraunt ? (
    <Shimmer />
  ) : (
    <div className="m-5">
      <div className="w-[500px] m-auto text-center rounded-md overflow-hidden shadow-[rgba(60,_64,_67,_0.3)_0px_1px_2px_0px,_rgba(60,_64,_67,_0.15)_0px_1px_3px_1px]">
        <h1 className="text-3xl font-bold font-sans p-3 bg-gray-500 text-yellow-300">
          {restraunt.name}
        </h1>
        <img src={BASE_URL + restraunt.cloudinaryImageId} className="" />
      </div>
      <div className="menuItems">
        <h1 className="text-center mt-5 text-2xl font-bold underline">Menu</h1>
        {!menu ? (
          <h2>Loading...</h2>
        ) : (
          <div className="flex flex-wrap justify-center">
            {menu.map((card) => (
              <div className="relative">
                <FoodCard
                  key={card?.card?.info?.id}
                  {...card?.card?.info}
                />
                <button
                  className="bg-green-200 m-2 text-sm px-1 rounded-r-md absolute bottom-5 left-3"
                  onClick={() => handleAddItem(card?.card?.info)}
                >
                  Add Item
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestrauntMenu; 

import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestraunt = (id) => {
  const [restraunt, setRestraunt] = useState(null);
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    getRestrauntDetail();
  }, []);

  async function getRestrauntDetail() {
    try {
      const data = await fetch(FETCH_MENU_URL + id);
      const json = await data.json();
      console.log(json);
      setRestraunt(json?.data?.cards[2]?.card?.card?.info);
      setMenu(
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card?.itemCards
      );
      console.log(menu);
    } catch (error) {
      console.log(error);
    }
  }

  return [restraunt, menu];
};

export default useRestraunt;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { base_URL } from "../config";

const RestrauntMenu = ()=>{
    const param = useParams();
    const {id} = param;

    const [restraunt, setRestraunt] = useState(null);
    const [menu, setMenu] = useState(null);

    useEffect(()=>{
        getRestrauntDetail();
    },[])

    async function getRestrauntDetail(){
        try {
            const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5135084&lng=88.402884&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
            const json= await data.json();
            console.log(json);
            setRestraunt(
                json?.data?.cards[0]?.card?.card?.info
            )
            setMenu(
                json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
            )
            console.log(menu);
        } catch (error) {
            console.log(error);
        }
    }


    return (!restraunt) ? <Shimmer /> : (
        <div className="menu">
            <div className="menuHead">
                
            <h1>{restraunt.name}</h1>
            <img src={base_URL + restraunt.cloudinaryImageId} />
            </div>
            <div className="menuItems">
                <h1>Menu</h1>
                {(!menu) ? <h2>Loading...</h2> : <ul>{menu.map((card)=><li key={card?.card?.info?.id}>
                    {card?.card?.info?.name}
                </li>)}</ul>}
            </div>
        </div>
    )
}

export default RestrauntMenu;
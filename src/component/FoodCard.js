import { BASE_URL } from "../config";

const FoodCard = ({ imageId, name }) => {
  return (
    <div className="bg-slate-50 w-80 h-72 m-5 p-2 shadow-[rgba(33,_35,_38,_0.1)_0px_10px_10px_-10px] hover:shadow-[rgba(60,_64,_67,_0.3)_0px_1px_2px_0px,_rgba(60,_64,_67,_0.15)_0px_1px_3px_1px] rounded-lg">
      <img src={BASE_URL + imageId} className="rounded-lg h-4/6 w-full" />
      <div className="p-2 text-center">
        <h2 className="text-lg font-semibold pb-[2px]">{name}</h2>
      </div>
    </div>
  );
};

export default FoodCard;

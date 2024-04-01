import { useSelector } from "react-redux";
import store from "../utils/store";
import FoodCard from "./FoodCard";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items || []);
  console.log(cartItems);
  return (
    <>
      <h1 className="text-center text-3xl font-semibold underline">Cart</h1>
      <div className="flex flex-wrap justify-center">
        {cartItems.map((items) => {
          return <FoodCard {...items} />;
        })}
      </div>
    </>
  );
};

export default Cart;

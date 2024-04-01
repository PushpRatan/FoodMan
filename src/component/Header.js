import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <h1 id="head1" key="h1" className="text-3xl font-serif font-bold">
      Food<span className="text-yellow-400">MAN</span>
    </h1>
  </a>
);

const Header = () => {
  const [auth, setAuth] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between gap-3 bg-black items-center py-4 px-24 text-white mb-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <Title />
      <ul className="flex flex-wrap gap-5 justify-center text-2xl font-semibold">
        <li>
          <Link to={"/"} className="navLinks">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/about"} className="navLinks">
            About
          </Link>
        </li>
        <li>
          <Link to={"/contact"} className="navLinks">
            Contact
          </Link>
        </li>
        <li>
          <Link to={"/cart"} className="navLinks">
            Cart
            <span className="m-1 align-top bg-white text-black rounded-full box-border text-sm px-[9px] py-[3px]">
              {cartItems.length}
            </span>
          </Link>
        </li>
      </ul>
      {auth ? (
        <button
          className="w-24 text-xl font-semibold"
          onClick={() => setAuth(false)}
        >
          Logout
        </button>
      ) : (
        <button
          className="w-24 text-xl font-semibold"
          onClick={() => setAuth(true)}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;

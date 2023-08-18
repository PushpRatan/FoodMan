import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <h1 id="head1" key="h1">
      Food<span style={{ color: "#ffd700" }}>MAN</span>
    </h1>
  </a>
);

const Header = () => {
  const [auth, setAuth] = useState(false);
  return (
    <div className="header">
      <Title />
      <ul>
        <li><Link to={"/"} className="navLinks">Home</Link></li>
        <li><Link to={"/about"} className="navLinks">About</Link></li>
        <li><Link to={"/contact"} className="navLinks">Contact</Link></li>
        <li><Link to={"/cart"} className="navLinks">Cart</Link></li>
      </ul>
      {auth ? (
        <button className="logBtn" onClick={() => setAuth(false)}>
          Logout
        </button>
      ) : (
        <button className="logBtn" onClick={() => setAuth(true)}>
          Login
        </button>
      )}
    </div>
  );
};

export default Header;

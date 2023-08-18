import { useEffect, useState } from "react";

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
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
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

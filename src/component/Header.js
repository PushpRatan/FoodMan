const Title = () => (
  <a href="/">
    <h1 id="head1" key="h1">
      Food<span style={{ color: "#ffd700" }}>MAN</span>
    </h1>
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
      <button>Login</button>
      <button>Logout</button>
    </div>
  );
};

export default Header;

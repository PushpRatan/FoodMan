/*
** APP LAYOUT **

-- Header
  -- Logo (left side).
  -- Nav Items (right side).
  -- Add to cart 
-- Body
  -- Search Button
  -- Restaurant Card
    -- Image
    -- Name
    -- Rating
    -- Cusines
-- Footer
  -- References
  -- Links
  -- Contact us
  -- Copyright
*/

import React from "react";
import ReactDOM from "react-dom/client";

// Header
const Title = () => (
  <a href="/">
    <h1 id="head1" key="h1">
      Food<span style={{ color: "#ffd700" }}>MAN</span>
    </h1>
  </a>
);

const Header = () => (
  <div className="header">
    <Title />
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Cart</li>
    </ul>
  </div>
);

// Body

const cardDetail = {
  name: "Domino's",
  img: "https://imgmedia.lbb.in/media/2020/11/5fa17943d511fc4b649fcfc2_1604417859096.jpg",
  cuisines: ["Pizza", "FastFood"],
  rating: "3.8",
};

const RestrauntCard = () => (
  <div className="card">
    <img src={cardDetail.img} />
    <div className="cardDetails">
      <h2 className="cardTitle">{cardDetail.name}</h2>
      <h3 className="type">{cardDetail.cuisines.join(", ")}</h3>
      <h4 className="rating">{cardDetail.rating} star</h4>
    </div>
  </div>
);

const Body = () => (
  <div className="restraunts">
    <RestrauntCard />
    <RestrauntCard />
    <RestrauntCard />
    <RestrauntCard />
    <RestrauntCard />
    <RestrauntCard />
    <RestrauntCard />
    <RestrauntCard />
    <RestrauntCard />
    <RestrauntCard />
    <RestrauntCard />
    <RestrauntCard />
    <RestrauntCard />
    <RestrauntCard />
  </div>
);

//Footer

const Footer = () => (
  <div className="footer">
    <h3 style={{ marginTop: "40px" }}>Footer</h3>
  </div>
);

// App Layout

const AppLayout = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([<AppLayout />]);

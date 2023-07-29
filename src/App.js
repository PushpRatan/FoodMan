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
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

// App Layout
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([<AppLayout />]);

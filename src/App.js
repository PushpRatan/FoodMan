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

import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import About from "./component/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./component/Error";
import Contact from "./component/Contact";
import RestrauntMenu from "./component/RestrauntMenu";

// App Layout
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter= createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path:"/",
        element: <Body />
      },
      {
        path:"/about",
        element: <About />
      },
      {
        path:"/contact",
        element: <Contact />
      },
      {
        path:"/restraunt/:id",
        element: <RestrauntMenu />
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import APOD from "../pages/APOD";
import MarsRover from "../pages/MarsRover";
import AsteroidWatch from "../pages/AsteroidWatch";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/apod",
      element: <APOD />,
    },
    {
      path: "/mars-rover",
      element: <MarsRover />,
    },
    {
      path: "/asteroid-watch",
      element: <AsteroidWatch />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;

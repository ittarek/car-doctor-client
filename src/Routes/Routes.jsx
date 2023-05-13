import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import ChackOut from "../pages/ChackOut/ChackOut";
import Bookings from "../pages/Bookings/Bookings";
import PrivetRout from "./PrivetRout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SingUp></SingUp>,
      },
      {
        path: "/checkOut/:id",
        element: <PrivetRout><ChackOut></ChackOut></PrivetRout>,
        loader: ({ params }) =>
          fetch(`https://car-doctor-server-ittarek.vercel.app/services/${params.id}`),
      },
      {
        path: "/bookings",
        element: (
          <PrivetRout>
            {" "}
            <Bookings></Bookings>
          </PrivetRout>
        ),
      },
    ],
  },
]);

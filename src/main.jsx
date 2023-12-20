import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Components/Home/Home";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
      //   path: "/login",
      //   element: <Login></Login>,
      // },
      // {
      //   path: "register",
      //   element: <Register></Register>,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="w-[1100px] mx-auto">
      <RouterProvider router={router} />
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  </React.StrictMode>
);

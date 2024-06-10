import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Overview } from "./pages/Overview.tsx";
import { StartPage } from "./pages/StartPage.tsx";
import { Groups } from "./pages/Groups.tsx";
import { GroupDetails } from "./pages/GroupDetails.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: "overview",
    element: <Overview />,
  },
  {
    path: "groups",
    element: <Groups />,
  },
  {
    path: "group-details",
    element: <GroupDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

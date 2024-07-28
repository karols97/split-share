import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Overview } from "./pages/Overview.tsx";
import { StartPage } from "./pages/StartPage.tsx";
import { Groups } from "./pages/Groups.tsx";
import { GroupDetails } from "./pages/GroupDetails.tsx";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";

import "./index.css";
import "./i18n.ts";
import "./store/server.ts";

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
    path: "groups/:id",
    element: <GroupDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

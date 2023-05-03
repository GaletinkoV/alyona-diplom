import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "../pages/Login";
import AppLayout from "../components/AppLayout";
import GeneralPage from "../pages/General";
import AnketaPage from "../pages/Anketa";

const Router = () => {
  const isLoggedIn = true;

  const router = createBrowserRouter(
    isLoggedIn
      ? [
          {
            path: "/",
            element: <AppLayout />,
            children: [
              {
                index: true,
                element: <GeneralPage />,
              },
              {
                path: "/anketa",
                element: <AnketaPage />,
              },
            ],
          },
        ]
      : [
          {
            path: "/",
            element: <LoginPage />,
          },
        ]
  );

  return <RouterProvider router={router} />;
};

export default Router;

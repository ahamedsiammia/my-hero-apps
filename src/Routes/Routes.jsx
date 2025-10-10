import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import ErrorPage from "../Pages/ErrorPage";
import Installation from "../Pages/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    hasErrorBoundary:<p>Loading...</p>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch('./Apps.json')
      },
      {
        path:"/Apps",
        Component:Apps
      },
      {
        path:"/Installation",
        Component:Installation
      }
    ],
  },
]);

export default router;

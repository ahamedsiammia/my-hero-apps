import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import ErrorPage from "../Pages/ErrorPage";
import Installation from "../Pages/Installation";
import AppsDetailes from "../Pages/AppsDetailes";
import DetailError from "../Pages/DetailError";

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
        Component: Home
      },
      {
        path:"/Apps",
        Component:Apps
      },
      {
        path:"/Installation",
        Component:Installation
      },
      {
        path:"/AppsDetailes/:id",
        Component: AppsDetailes,
        errorElement:<DetailError></DetailError>
      }
    ],
  },
]);

export default router;

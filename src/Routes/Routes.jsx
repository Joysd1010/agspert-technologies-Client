import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/Error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <p>Hello</p>,
      },
      {
        path: "/dash",
        element: <p>dash</p>,
      },
      {
        path:'*',
        element:<ErrorPage/>
      }
    ],
  },
]);

export default router;

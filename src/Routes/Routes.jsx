import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/Error/ErrorPage";
import Login from "../Pages/Authentication/Login";
import Privateroute from "../ProtectedRoute/Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/active",
        element: (
          <Privateroute>
            <p>Hello</p>
          </Privateroute>
        ),
      },
      {
        path: "/dash",
        element: <p>dash</p>,
      },
      {
        path: "/dash",
        element: <p>dash</p>,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;

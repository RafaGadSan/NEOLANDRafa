import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import {
  CheckCode,
  Dashboard,
  ForgotPassword,
  Home,
  Login,
  Profile,
  Register,
} from "../pages/index.js";
import ProtectedCheckChildren from "../components/ProtectedCheckChildren.jsx";
import Protected from "../components/Protected.jsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: (
          <Protected>
            <Profile />
          </Protected>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <Protected>
            <Dashboard />
          </Protected>
        ),
      },
      {
        path: "/forgotPassword",
        element: <ForgotPassword />,
      },
      {
        path: "/verifyCode",
        element: (
          <ProtectedCheckChildren>
            <CheckCode />
          </ProtectedCheckChildren>
        ),
      },
    ],
  },
]);

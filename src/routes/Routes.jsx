import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import SignUp from "../pages/Login/SignUp";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
          {
            path: '/login',
            element:<Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
    ]
  },
]);

export default router;
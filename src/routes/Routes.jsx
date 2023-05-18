import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import SignUp from "../pages/Login/SignUp";
import Login from "../pages/Login/Login";
import Error404 from "../layouts/Error404";


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
    ],
        errorElement:<Error404></Error404>

  },
]);

export default router;
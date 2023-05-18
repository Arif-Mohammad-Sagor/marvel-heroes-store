import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import SignUp from "../pages/Login/SignUp";
import Login from "../pages/Login/Login";
import Error404 from "../layouts/Error404";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blogs/Blog";
import AllToys from "../pages/AllToys/AllToys";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader: () => fetch(`http://localhost:5000/allToys`)
      },
    ],
    errorElement: <Error404></Error404>,
  },
]);

export default router;
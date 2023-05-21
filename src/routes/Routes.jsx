import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import SignUp from "../pages/Login/SignUp";
import Login from "../pages/Login/Login";
import Error404 from "../layouts/Error404";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blogs/Blog";
import AllToys from "../pages/AllToys/AllToys";
import SingleToy from "../pages/SingleToy/SingleToy";
import PrivateRoute from "./PrivateRoute";
import AddAToy from "../pages/AddToys/AddAToy";
import MyToys from "../pages/MyToys/MyToys";
import UpdateToy from "../pages/ToysAction/UpdateToy";


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
        loader: () =>
          fetch(`https://assignment-11-server-flax.vercel.app/allToys`),
      },
      {
        path: "/singleToys/:id",
        element: (
          <PrivateRoute>
            <SingleToy></SingleToy>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-flax.vercel.app/singleToy/${params.id}`
          ),
      },
      {
        path: "/addaToy",
        element: (
          <PrivateRoute>
            <AddAToy></AddAToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateToys/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-flax.vercel.app/singleToy/${params.id}`
          ),
      },
    ],
    errorElement: <Error404></Error404>,
  },
]);

export default router;
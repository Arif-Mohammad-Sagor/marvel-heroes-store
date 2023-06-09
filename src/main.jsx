import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import AuthProviders from "./AuthContextProviders/AuthProviders";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="md:max-w-5xl mx-auto">
      <AuthProviders>
        <RouterProvider router={router}></RouterProvider>
      </AuthProviders>
    </div>
  </React.StrictMode>
);

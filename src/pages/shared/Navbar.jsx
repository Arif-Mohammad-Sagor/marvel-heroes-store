import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../AuthContextProviders/AuthProviders";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);

  const handleLogout = () => {
    logOut()
      .then((res) => {
        console.log(res);
        navigate('/');
      })

      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="navbar bg-slate-100 px-6 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/allToys">All-Toys</NavLink>
            </li>

            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            {user ? (
              <li>
                <NavLink to="/myToys">My-Toys</NavLink>
              </li>
            ) : (
              <></>
            )}
            {user ? (
              <li>
                <NavLink to="/addToy"> AddToys</NavLink>
              </li>
            ) : (
              <></>
            )}
          </ul>
        </div>
        <img src={logo} alt="company-logo" className="ro" />
        <p className="md:text-2xl ml-4 font-semibold font-serif"> Toys-Mart</p>
      </div>
      <div className="lg:ml-64 hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/allToys">All-Toys</NavLink>
          </li>

          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          {user ? (
            <li>
              <NavLink to="/myToys">My-Toys</NavLink>
            </li>
          ) : (
            <></>
          )}
          {user ? (
            <li>
              <NavLink to="/addaToy"> AddToys</NavLink>
            </li>
          ) : (
            <></>
          )}
        </ul>
      </div>
      <div className="navbar-end ">
        <div className="flex justify-center items-center">
          <span className="flex items-center gap-x-1">
            {user ? (
              <>
                <img
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={user?.displayName}
                  src={user.photoURL}
                  className="w-8 h-8 rounded-full bg-gray-500"
                />
                <Tooltip id="my-tooltip" />

                <button className="btn btn-primary " onClick={handleLogout}>
                  {" "}
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-primary  ">
                  Login
                </Link>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

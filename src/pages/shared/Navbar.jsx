import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-10">
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
              <NavLink> Home</NavLink>
            </li>
            <li>
              <NavLink>Item 2</NavLink>
            </li>
            <li>
              <NavLink>Item 3</NavLink>
            </li>
          </ul>
        </div>
        <img src={logo} alt="company-logo" className="ro"/>
       <p className="text-3xl ml-4 font-semibold"> Toys-Mart</p>
      </div>
      <div className="lg:ml-64 hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/toys">All-Toys</NavLink>
          </li>

          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/myToys">My-Toys</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <ul className="flex justify-center items-center">
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>user</li>

          <li>
            {" "}
            <button>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

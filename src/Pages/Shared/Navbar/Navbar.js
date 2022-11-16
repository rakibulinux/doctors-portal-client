import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const menueItems = (
    <>
      <li>
        <NavLink className="bg-white text-black" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="bg-white text-black" to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className="bg-white text-black" to="/appointment">
          Appointment
        </NavLink>
      </li>
      <li>
        <NavLink className="bg-white text-black" to="/reviews">
          Reviews
        </NavLink>
      </li>
      <li>
        <NavLink className="bg-white text-black" to="/contact">
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink className="bg-white text-black" to="/login">
          LogIn
        </NavLink>
      </li>
      <li>
        <NavLink className="bg-white text-black" to="/register">
          Register
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar flex justify-between bg-base-100">
      <div className="">
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
            {menueItems}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost normal-case text-xl">
          Doctors Portal
        </NavLink>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menueItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;

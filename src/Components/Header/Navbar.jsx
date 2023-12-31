/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        {" "}
        <NavLink to={"/"}>Explore All About Me</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div
        className="navbar"
        style={{
          background: "linear-gradient(to right, black 75%, #CC5500 25%)",
        }}
      >
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl text-orange-500">
            SuNaN's Portfolio
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

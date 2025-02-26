import { Link } from "react-router-dom";
import NavItems from "./navItems";
export default function Navbar() {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-10 shadow">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 shadow"
          >
            <NavItems />
          </ul>
        </div>
        <Link to="/">
          <div className="w-20">
            <img
              src="https://res.cloudinary.com/dhjkntuy2/image/upload/v1740067849/Unique%20Solution/only-images/logo_n5brpl.png"
              alt="Image missing"
            />
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavItems />
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn">
          LogIn
        </Link>
      </div>
    </div>
  );
}

import React, { useContext } from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../pages/Providers/AuthProviders";

const NavBar = () => {
  const { user, logOUt } = useContext(AuthContext);
  const handleLogOut = () => {
    logOUt()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navItem = (
    <>
      <li>
        <Link to="/">Home</Link>{" "}
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      {user?.email ? (
        <Link to='/login'>
          <button onClick={handleLogOut} className="btn">LogOut</button>
        </Link>
      ) : (
        <li>
          <Link to="/logIn">SignIn</Link>
        </li>
      )}
      <li>
        <Link to='/signUp'>SignUp</Link>
      </li>
      <li>
        <Link to='/bookings'>Bookings</Link>
      </li>

      {user?.email && <p>{user.email}</p>}
    </>
  );
  return (
    <div className="navbar bg-base-100 h-24 mb-4">
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
            {navItem}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Appointment</a>
      </div>
    </div>
  );
};

export default NavBar;

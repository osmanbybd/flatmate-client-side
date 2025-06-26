import React, { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/user.png";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // const {darkMode, handleThemeChange} = useContext(ThemeContext)

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
        alert("logout");
      })
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <li>
        <NavLink className="text-xl font-semibold text-black" to="/">
          Home
        </NavLink>
      </li>
      
     
      <li>
        <NavLink className="text-xl font-semibold text-black" to="allListing">
          All Listing
        </NavLink>
      </li>
      
    
      {
        user && <>
        <li>
        <NavLink className="text-xl font-semibold text-black" to="/dashboard">
          Dashboard
        </NavLink>
      </li>
          <li>
        <NavLink className="text-xl font-semibold text-black" to="browsListing">
          Brows Listing
        </NavLink>
      </li>
        </>
      }
    </>
  );

  return (
    <div className="navbar bg-violet-300 sticky container mx-auto ">
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
              {" "}
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
            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            {links}

            {user ? (
              <Link>
                <button className="btn btn-error" onClick={handleLogOut}>
                  Log out
                </button>
              </Link>
            ) : (
              <Link to="login">
                {" "}
                <button className="btn btn-primary">Log in</button>
              </Link>
            )}
          </ul>
        </div>
        <Link className=" lg:text-4xl md:text-2xl text-xl flex items-center justify-center gap-2 ">
          <FaHome className="text-[#9e4ee9] -mr-2" /> Room
          <span className="text-[#9e4ee9]">Mate</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end hidden lg:flex gap-3">
        {/* <div><button 
      className='cursor-pointer' 
      onClick={() =>handleThemeChange(darkMode ? 'light' : 'dark')}
      >
        {
          darkMode ?<MdLightMode size={25} /> : <MdDarkMode size={25} /> 
        }
        </button></div> */}

        {user ? (
          <div className="dropdown dropdown-center">
            <div tabIndex={0} role="button" className="cursor-pointer m-1">
              <img
                className="w-12 rounded-full h-12"
                src={`${user ? user.photoURL : logo}`}
                alt=""
              />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>{user.displayName}</a>
              </li>
              <li>
                <Link to={`/profile?email=${user.email}`}>Profile</Link>
              </li>
              <li>
                <Link>
                  <button className="btn btn-error" onClick={handleLogOut}>
                    Log out
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link to="login">
              {" "}
              <button className="btn bg-[#9e4ee9] text-violet-100 font-bold">Log in</button>
            </Link>
            <Link to="register">
              <button className="btn bg-violet-600 text-violet-100 font-bold">Register</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default React.memo(Navbar);

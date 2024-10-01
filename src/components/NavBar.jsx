import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; // Import the ThemeContext

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Get theme and toggleTheme from context

  return (
    <div className={`navbar ${theme === 'dark' ? 'bg-black text-white' : 'bg-neutral-300'} text-gray-800`}>
      <div className="navbar-start">
        {/* Dropdown Menu for Mobile */}
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
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/project">Project</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Tharun</a>
      </div>

      {/* Center Nav Menu for Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/service">Service</Link></li>
          <li><Link to="/project">Project</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>

      {/* Theme Toggle with Icon */}
      <div className="navbar-end">
        <button
          onClick={toggleTheme}
          className="btn btn-ghost p-2 rounded-full"
        >
          {theme === 'dark' ? (
             <i className="bx bx-moon text-blue-500 text-2xl"></i> // Moon icon for light theme
          ) : (
            <i className="bx bx-sun text-yellow-400 text-2xl"></i> // Sun icon for dark theme
          )}
        </button>
      </div>
    </div>
  );
};

export default NavBar;

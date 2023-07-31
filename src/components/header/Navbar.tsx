import React from 'react';
import clsx from 'clsx';
import { NavLink, useLocation } from 'react-router-dom';
const Navbar = () => {
  const location = useLocation();
  return (
    <div>
      <ul className="flex items-center space-x-8 sm:text-2xl text-sm text-white">
        <li>
          <NavLink className={clsx(location.pathname === '/' && 'text-red-700 font-bold')} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={clsx(location.pathname === '/users' && 'text-red-700 font-bold')}
            to="/users"
          >
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            className={clsx(location.pathname === '/weather' && 'text-red-700 font-bold')}
            to="/weather"
          >
            Weather
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

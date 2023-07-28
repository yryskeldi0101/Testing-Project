import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <ul className="flex items-center space-x-8 text-2xl text-white">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/weather">Weather</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

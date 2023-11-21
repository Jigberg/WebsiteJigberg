
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="p-4 text-white absolute z-10 w-screen flex justify-between">
      <div className="text-2xl font-bold ">Your Logo</div>
      <nav className=''>
        <ul className="flex space-x-4">
          <li className="hover:text-gray-300">

            <NavLink to="/" className={({ isActive }) =>
              isActive ? "text-green-600 text-3xl" : ""
            }>Home</NavLink>

          </li>
          <li className="hover:text-gray-300">

            <NavLink to="/kitten" className={({ isActive }) =>
              isActive ? "text-green-600 text-3xl" : ""
            }>Kitten</NavLink>

          </li>
          <li className="hover:text-gray-300">Services</li>
          <li className="hover:text-gray-300">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

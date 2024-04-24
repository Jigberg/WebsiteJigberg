import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavigationItem: React.FC<{ to: string; text: string }> = ({
  to,
  text,
}) => (
  <li className="hover:text-gray-300 w-24 flex items-center justify-center">
    <NavLink to={to} className={({ isActive }) => (isActive ? "text-xl" : "")}>
      {text}
    </NavLink>
  </li>
);

const Header: React.FC = () => {
  return (
    <header className="absolute z-10 w-screen flex justify-between">
      <div className="w-24 pl-4 pt-4">
        <svg
          viewBox="0 0 303 113"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hover:animate-wiggle"
        >
          <path
            d="M5 108L95.9053 28.7282C96.2819 28.3997 96.8431 28.3997 97.2197 28.7282L188.125 108M125.862 53.0866L179.612 5.58233C179.989 5.24933 180.554 5.2479 180.933 5.57901L298 108"
            stroke="white"
            stroke-width="12"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <nav className="pt-4 pr-4 text-white">
        <ul className="flex">
          <NavigationItem to="/" text="Home" />
          <NavigationItem to="/viewModel" text="Models" />
          <NavigationItem to="/rat" text="Rat" />
          <NavigationItem to="/notFound" text="Contact" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;

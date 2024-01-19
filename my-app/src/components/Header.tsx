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
      <div className="text-2xl font-bold ">Your Logo</div>
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

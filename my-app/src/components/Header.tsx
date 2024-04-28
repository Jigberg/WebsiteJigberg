import React, { useState, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";

const NavigationItem: React.FC<{ to: string; text: string }> = ({
  to,
  text,
}) => (
  <li className="hover:text-gray-300 w-24 flex items-center justify-center">
    <NavLink to={to} className={({ isActive }) => (isActive ? "underline" : "")}>
      {text}
    </NavLink>
  </li>
);

const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="absolute z-10 w-screen justify-between">
      {isMobile ? (
        <nav className="text-white pt-4 px-5">
          <ul className="flex flex-row justify-between">
            <NavigationItem to="/" text="Home" />
            <NavigationItem to="/viewModel" text="Models" />
            <NavigationItem to="/rat" text="Rat" />
            <NavigationItem to="/notFound" text="Contact" />
          </ul>
        </nav>
      ) : (
        <nav className="pt-6 px-4 text-white font-roboto text-xl">
          <ul className="flex">
            <NavigationItem to="/" text="Home" />
            <NavigationItem to="/viewModel" text="Models" />
            <NavigationItem to="/rat" text="Rat" />
            <NavigationItem to="/notFound" text="Contact" />
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
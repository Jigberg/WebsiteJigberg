
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="p-4 text-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">Your Logo</div>
          <nav>
            <ul className="flex space-x-4">
              <li className="hover:text-gray-300">Home</li>
              <li className="hover:text-gray-300">About</li>
              <li className="hover:text-gray-300">Services</li>
              <li className="hover:text-gray-300">Contact</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

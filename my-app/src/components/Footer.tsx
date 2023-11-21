import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="p-4 text-white absolute z-10 w-screen bottom-0">
        <div className="flex justify-between items-center">
            <p>&copy; 2023 Lukas Jigberg</p>
          <nav>
            <ul className="flex space-x-4">
              <li className="hover:text-gray-300">Privacy Policy</li>
              <li className="hover:text-gray-300">Terms of Service</li>
              <li className="hover:text-gray-300">Contact Us</li>
            </ul>
          </nav>
        </div>
    </footer>
  );
};

export default Footer;
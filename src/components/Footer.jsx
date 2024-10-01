import React, { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext'; // Import ThemeContext

const Footer = () => {
  const { theme } = useContext(ThemeContext); // Access the current theme

  return (
    <footer className={`${theme === "dark" ? "bg-gray-900" : "bg-gray-200"} text-white py-8`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className={`text-2xl font-bold  ${theme === "dark" ? "text-gray-300" : "text-gray-800"} text-center  mb-4`}>Tharun R</h1>
        <p className={`text-center mb-8 ${theme === "dark" ? "text-gray-300" : "text-gray-800"}`}>
          I am Tharun, and this is my personal website, consult me here.
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="https://www.linkedin.com/in/boopathi-m-34012724b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className={`${theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-800 hover:text-gray-600"}`}>
            <i className="bx bxl-linkedin text-2xl"></i>
          </a>
          <a 
            href="https://github.com/Boopathi-7"
            className={`${theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-800 hover:text-gray-600"}`}>
            <i className="bx bxl-github text-2xl"></i>
          </a>
        </div>
        <p className={`text-center ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
          &#169; 2024 Tharun. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

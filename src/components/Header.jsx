import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-2xl py-4 px-2">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <img
            className="w-16 h-auto rounded-lg"
            alt="nasa_logo"
            src="src/nasa_logo.webp"
          />
          <h1 className="text-white text-2xl font-bold tracking-wide drop-shadow-lg">
            Cosmic Dashboard
          </h1>
        </div>

        <form className="flex items-center bg-gray-700 bg-opacity-70 backdrop-blur-md rounded-full px-4 py-2 shadow-md transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-300" />
          <input
            type="text"
            placeholder="Search NASA data..."
            className="bg-transparent text-white placeholder-gray-400 outline-none ml-3 w-48 focus:w-64 transition-all duration-300"
          />
        </form>
      </div>
    </header>
  );
};

export default Header;

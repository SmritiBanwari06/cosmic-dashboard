import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="navbar bg-black shadow-sm px-6">
      <div className="flex-1 flex items-center ml-10">
        <img className="w-20 h-auto" alt="nasa_logo" src="src/nasa_logo.webp" />
        <span className="text-2xl text-white font-bold ml-4">
          Cosmic Dashboard
        </span>
      </div>

      <div className="flex-none">
        <form className="flex items-center bg-gray-800 rounded-full px-3 py-1 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search NASA data..."
            className="bg-transparent text-white placeholder-gray-400 outline-none ml-2 w-48 focus:w-64 transition-all duration-300"
          />
        </form>
      </div>
    </div>
  );
};

export default Header;

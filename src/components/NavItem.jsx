import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const NavItem = ({ icon, label }) => {
  return (
    <div className="flex items-center w-full px-4 py-3 hover:bg-black cursor-pointer transition-all">
      <FontAwesomeIcon icon={icon} className="text-lg min-w-[24px]" />
      <span className="ml-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {label}
      </span>
    </div>
  );
};

export default NavItem;

import React from "react";
import NavItem from "./NavItem";
import {
  faGauge,
  faImage,
  faRobot,
  faMeteor,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full bg-gray-800 text-white flex flex-col items-center py-6 w-16 hover:w-48 transition-all duration-300 z-50 group">
      <NavItem icon={faGauge} label="Home" />
      <NavItem icon={faImage} label="Picture of the Day" />
      <NavItem icon={faRobot} label="Mars Rovers" />
      <NavItem icon={faMeteor} label="Asteroid Watch" />
    </div>
  );
};

export default Sidebar;

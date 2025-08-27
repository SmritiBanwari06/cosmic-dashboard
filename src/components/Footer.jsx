import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer w-full mt-135 sm:footer-horizontal footer-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-2xl py-4 px-4 text-base-content">
        <aside>
          <p className="text-white">
            Copyright © {new Date().getFullYear()} - All right reserved by
            Smriti
          </p>
        </aside>
      </footer>
      ;
    </>
  );
};
export default Footer;

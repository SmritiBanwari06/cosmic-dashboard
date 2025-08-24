import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer min-h-screen sm:footer-horizontal footer-center bg-black text-base-content p-4">
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

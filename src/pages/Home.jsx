import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Sidebar from "../components/SideBar";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <>
      <Header />
      <Cards />
      {/* <Footer /> */}
      <Sidebar />
    </>
  );
};

export default Home;

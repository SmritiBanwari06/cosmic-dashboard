import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Sidebar from "../components/SideBar";
import { Canvas } from "@react-three/fiber";
import SkyBox from "../components/SkyBox";
import { OrbitControls } from "@react-three/drei";
import { API_OPTIONS } from "../utility/constant";

const APOD = () => {
  const [apodData, setApodData] = useState({
    date: "",
    title: "",
    explanation: "",
    img: "",
  });

  const apod = async () => {
    const api_key = import.meta.env.VITE_NASA_API_KEY;
    const data = await fetch(
      `/nasa/planetary/apod?api_key=${api_key}`,
      API_OPTIONS
    );
    const json = await data.json();
    const { date, title, explanation, hdurl } = json;
    setApodData({ date, title, explanation, img: hdurl });
  };

  useEffect(() => {
    apod();
  }, []);

  return (
    <>
      <Header />
      <Sidebar />
      <div className="h-screen w-screen">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <SkyBox imageURL={apodData.img} />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
        <div className="text-white absolute top-2/3 left-3/4 transform -translate-x-1/2 -translate-y-1/2 text-sm">
          <p>
            <strong>Date : </strong>
            {apodData.date}
          </p>
          <p>
            <strong>Title : </strong>
            {apodData.title}
          </p>
          <p>
            <strong>Explaination : </strong>
            {apodData.explanation}
          </p>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default APOD;

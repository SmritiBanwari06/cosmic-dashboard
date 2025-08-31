import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader, BackSide } from "three";

const SkyBox = ({ imageURL }) => {
  if (!imageURL) return null;

  const texture = useLoader(TextureLoader, imageURL);

  return (
    <mesh position={[-5, 0, 0]}>
      <sphereGeometry args={[5, 32, 32]} />
      <meshBasicMaterial map={texture} side={BackSide} />
    </mesh>
  );
};

export default SkyBox;

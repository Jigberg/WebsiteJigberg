import React from "react";
import "../components/ThreeTest";
import ModelViewer from "../components/ModelViewer";
import { View } from "@react-three/drei";

function SpinningRat() {
  return (
    <div className="h-screen flex-col w-screen flex items-center justify-center">
      <ModelViewer />
    </div>
  );
}

export default SpinningRat;

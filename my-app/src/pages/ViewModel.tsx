import React from "react";
import "../components/ThreeTest";
import ModelViewer from "../components/ModelViewer";
import { View } from "@react-three/drei";

function ViewModel() {
  return (
    <div className="h-screen flex-col w-screen flex items-center justify-center">
      <ModelViewer modelName="mushroom" />
    </div>
  );
}

export default ViewModel;

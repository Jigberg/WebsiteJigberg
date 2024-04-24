import React from "react";
import "../components/ThreeTest";
import ModelViewer from "../components/ModelViewer";
import { View } from "@react-three/drei";

function ViewModel() {
  return (
    <div className="h-screen flex-col w-screen flex items-center justify-center">
      <ModelViewer />
    </div>
  );
}

export default ViewModel;

{
  /* <div className="flex min-h-screen w-screen justify-center items-center">
<img src={rotateSVG} className="max-w-full max-h-full animate-spin-custom" alt="Courage" />
</div> */
}

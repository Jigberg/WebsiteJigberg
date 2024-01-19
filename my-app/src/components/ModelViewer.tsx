import React, { useRef, Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Stats, OrbitControls, useGLTF, Loader } from "@react-three/drei";
import pathToModel from "../resources/3D/mushrooms.glb";

const MyModel = () => {
  const { scene } = useGLTF(pathToModel) as any;
  const modelRef = useRef();

  return (
    <primitive
      object={scene}
      position={[0, -1, 0]}
      ref={modelRef}
      scale={[0.3, 0.3, 0.3]}
      rotation={[Math.PI / 8, -1, 0]}
    />
  );
};

const ModelViewer: React.FC = () => {
  return (
    <div className="w-screen h-screen">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <MyModel />
        </Suspense>
        <OrbitControls />
        {/* {<Stats />} */}
      </Canvas>
      <Loader />
    </div>
  );
};

export default ModelViewer;

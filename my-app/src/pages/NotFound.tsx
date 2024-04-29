import React, { useRef, useState, ChangeEvent, Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Stats, OrbitControls, useGLTF, Loader } from "@react-three/drei";
import ratPath from "../resources/3D/rat.glb";

interface ScaleFactors {
  x: number;
  y: number;
  z: number;
}

const MyModel: React.FC<{ scaleFactors: ScaleFactors }> = ({
  scaleFactors,
}) => {
  const { scene } = useGLTF(ratPath) as any;
  const modelRef = useRef();

  return (
    <primitive
      object={scene}
      position={[0, 0, 0]}
      ref={modelRef}
      scale={[scaleFactors.x, scaleFactors.y, scaleFactors.z]}
      rotation={[0, -2, 0]}
    />
  );
};

const SpinningRat: React.FC = () => {
  const [scaleFactors, setScaleFactors] = useState<ScaleFactors>({
    x: 2.3,
    y: 2.3,
    z: 2.3,
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    dimension: keyof ScaleFactors
  ) => {
    const value = parseFloat(event.target.value);
    setScaleFactors((prevScaleFactors) => ({
      ...prevScaleFactors,
      [dimension]: value,
    }));
  };

  return (
    <div className="h-screen flex-col w-screen flex items-center justify-center">
      <div className="h-full w-full absolute">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <MyModel scaleFactors={scaleFactors} />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate={true} />
          {/* {<Stats />} */}
        </Canvas>
        <Loader />
      </div>
      <div className="h-full w-full flex flex-col justify-center items-center">
        <p className="text-3xl text-white z-10">Page Not Found</p>
        <div className="absolute bottom-10 right-4 flex items-center flex-col font-roboto space-y-2 w-24">
          <input
            type="number"
            id="scaleX"
            value={scaleFactors.x}
            onChange={(e) => handleInputChange(e, "x")}
            className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="number"
            id="scaleY"
            value={scaleFactors.y}
            onChange={(e) => handleInputChange(e, "y")}
            className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="number"
            id="scaleZ"
            value={scaleFactors.z}
            onChange={(e) => handleInputChange(e, "z")}
            className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
    </div>
  );
};

export default SpinningRat;

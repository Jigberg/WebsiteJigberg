import React, {
  useRef,
  useState,
  useEffect,
  ChangeEvent,
  Suspense,
} from "react";
import { Canvas, useFrame } from "react-three-fiber";
import {
  Stats,
  OrbitControls,
  Stars,
  Sky,
  Environment,
  useGLTF,
  Loader,
  SpotLight,
} from "@react-three/drei";
import ratPath from "../resources/3D/rat.glb";
import { DirectionalLight } from "three";

interface ScaleFactors {
  x: number;
  y: number;
  z: number;
}

const MyModel: React.FC<{ scaleFactors: ScaleFactors }> = ({
  scaleFactors,
}) => {
  const { scene } = useGLTF(ratPath) as any;
  const modelRef = useRef<THREE.Object3D>();
  const [isRotating, setIsRotating] = useState(true);

  useFrame(() => {
    if (modelRef.current && isRotating) {
      modelRef.current.rotation.y += 0.002; // Adjust the rotation speed as needed
    }
  });

  useEffect(() => {
    const handleMouseDown = () => {
      setIsRotating(false);
    };

    const handleMouseUp = () => {
      setIsRotating(true);
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <primitive
      object={scene}
      position={[0, 0, 0]}
      ref={modelRef}
      scale={[scaleFactors.x, scaleFactors.y, scaleFactors.z]}
      rotation={[0, -2.3, 0]}
    />
  );
};

const SpinningRat: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      <div className="h-full w-full absolute bg-[#101010]">
        <Canvas>
          <Suspense fallback={null}>
            <MyModel scaleFactors={scaleFactors} />
          </Suspense>
          {isMobile ? (
            <></>
          ) : (
            <OrbitControls enableZoom={false} autoRotate={false} />
          )}
          <Environment far={1200} preset="sunset" />
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={10}
            saturation={0}
            fade
            speed={1}
          />
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

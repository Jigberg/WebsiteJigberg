import React from "react";
import { memo, useRef, forwardRef } from 'react'
import { suspend } from 'suspend-react'
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { Stats, OrbitControls, Center, Stars, Backdrop, Sky, Environment, useGLTF, Loader, SpotLight, CameraControls } from "@react-three/drei";
import Courage from "../resources/Courage.svg";
import * as THREE from 'three'
import record from "../resources/3D/record_player.glb";

function MyModel() {
  const { scene } = useGLTF(record) as any;
  const modelRef = useRef();

  return (
    <primitive
      object={scene}
      position={[0, 0.04, 0]}
      ref={modelRef}
      scale={[1, 1, 1]}
      rotation={[0, 1, 0]}
    />
  );
};

function Home() {
  return (
    <div className="flex flex-col">
      <div className="h-screen flex items-center justify-center w-full ">
        <Canvas gl={{ preserveDrawingBuffer: true }} dpr={1.5} camera={{ position: [0, 40, 1], fov: 25 }}>
        <ambientLight intensity={1.5 * Math.PI} />
        <Sky />
          <group position={[0, 0, 0]} rotation={[0, 3, 0]}>
            <MyModel />
            <Backdrop receiveShadow scale={[20, 5, 5]} floor={1.5} position={[0, 0, -2]}>
              <meshPhysicalMaterial roughness={1} color="#efefef" />
            </Backdrop>
            <rectAreaLight args={['white', 3]} width={5} height={5} position={[-3, 4, 1]} visible={true} />
          </group>
          <OrbitControls />
        </Canvas>
      </div>
      <div className="h-screen flex items-center justify-center w-full ">
        <img
          src={Courage}
          className="w-4/6 animate-[spin_20s_linear_infinite] md:w-96"
          alt="Courage"
        />
      </div>
    </div>
  );
}

export default Home;

import React, { useEffect } from "react";
import { memo, useRef, forwardRef } from "react";
import { suspend } from "suspend-react";
import { Canvas, useFrame, useThree, PerspectiveCameraProps } from "react-three-fiber";
import {
  Stats,
  OrbitControls,
  Center,
  Stars,
  Backdrop,
  Sky,
  Environment,
  useGLTF,
  Shadow,
  Loader,
  SpotLight,
  PerspectiveCamera,
  CameraControls,
} from "@react-three/drei";
import Courage from "../resources/Courage.svg";
import * as THREE from "three";
import record from "../resources/3D/record_player.glb";
import "../css/Scroll.css";

function MyModel() {
  const { scene } = useGLTF(record) as any;
  const modelRef = useRef();

  useEffect(() => {
    if (modelRef.current) {
      (modelRef.current as THREE.Mesh).castShadow = true;
    }
  }, []);

  return (
    <primitive
      object={scene}
      position={[0, 0.04, 0]}
      ref={modelRef}
      scale={[1, 1, 1]}
      rotation={[0, 1, 0]}
    />
  );
}

function Home() {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hiddenName");
    hiddenElements.forEach((element) => {
      observer.current?.observe(element);
    });

    return () => {
      observer.current?.disconnect();
    };
  }, []);

  const hiddenElements = document.querySelectorAll(".hiddenName");
  hiddenElements.forEach((element) => {
    observer.current?.observe(element);
  });

  return (
    <div className="flex flex-col">
      <div className="h-screen flex items-center justify-center w-full bg-[#BBBBBB]">
        <Canvas className="hiddenName">
          <PerspectiveCamera
            makeDefault
            position={[0, 2, 7]} // Set the position of the camera
            rotation={[Math.PI / 1.1, Math.PI / 1, Math.PI / 1]}
            fov={50}
            aspect={window.innerWidth / window.innerHeight}
            near={0.1}
            far={1000}
            onUpdate={(camera) => camera.updateProjectionMatrix()}
          />
          <directionalLight
            castShadow
            position={[0, 10, 0]}
            intensity={1.5}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <spotLight position={[0, 5, 10]} angle={0.3} />

          <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
            <MyModel />
            <Backdrop
              receiveShadow
              scale={[20, 5, 5]}
              floor={1.5}
              position={[0, 0, -2]}
            >
              <meshPhysicalMaterial roughness={1} color="#efefef" />
            </Backdrop>
          </group>
          <OrbitControls />
        </Canvas>
      </div>


      <div className="h-screen w-full">
        <div className="bg-gradient-to-b from-[#BBBBBB] to-[#282A3A] h-2/5" />
        <div id="content" className="hiddenName h-full flex items-center justify-center">
          <img
            src={Courage}
            className="w-4/6 animate-[spin_20s_linear_infinite] md:w-96"
            alt="Courage"
          />
        </div>

      </div>

      <div className="hiddenName h-screen flex items-center justify-center w-full ">
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

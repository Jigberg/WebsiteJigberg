import React, { useRef } from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import { Stats, OrbitControls, useGLTF } from '@react-three/drei';
import pathToCat from '../resources/3D/Kitten.glb';

const MyModel = () => {
  const { scene } = useGLTF(pathToCat) as any;
  const modelRef = useRef();

  return (
    <primitive object={scene} ref={modelRef} scale={[6.5, 6.5, 6.5]} rotation={[Math.PI / 8, Math.PI / 4, 0]} />
  );
}


const ModelViewer: React.FC = () => {
  return (
    <Canvas style={{height: '100vh', width: '100vw', position: 'absolute', top: 0 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <MyModel />
      <OrbitControls/>
      {/* <Stats /> */}
    </Canvas>
  );
};

export default ModelViewer;
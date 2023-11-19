import React, { useRef } from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import { useGLTF } from '@react-three/drei';
import pathToCat from '../resources/3D/Kitten.glb';

const MyModel = () => {
  const { scene } = useGLTF(pathToCat) as any;
  const modelRef = useRef();

  return (
    <>
    <primitive object={scene} ref={modelRef} />
    <perspectiveCamera position={[5, 50, 5]} /> {/* Fix camera */}
    </>
  );
}


const Door: React.FC = () => {
  return (
    <Canvas style={{ height: '500px', width: '500px' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <MyModel />
    </Canvas>
  );
};

export default Door;
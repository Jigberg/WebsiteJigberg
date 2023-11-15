import { PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

function Cube() {
    const meshRef = useRef<Mesh>(null);

    useFrame(() => {
        if (!meshRef.current) {
            return;
        }

        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={meshRef}>
            <PerspectiveCamera />
            <boxGeometry />
            <meshStandardMaterial color={0x3bc9db} />
        </mesh>
    );
}

const ThreeTest: React.FC = () => {
    return (
        <Canvas style={{ height: '800px' }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Cube />
        </Canvas>
    );
}

export default ThreeTest;

// Notes
// @react-three/drei' adds useful helpers and abstractions on top of react-three-fiber, necessary for building common AR/VR scenes
// @react-three/fiber' is a React renderer for Threejs on the web and react-native

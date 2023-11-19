import React from 'react';
import rotateSVG from '../resources/Courage.svg';
import 'tailwindcss/tailwind.css';
import "../css/spin.css";
import "../components/ThreeTest";
import ThreeTest from '../components/ThreeTest';
import Door from '../components/Door';

function Home() {
    return (
        <div className="min-h-screen w-screen">
            <div className = "h-[800px]">
                <Door />
            </div>
            <div className = "h-[800px]">
                <ThreeTest />
            </div>
        </div>
    );
}

export default Home;

{/* <div className="flex min-h-screen w-screen justify-center items-center">
<img src={rotateSVG} className="max-w-full max-h-full animate-spin-custom" alt="Courage" />
</div> */}
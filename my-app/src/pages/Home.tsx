import React from 'react';
import rotateSVG from '../resources/Courage.svg';
import 'tailwindcss/tailwind.css';
import "../css/spin.css";
import "../components/ThreeTest";

function Home() {
    return (
        <div className="flex-1 flex items-center justify-center w-full">
            <img src={rotateSVG} className="max-w-full max-h-full animate-spin-custom" alt="Courage" />
        </div>
    );
}

export default Home;


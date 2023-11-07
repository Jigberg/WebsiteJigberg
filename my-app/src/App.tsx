import React from 'react';
import rotateSVG from './resources/Courage.svg';
import 'tailwindcss/tailwind.css';
import Layout from './components/Layout';
import "./css/spin.css";

function App() {
  return (
    <Layout>
        <div className="flex h-full justify-center items-center">
          <img src={rotateSVG} className="max-w-full max-h-full animate-spin-custom" alt="Courage" />
        </div>
    </Layout >
  );
}

export default App;
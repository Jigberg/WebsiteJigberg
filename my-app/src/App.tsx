import React from 'react';
import rotateSVG from './resources/Courage.svg';
import 'tailwindcss/tailwind.css';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>

      <div className="">
        <img src={rotateSVG} className="App-logo" alt="logo" />
      </div>

    </Layout>
  );
}

export default App;
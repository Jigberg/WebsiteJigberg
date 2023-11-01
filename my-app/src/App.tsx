import React from 'react';
import rotateSVG from './resources/Courage.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={rotateSVG} className="App-logo" alt="logo" />
        {/*<p className="text-orange-500">Hello World!</p>*/}
      </header>
    </div>
  );
}

export default App;
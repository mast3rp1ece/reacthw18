import React from 'react';
import Timer from './components/Timer';
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>React Timer App</h1>
      <Timer time={300000} autostart={true} step={100} onTick={(time) => console.log('Remaining time: ' + time)} />
    </div>
  );
};

export default App;

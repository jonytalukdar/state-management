import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Shipment from './components/shipment/Shipment';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p>Count : {count}</p>
      <Header count={count} setCount={setCount}></Header>
      <Home count={count}></Home>
      <Shipment></Shipment>
    </div>
  );
}

export default App;

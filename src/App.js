import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Shipment from './components/shipment/Shipment';

export const CatagoryContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <CatagoryContext.Provider value={[count, setCount]}>
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
    </CatagoryContext.Provider>
  );
}

export default App;

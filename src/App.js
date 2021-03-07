import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Shipment from './components/shipment/Shipment';

export const CatagoryContext = createContext();

function App() {
  const [category, setCategory] = useState(0);

  return (
    <CatagoryContext.Provider value={[category, setCategory]}>
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
    </CatagoryContext.Provider>
  );
}

export default App;

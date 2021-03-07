import React, { useContext } from 'react';
import { CatagoryContext } from '../../App';

const Shipment = () => {
  const [category, setCategory] = useContext(CatagoryContext);
  return (
    <div>
      <h1>this is shipMent : {category}</h1>
      <button onClick={() => setCategory(category + 1)}>Increament</button>
    </div>
  );
};

export default Shipment;

import React, { useContext } from 'react';
import { CatagoryContext } from '../../App';

const Shipment = () => {
  const [count, setCount] = useContext(CatagoryContext);
  return (
    <div>
      <h1>this is shipMent : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increament</button>
    </div>
  );
};

export default Shipment;

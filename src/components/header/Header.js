import React, { useContext } from 'react';
import { CatagoryContext } from '../../App';

const Header = () => {
  const [count, setCount] = useContext(CatagoryContext);
  //   const { setCount } = props;
  return (
    <div>
      <h1>this is header : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increament</button>
    </div>
  );
};

export default Header;

import React, { useContext } from 'react';
import { CatagoryContext } from '../../App';

const Header = () => {
  const [category, setCategory] = useContext(CatagoryContext);
  //   const { setcategory } = props;
  return (
    <div>
      <h1>this is header : {category}</h1>
      <button onClick={() => setCategory('laptop')}>Laptop</button>
      <button onClick={() => setCategory('Phone')}>Phone</button>
      <button onClick={() => setCategory('Camera')}>Camera</button>
    </div>
  );
};

export default Header;

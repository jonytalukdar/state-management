import React, { useContext } from 'react';
import { CatagoryContext } from '../../App';

const Header = () => {
  const [category, setCategory] = useContext(CatagoryContext);
  //   const { setcategory } = props;
  return (
    <div>
      <h1>this is header : {category}</h1>
      <button onClick={() => setCategory(category + 1)}>Increament</button>
    </div>
  );
};

export default Header;

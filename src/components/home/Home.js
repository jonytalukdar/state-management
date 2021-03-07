import React, { useContext } from 'react';
import { CatagoryContext } from '../../App';
import Categories from './catagories/Categories';

const Home = () => {
  const category = useContext(CatagoryContext);
  return (
    <div style={{ border: '1px solid purple' }}>
      <h1>this is home category : {category}</h1>
      <Categories></Categories>
    </div>
  );
};

export default Home;
